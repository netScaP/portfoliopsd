<template lang="pug">
	div
		section.resume
			app-title-section(bold="Resume", transparent="more about my past")
			.story-lines
				.line(v-for="line in lines")
					app-story-line(:whatLine="line['what-a-line']", :partLine="line['part-of-line']")
</template>

<script>
	import TitleSection from './credentials/TitleSection.vue';
	import StoryLine from './credentials/StoryLine.vue';

	export default {
		data() {
			return {
				lines: [
					{
						'what-a-line': {
							'img': 'education.png',
							'text': 'Education'
						},
						'part-of-line': [
							{
								'year': '2015 - 2016',
								'job': 'Computer scince',
								'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore adipisci excepturi dolorum. Lorem ipsum dolor sit amet, consectetur'
							},
							{
								'year': '2012 - 2015',
								'job': 'Master degree of design',
								'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore adipisci excepturi dolorum. Lorem ipsum dolor sit amet, consectetur'
							},
							{
								'year': '2009 - 2012',
								'job': 'Graphic design school',
								'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore adipisci excepturi dolorum. Lorem ipsum dolor sit amet, consectetur'
							}
						]
					},
					{
						'what-a-line': {
							'img': 'employment.png',
							'text': 'work experience'
						},
						'part-of-line': [
							{
								'year': '2015 - 2016',
								'job': 'ui/ux designer',
								'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore adipisci excepturi dolorum. Lorem ipsum dolor sit amet, consectetur'
							},
							{
								'year': '2012 - 2015',
								'job': 'front end developer',
								'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore adipisci excepturi dolorum. Lorem ipsum dolor sit amet, consectetur'
							},
							{
								'year': '2009 - 2012',
								'job': 'web developer',
								'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore adipisci excepturi dolorum. Lorem ipsum dolor sit amet, consectetur'
							}
						]
					}
				]
			}
		},
		components: {
			appTitleSection: TitleSection,
			appStoryLine: StoryLine
		}
	}
</script>

<style lang="sass" scoped>
	%padding-section
		padding: 50px 15%
	.resume
		@extend %padding-section
		.story-lines
			display: flex
			justify-content: space-between
			.line
				width: 48%
	@media(max-width: 1024px)
		.resume
			.story-lines
				flex-direction: column
				.line
					width: 100%
					margin-bottom: 50px
</style>