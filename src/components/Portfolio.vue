<template lang="pug">
	div
		section.portfolio
			app-title-section(bold="portfolio", transparent="my lates work")
			app-gallery(:works="works")
</template>

<script>
	import store from '../store'
	import TitleSection from './credentials/TitleSection.vue';
	import Gallery from './credentials/Gallery.vue';

	export default {
		data() {
			return {
				works: store.works
			}
		},
		components: {
			appTitleSection: TitleSection,
			appGallery: Gallery
		}
	}
</script>

<style lang="sass" scoped>
	%padding-section
		padding: 50px 15%

	.portfolio
		@extend %padding-section

	@media(max-width: 500px)
		.portfolio
			padding: 50px
</style>