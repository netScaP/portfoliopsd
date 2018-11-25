<template lang="pug">
	.main
		.title
			img.title-img(:src="pathImg()")
			.title-text
				p {{ whatLine.text}}
		.line-comp(@mousemove="circleMove($event)", @mouseleave="circleOut()" ref="main-line")
			.left-line
			.parts(ref="parts")
				.part(v-for="part in partLine")
					.circle(ref="circles")
					.year
						p {{ part.year }}
					.job
						p {{ part.job }}
					.desc
						p {{ part.desc }}
</template>

<script>
	export default {
		props: ['whatLine', 'partLine'],
		methods: {
			pathImg() {
				let images = require.context('../../assets/img/resume/', false, /\.png$/);
				return images('./' + this.whatLine.img);
			},
			circleMove(e) {
				for (var i = this.$refs['circles'].length - 1; i >= 1; i--) {
					this.$refs['circles'][i].style.opacity = 0;
				}
				this.$refs['circles'][0].style.marginTop = this.getMousePos(e) + 'px';
			},
			circleOut() {
				this.$refs['circles'][0].style.marginTop = '';
				setTimeout(() => {
					for (var i = this.$refs['circles'].length - 1; i >= 1; i--) {
						this.$refs['circles'][i].style.opacity = 1;
					}
				}, 300);
			},
			getMousePos(e) {
				return (e.pageY - this.$refs['main-line'].offsetTop);
			},
			getMousePercent(e) {
				return Math.floor((e.pageY - this.$refs['main-line'].offsetTop) / this.$refs['main-line'].offsetHeight * 100);
			}
		}
	}
</script>

<style lang="sass" scoped>
	.main
		display: flex
		flex-direction: column
		.title
			display: flex
			margin-top: 40px
			width: 100%
			background-color: #f3f3f3
			padding: 10px 0px
			.title-img
				background-color: white
				border-radius: 100%
				object-fit: contain
				padding: 10px
				margin: 0px 10px
			.title-text
				font-weight: bold
				font-size: 16px
				text-transform: uppercase
		.line-comp
			display: flex
			margin-top: 40px
			.parts
				display: flex
				flex-direction: column
				.part
					padding-left: 30px
					padding-right: 20px
					padding-bottom: 40px
					border-left: 1px solid rgb(209, 209, 209)
					.year
						color: rgb(90, 90, 90)
						p
							margin-top: 0px
					.job
						font-size: 16px
						font-weight: bold
						text-transform: uppercase
					.desc
						color: rgb(90, 90, 90)
						p
							margin: 0px
					&:last-child
						padding-bottom: 0px
					.circle
						display: block
						border: 2px solid rgb(54, 44, 178)
						border-radius: 100%
						background-color: white
						width: 12px
						height: 12px
						position: absolute
						margin-left: -38px
						transition: opacity 0.3s linear, margin-top 0.3s linear
					.circle-fill
						background-color: rgb(54, 44, 178)
					.circle-transition
						transition: margin-top 0.3s linear
</style>