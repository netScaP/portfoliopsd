<template lang="pug">
	div
		section#single
			app-title-section(bold="portfolio single", transparent="my latest work")
			transition(:name="slide", mode="out-in")
				.work(:key="$route.params.id")
					.description
						.main
							p.work-name {{ work.name }}
							p.work-summary {{ work.summary }}
						.details
							p.project-detail Project Details
							ul
								li 
									span.bold Client:
									span  {{ work.client }}
								li
									span.bold Type:
									span
										template(v-for="tag in work.tags")  {{ tag }}, 
								li
									span.bold Date:
									span  {{ work.date }}
						.launch
							button Launch Project
					.slider
						img(:src="pathImg(work.img)")
						.switches
							router-link(:to="{ name: 'singleportfolio', params: { id: $route.params.id - 1 } }", tag="div", 
							v-if="$route.params.id > 0", @click.native="slide = 'left'").left 
								img(src="../assets/img/arrow.png")
								p Previous Project
							p(v-else).left
							router-link(:to="{ name: 'singleportfolio', params: { id: increaseId() } }", tag="div", 
							v-if="$route.params.id < workLength", @click.native="slide = 'right'").right
								img(src="../assets/img/arrow.png")
								p Next Project

</template>

<script>
	import store from '../store';
	import TitleSection from './credentials/TitleSection.vue';

	export default {
		data() {
			return {
				work: store.works[this.$route.params.id],
				workLength: store.works.length - 1,
				slide: 'right'
			}
		},
		components: {
			appTitleSection: TitleSection
		},
		methods: {
			pathImg(image) {
				let images = require.context('../assets/img/portfolio/', false, /\.png$/);
				return images('./' + image);
			},
			increaseId() {
				return Number(this.$route.params.id) + 1;
			}
		},
		beforeRouteUpdate(to, from, next) {
			this.work = store.works[to.params.id];
			next();
		}
	}
</script>

<style lang="sass" scoped>
	%padding-section
		padding: 50px 15%
	#single
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
		@extend %padding-section
		.work
			padding-top: 50px
			display: flex
			.description
				width: 30%
				display: flex
				flex-direction: column
				justify-content: space-between
				.main
					.work-name
						font-size: 30px
						text-transform: uppercase
					.work-summary
						font-size: 14px
						color: rgb(90, 90, 90)
				.details
					.project-detail
						text-transform: uppercase
						font-size: 18px
					ul
						color: rgb(53, 55, 62)
						list-style-type: none
						font-size: 14px
						padding-left: 0px
						li
							margin-top: 15px
							.bold
								font-weight: bold
				.launch
					button
						border: 2px solid rgb(53, 55, 62)
						background-color: white
						color: rgb(53, 55, 62)
						font-weight: bold
						text-transform: uppercase
						font-size: 14px
						padding: 15px 30px
						cursor: pointer
						transition: all 0.3s linear
						&:hover
							border: 2px solid white
							background-color: rgb(53, 55, 62)
							color: white
			.slider
				width: 70%
				padding-left: 40px
				img
					width: 100%
				.switches
					width: 100%
					display: flex
					justify-content: space-between
					margin-top: 20px
					.left, .right
						display: flex
						align-items: center
						cursor: pointer
						img
							width: 25px
							padding: 5px
							border: 1px solid rgb(224, 224, 224)
							margin-right: 10px
							transition: all 0.3s linear
						&:hover
							img
								border: 1px solid white
								background-color: rgb(224, 224, 224)
								filter: invert(1)
					.right
						transform: rotateY(180deg)
						p
							transform: rotateY(180deg)
	@media(max-width: 1024px)
		#single
			.work
				flex-direction: column
				.description
					width: 100%
				.slider
					width: 100%
					order: -1
					padding-left: 0px
</style>