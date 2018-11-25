<template lang="pug">
	div
		nav
			ul
				li(v-for="tag in tags")
					p(@click="currentTag = tag;", :class="{ activeMenu: currentTag == tag }") {{ tag }}
		transition-group.gallery(name="works", mode="out-in", tag="div")
			router-link.work(v-for="(work, index) in currentWorks", :to="{ name: 'singleportfolio', params: { id: index } }", tag="div", :key="index")
				img(:src="pathImg(work.img)")
				.summary
					p.name {{ work.name }}
					p.client Client: {{ work.client }}
</template>

<script>
	export default {
		data() {
			return {
				tags: ['all'],
				currentTag: 'all'
			}
		},
		props: ['works'],
		methods: {
			pathImg(image) {
				let images = require.context('../../assets/img/portfolio/', false, /\.png$/);
				return images('./' + image);
			}
		},
		computed: {
			currentWorks() {
				if (this.currentTag == 'all') return this.works;
				return this.works.filter(work => {
					if (work.tags.indexOf(this.currentTag) > -1) {
						return work;
					}
				});
			}
		},
		created() {
			for (var i = this.works.length - 1; i >= 0; i--) {
				for (let k = 0; k < this.works[i].tags.length; k++) {
					if (this.tags.indexOf(this.works[i].tags[k]) == -1) {
						this.tags.push(this.works[i].tags[k]);
					}
				}
			}
		}
	}
</script>

<style lang="sass">
	// ANIMATION START
	.works-enter-active,
	.works-leave-active
		transition: all .5s ease
	.works-enter,
	.works-leave-to
		transform: scale(0.5) translateY(-100px)
		opacity: 0
	.works-move
		transition: all .5s ease
	// ANIMATION END
	nav
		margin-top: 50px
		margin-bottom: 50px
		ul
			padding: 0px
			display: flex
			flex-wrap: wrap
			width: 100%
			list-style-type: none
			li
				p
					font-size: 12px
					text-transform: uppercase
					color: rgb(125, 125, 125)
					padding: 10px 20px
					border: 1px solid transparent
					cursor: pointer
					transition: all 0.3s linear
				.activeMenu
					border: 1px solid black
					color: black
					font-weight: bold

	.gallery
		display: flex
		justify-content: space-between
		flex-wrap: wrap
		.work
			margin-bottom: 30px
			margin-right: 10px
			width: 300px
			display: flex
			justify-content: center
			align-items: center
			&:hover
				.summary
					opacity: 1
				img
					opacity: 0.4
			img
				width: 100%
				height: 100%
				object-fit: contain
				transition: all 0.3s linear
			.summary
				opacity: 0
				position: absolute
				text-align: center
				transition: all 0.3s linear
				.name
					text-transform: uppercase
					font-weight: bold
				.client
					color: rgb(47, 47, 47)
					font-size: 14px
</style>