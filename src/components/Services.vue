<template lang="pug">
	div
		section.service
			app-title-section(bold="services", transparent="what i can do for you")
			.services
				.single-service(v-for="service in services")
					//- .service-img(:style="{ background-image: url(pathImg(service.img)) }")
					img(:src="pathImg(service.img)")
					.text
						.title
							p {{ service.title }}
						.summary
							p {{ service.summary }}
		section.funfacts
			.fact(v-for="fact in funfacts")
				img(:src="pathImg(fact.img)")
				.num
					p {{ fact.num }}
				.title
					p {{ fact.title }}
		section.workprocess
			app-title-section(bold="my working process", transparent="method of business process")
			.processes
				.left-process
					.signle-process
						.num
							p 01
						.name
							p discuss idea
						.summary
							p I could describe these conceptions, also impress upon paper all that is living.
					.signle-process
						.num
							p 02
						.name
							p creative concept
						.summary
							p I could describe these conceptions, also impress upon paper all that is living.
				.mid-process
					.circle
						p working process
				.right-process
					.signle-process
						.num
							p 03
						.name
							p production
						.summary
							p I could describe these conceptions, also impress upon paper all that is living.
					.signle-process
						.num
							p 04
						.name
							p unlimited support
						.summary
							p I could describe these conceptions, also impress upon paper all that is living.
</template>

<script>
	import TitleSection from './credentials/TitleSection.vue';

	export default {
		data() {
			return {
				'services': [
					{
						'img': 'trendy.png',
						'title': 'trendy design',
						'summary': 'I could describe these conceptions, also impress upon paper all that is living.'
					},
					{
						'img': 'webdev.png',
						'title': 'web development',
						'summary': 'I could describe these conceptions, also impress upon paper all that is living.'
					},
					{
						'img': 'appdev.png',
						'title': 'app development',
						'summary': 'I could describe these conceptions, also impress upon paper all that is living.'
					},
					{
						'img': 'ui.png',
						'title': 'user interface design',
						'summary': 'I could describe these conceptions, also impress upon paper all that is living.'
					},
					{
						'img': 'ux.png',
						'title': 'user experience',
						'summary': 'I could describe these conceptions, also impress upon paper all that is living.'
					},
					{
						'img': 'responsive.png',
						'title': 'responsive design',
						'summary': 'I could describe these conceptions, also impress upon paper all that is living.'
					}
				],
				'funfacts': [
					{
						'img': 'trendy.png',
						'num': '235',
						'title': 'projects completed'
					},
					{
						'img': 'happy.png',
						'num': '365',
						'title': 'happy clients'
					},
					{
						'img': 'awards.png',
						'num': '38',
						'title': 'awards won'
					},
					{
						'img': 'coffee.png',
						'num': '365',
						'title': 'cups of coffee'
					}
				]
			}
		},
		methods: {
			pathImg(img) {
				let images = require.context('../assets/img/services/', false, /\.png$/);
				return images('./' + img);
			}
		},
		components: {
			appTitleSection: TitleSection
		}
	}
</script>

<style lang="sass" scoped>
	%padding-section
		padding: 50px 15%
	%process-side
		display: flex
		flex-direction: column
		justify-content: space-between
		width: 30%
	.service, .funfacts, .workprocess
		@extend %padding-section
	.service
		.services
			margin-top: 80px
			display: flex
			flex-wrap: wrap
			justify-content: space-between
			.single-service
				display: flex
				padding-right: 20px
				padding-bottom: 50px
				flex: 30%
				&:hover
					img
						filter: invert(1)
				img
					background-color: white
					width: 50px
					height: 25px
					object-fit: contain
					border: 1px solid black
					padding: 10px
					transition: all 0.3s linear
				.text
					margin-left: 20px
					.title
						text-transform: uppercase
						font-weight: bold
					.summary
						color: rgb(90, 90, 90)
						font-size: 14px
	.funfacts
		background-color: #f7f7f7
		display: flex
		flex: 25%
		flex-wrap: wrap
		.fact
			display: flex
			flex-direction: column
			justify-content: space-between
			align-items: center
			width: 25%
			transform: scale(0.6)
			img
				width: 30px
				height: 30px
				object-fit: contain
			.num
				font-size: 36px
				color: rgb(53, 55, 62)
				p
					margin: 25px auto
			.title
				text-align: center
				text-transform: uppercase
				color: rgb(94, 94, 94)
				p
					margin: 0px auto
	.workprocess
		padding-bottom: 100px
		.processes
			display: flex
			justify-content: space-between
			margin-top: 80px
			.left-process
				text-align: right
				@extend %process-side
			.right-process
				@extend %process-side
			.signle-process
				.num
					font-size: 36px
					color: rgb(212, 212, 212)
					p
						margin-bottom: 10px
						margin-top: 0px
				.name
					font-size: 16px
					text-transform: uppercase
					position: relative
					p
						margin-bottom: 5px
				.summary
					font-size: 14px
					color: rgb(90, 90, 90)
			.mid-process
				.circle
					width: 400px
					height: 400px
					display: flex
					justify-content: center
					align-items: center
					text-align: center
					border-radius: 100%
					border: 2px solid rgb(238, 238, 238)
					position: relative
					p
						text-transform: uppercase
						font-size: 55px
						color: rgb(238, 238, 238)
					&:before
						content: ' '
						display: block
						border: 2px solid rgb(238, 238, 238)
						border-radius: 100%
						background: none
						position: absolute
						top: 15px
						left: 15px
						right: 15px
						bottom: 15px
						points-events: none
				.circle-sup
					width: 90%
					height: 90%
					border-radius: 100%
					border: 1px solid rgb(54, 44, 177)
	@media(max-width: 1024px)
		.workprocess
			.processes
				.mid-process
					align-self: center
					.circle
						width: 200px
						height: 200px
						p
							font-size: 25px
	@media(max-width: 900px)
		.workprocess
			.processes
				.mid-process
					display: none
				.right-process, .left-process
					width: 45%
					text-align: left
	@media(max-width: 500px)
		.service, .funfacts, .workprocess
			padding: 50px
		.service
			.services
				.single-service
					padding-right: 0px
		.workprocess
			.processes
				flex-wrap: wrap
				.left-process, .right-process
					width: 100%
					text-align: center
</style>