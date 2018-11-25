<template lang="pug">
	div
		.title
			p.bold {{ bold }}
			p.transparent {{ transparent }}
</template>

<script>
	export default {
		props: ['bold', 'transparent']
	}
</script>

<style lang="sass" scoped>
	$color: rgb(168, 168, 168)
	.title
		text-align: center
		border-bottom: 1px solid $color
		&:after
			content: ' '
			display: block
			width: 10px
			height: 10px
			border-radius: 100%
			background-color: #362cb1
			margin-bottom: -5px !important
			margin: auto
		.bold
			font-size: 24px
			margin-bottom: 10px
			text-transform: uppercase
			font-weight: bold
		.transparent
			margin: 0
			font-size: 16px
			color: $color
			text-transform: uppercase
			margin-bottom: 30px
</style>