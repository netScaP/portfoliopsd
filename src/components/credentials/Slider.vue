<template lang="pug">
	.main
		transition(:name="slide", mode="out-in")
			.slide(:key="currentEl")
				.text
					p {{ feedbacks[currentEl].text }}
				.client
					.image
						img(:src="pathImg()", :alt="currentEl")
						p.client-name {{ feedbacks[currentEl].name }}
						p.client-task {{ feedbacks[currentEl].task }}
		.arrows
			.left(@click="currentEl == 0 ? currentEl = feedbacks.length - 1 : currentEl--; slide = 'left'")
			.right(@click="currentEl == feedbacks.length - 1 ? currentEl = 0 : currentEl++; slide = 'right'")
</template>

<script>
	export default {
		props: ['feedbacks'],
		data() {
			return {
				currentEl: 0,
				slide: 'right'
			}
		},
		methods: {
			pathImg() {
				let images = require.context('../../assets/img/clients/', false, /\.png$/);
				return images('./' + this.feedbacks[this.currentEl].pathImg)
				// return "../../assets/img/clients/" + this.feedbacks[this.currentEl].pathImg;
			}
		},
		watch: {
			slide() {
				console.log(this.slide);
			}
		}
	}
</script>

<style lang="sass" scoped>
	.main
		display: flex
		flex-direction: column
		align-items: center
		width: 80%
		margin-left: 10%
		text-align: center
		padding-top: 50px
		// ANIMATION START
		.right-enter-active,
		.right-leave-active,
		.left-enter-active,
		.left-leave-active
			transition: transform .3s ease, opacity .3s ease
		.right-enter,
		.left-leave-active
			transform: translateX(100px)
			opacity: 0
		.left-enter,
		.right-leave-active
			transform: translateX(-100px)
			opacity: 0
		// ANIMATION END
		.slide
			.text
				font-size: 14px
				color: rgb(90, 90, 90)
				line-height: 1.857
			.client
				.image
					display: flex
					flex-direction: column
					align-items: center
					img
						width: 100px
						height: 100px
						object-fit: cover
						border-radius: 100%
						margin-top: 40px
					.client-name
						margin-bottom: 5px
						margin-top: 20px
						color: rgb(62, 62, 62)
						font-weight: bold
					.client-task
						color: rgb(62, 62, 62)
						margin-top: 0px
		.arrows
			display: flex
			.left, .right
				background-image: url('../../assets/img/arrow.png')
				background-size: cover
				cursor: pointer
				padding: 15px
				border: 1px solid rgb(224, 224, 224)
				margin: 10px
			.right
				transform: rotate(180deg)
</style>