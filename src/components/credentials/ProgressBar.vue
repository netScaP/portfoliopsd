<template lang="pug">
	div
		.progress-bar
			p {{ skillName }} - {{ smth }}%
			.progress(@mousemove="triangleMove($event)", @mouseout="triangleOut()")
				.fill(:style="style", :class="{ addTransition: isOut }")
				.triangle
</template>

<script>
	export default {
		props: ['percent', 'skillName'],
		data() {
			return {
				smth: this.percent,
				isOut: false
			}
		},
		computed: {
			style() {
				return `width: ${this.smth}%`
			}
		},
		methods: {
			triangleMove(e) {
				this.smth = this.getMousePos(e);
				if ( (this.getMousePos(e) < 0) || (this.getMousePos(e) > 100) ) {
					this.smth = this.percent;
				} 
			},
			triangleOut() {
				this.smth = this.percent;
				this.isOut = true;
				setTimeout(() => {
					this.isOut = false;
				}, 300);
			},
			getMousePos(e) {
				return Math.floor((e.pageX - e.target.parentNode.offsetLeft) / e.target.parentNode.offsetWidth * 100);
			}
		}
	}
</script>

<style lang="sass" scoped>
	.addTransition
		transition: all 0.3s ease-out
	.progress-bar
		margin-top: 40px
		p
			text-transform: uppercase
		.progress
			height: 5px
			width: 100%
			display: flex
			padding: 10px 0px
			.fill
				background: #35373e
				height: 100%
			.triangle
				width: 20px
				height: 20px
				background-size: cover
				background-image: url('../../assets/img/triangle.png')
				margin-top: -18px
				margin-left: -11px
</style>