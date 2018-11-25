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
			font-size: 220px
			font-weight: bold
			margin-bottom: 0px
			margin-top: -100px
		.whoami
			font-size: 49px
			color: rgb(53, 55, 62)
			font-weight: bold
			text-transform: uppercase
			margin: 0px
			margin-top: -50px
</style>