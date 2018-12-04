<template lang="pug">
	div
		p.hello Hello
		p.whoami I am jonathon doe
</template>

<script>
	export default {

	}
</script>

<style lang="sass" scoped>
	div
		height: 100vh
		width: 100%
		display: flex
		justify-content: center
		align-items: center
		flex-direction: column
		.hello
			color: rgba(53, 55, 62, 0.102)
			font-size: 15em
			font-weight: bold
			margin-bottom: 0px
			margin-top: -100px
		.whoami
			font-size: 3em
			color: rgb(53, 55, 62)
			font-weight: bold
			text-transform: uppercase
			margin: 0px
			margin-top: -50px
	@media(max-width: 750px)
		div
			.hello
				font-size: 5em
			.whoami
				margin-top: -20px
				font-size: 1em
</style>