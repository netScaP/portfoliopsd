<template lang="pug">
	#app
		aside
			app-sidebar
		section.view
			transition(name="fade", mode="out-in")
				router-view.router-view-class
			footer
				p @ 2017 Copyright Rida all right reserved. Designed and developed by Ali
</template>

<script>
	import Sidebar from './components/credentials/Sidebar.vue';

	export default {
		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components: {
			appSidebar: Sidebar
		}
	}
</script>

<style lang="sass">
	@import '../node_modules/@typopro/web-montserrat/TypoPRO-Montserrat-Regular.css'
	// @font-face 
	// 	font-family: 'Montserrat'
	// 	src: url('assets/fonts/Montserrat-Regular.ttf') format("truetype")
	// 	font-weight: 400
	// 	font-style: normal
	body
		padding: 0px
		margin: 0px
		font-family: 'TypoPRO Montserrat'
	#app
		width: 100%
		display: flex
		aside
			width: 5%
			height: 100vh
			z-index: 1000
			position: fixed
			left: 0
			top: 0
		.view
			margin-left: 5%
			width: 95%
			.router-view-class
				-webkit-box-shadow: -3px 3px 19px -5px rgba(0,0,0,0.3)
				-moz-box-shadow: -3px 3px 19px -5px rgba(0,0,0,0.3)
				box-shadow: -3px 3px 19px -5px rgba(0,0,0,0.3)
			footer
				padding: 20px 0px
				text-align: center
				color: rgb(159, 159, 159)
			.fade-enter-active,
			.fade-leave-active
				transition: opacity .3s ease, margin-left .3s ease
			.fade-enter,
			.fade-leave-active
				opacity: 0
				position: abosulte
				margin-left: -5%
</style>