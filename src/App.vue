<template lang="pug">
	#app
		aside
			transition(name="menu-slide", mode="out-in")
				app-sidebar(v-show="menuIsOpen")
			div.burger(v-if="widthSt1000", :class="{ change: menuIsOpen }", @click="menuIsOpen = !menuIsOpen;")
				div.bar.bar1
				div.bar.bar2
				div.bar.bar3
		section.view(:class="{ widthClass: !menuIsOpen }")
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
				msg: 'Welcome to Your Vue.js App',
				menuIsOpen: true,
				widthSt1000: false
			}
		},
		components: {
			appSidebar: Sidebar
		},
		watch: {
			$route (to, from) {
				this.menuIsOpen = false;
			}
		},
		created() {
			if (window.innerWidth < 1000) {
				this.menuIsOpen = false;
				this.widthSt1000 = true;
			}
		}
	}
</script>

<style lang="sass">
	@import '../node_modules/@typopro/web-montserrat/TypoPRO-Montserrat-Regular.css'

	.menu-slide-enter-active,
	.menu-slide-leave-active
		transition: all .5s ease
	.menu-slide-enter,
	.menu-slide-leave-to
		transform: translateX(-100px)
		opacity: 0
	
	body
		padding: 0px
		margin: 0px
		font-family: 'TypoPRO Montserrat'
	#app
		width: 100%
		display: flex
		flex-direction: column-reverse
		.burger
			position: fixed
			top: 0px
			z-index: 1001
			display: inline-block
			cursor: pointer
			.bar
				width: 35px
				height: 5px
				background-color: #333
				margin: 6px 0px
				transition: 0.4s
		.change
			.bar1
				transform: rotate(-45deg) translate(-9px, 6px)
			.bar2
				opacity: 0
			.bar3
				transform: rotate(45deg) translate(-8px, -8px)
		aside
			width: 150px
			font-size: 1em
			height: 100vh
			z-index: 1000
			position: fixed
			left: 0
			top: 0
		.view
			margin-left: 150px
			width: calc(100% - 150px)
			transition: all 0.5s ease
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
		.widthClass
			margin-left: 0px !important
			width: 100% !important
	@media (max-width: 1000px)
		#app
			aside
				width: 200px
				font-size: 1.5em
			.view
				margin-left: 200px
				width: calc(100% - 200px)
</style>