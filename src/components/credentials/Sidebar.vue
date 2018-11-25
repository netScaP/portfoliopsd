<template lang="pug">
	.sidebar
		.image
			img(alt="image", src="../../assets/img/111.jpg")
			.name
				p Jonathon Doe
		.menu
			router-link(to="/", tag="div")
				img.homeImg(src="../../assets/img/menu/home.png")
				p Home
			router-link(to="/about", tag="div")
				img(src="../../assets/img/menu/about.png")
				p About Me
			router-link(to="/resume", tag="div")
				img(src="../../assets/img/menu/resume.png")
				p Resume
			router-link(to="/services", tag="div")
				img(src="../../assets/img/menu/services.png")
				p Services
			router-link(to="/portfolio", tag="div")
				img(src="../../assets/img/menu/portfolio.png")
				p Portfolio
			router-link(to="/contact", tag="div")
				img(src="../../assets/img/menu/contact.png")
				p Contact
		.social
			.facebook
			.twitter
			.google
			.linkedin
			.circle
</template>

<script>
	export default {

	}
</script>

<style lang="sass" scoped>
	$transit: all 0.3s linear
	::-webkit-scrollbar
		width: 0px
	.router-link-exact-active
		border-bottom: 1px solid white !important
	.sidebar
		height: 100%
		min-width: 100px
		background-color: #372db4
		overflow-y: scroll
		text-align: center
		display: flex
		flex-direction: column
		.image
			display: flex
			flex-direction: column
			width: 100%
			img
				width: 100%
			.name
				background-color: white
				color: black
				padding: 10px 0px
				p
					margin: 0px
		.menu
			display: flex
			flex-direction: column
			div
				padding: 20px 0px
				cursor: pointer
				color: rgb(181, 176, 247)
				border-bottom: 1px solid rgb(73, 63, 200)
				transition: $transit
				&:hover
					background-color: #493fc8
					color: white
					img
						filter: brightness(0) invert(1)
				p
					margin: 5px
			.homeImg
				width: 30px
		.social
			display: flex
			justify-content: center
			text-align: center
			margin-top: auto
			margin-bottom: 20px
			div
				width: 17px
				height: 15px
				background-repeat: no-repeat
				cursor: pointer
				margin-right: 2px
				&:hover
					filter: brightness(0) invert(1)
			.facebook
				background: url('../../assets/img/social/all.png') 0px 0
			.twitter
				background: url('../../assets/img/social/all.png') -23px 0
			.google
				background: url('../../assets/img/social/all.png') -46px 0
			.linkedin
				background: url('../../assets/img/social/all.png') -69px 0
			.circle
				background: url('../../assets/img/social/all.png') -92px 0
	@media(max-height: 850px)
		.sidebar
			.menu
				div
					img
						display: none
</style>