<template lang="pug">
	div
		section.about
			app-title-section(bold="About me", transparent="I am Jonathon Doe")
			.info
				.with-img
					img(alt="empty", src="../assets/img/aboutman.jpg")
				.profile
					.description
						.left-p
							.single
								p.bold Full Name 
								p  : Jonathon Doe
							.single
								p.bold Address 
								p : Jatrabari, Dhaka. Bangladesh
							.single
								p.bold Phone 
								p : +4573-8365-9374
							.single
								p.bold Email 
								p : johndoe@domain.com
						.right-p
							.single
								p.bold Date of Birthday 
								p : 21 January 1985
							.single
								p.bold Job
								p : Freelancer
							.single
								p.bold Skype
								p : johndoe_647
							.single
								p.bold Website
								p : www.johndoe.com
					.summary
						p I'm a Front End Developer and UI Designer Based in Austin, I have a Passion for Creating Clean, Beautiful, interactive, Minimalistic, Responsive and User Friendly UI, Developed by Modular, Scalable and Functional Code. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the Impenetrable foliage of my trees, and but a few stray gleams steal. I throw myself down among the tall grass by the trickling stream: and, as I lie close to the earth, a thousand unknown.
					.buttons
						button Hire me
						button Download resume
		section.skills
			app-title-section(bold="My skills", transparent="My special expertise")
			.bars
				.left-b
					app-progress-bar(percent="30", skillName="web design")
					app-progress-bar(percent="85", skillName="wordpress")
					app-progress-bar(percent="92", skillName="app development")
				.right-b
					app-progress-bar(percent="90", skillName="php & mysql")
					app-progress-bar(percent="60", skillName="joomla")
					app-progress-bar(percent="98", skillName="html & css")
		section.feedback
			app-title-section(bold="testimonials", transparent="what clients says about me")
			app-slider(:feedbacks="feedbacks")
</template>

<script>
	import TitleSection from './credentials/TitleSection.vue';
	import ProgressBar from './credentials/ProgressBar.vue';
	import Slider from './credentials/Slider.vue';

	export default {
		data() {
			return {
				feedbacks: [
					{
						'text': "I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me, un strikes the upper surface of the Impenetrable foliage of my trees. I throw myself down among the tall grass by the trickling stream; and.",
						'name': 'Abdur Rahim',
						'task': 'CEO of Theme-Valley',
						'pathImg': 'abdur.png'
					},
					{
						'text': "Un strikes the upper surface of the Impenetrable foliage of my trees. I throw myself down among the tall grass by the trickling stream; and. I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me",
						'name': 'Alex Ivanov',
						'task': 'Front-end',
						'pathImg': 'alex.png'
					}
				]
			}
		},
		components: {
			appTitleSection: TitleSection,
			appProgressBar: ProgressBar,
			appSlider: Slider
		}
	}
</script>

<style lang="sass" scoped>
	$color: rgb(168, 168, 168)
	
	%padding-section
		padding: 50px 15%

	.about
		@extend %padding-section
		.info
			width: 100%
			display: flex
			margin-top: 50px
			.with-img
				width: 35%
				img
					width: 100%
			.profile
				width: 60%
				margin-left: 5%
				.description
					display: flex
					justify-content: space-between
					flex-direction: column
					padding-bottom: 30px
					border-bottom: 1px solid $color
					.left-p, .right-p
						.single
							display: flex
							.bold
								font-weight: bold
				.summary
					margin-top: 40px
					color: rgb(90, 90, 90)
					line-height: 1.857
				.buttons
					margin-top: 40px
					button
						font-size: 14px
						font-family: "TypoPRO Montserrat", sans-serif
						font-weight: bold
						color: rgb(53, 55, 62)
						text-transform: uppercase
						border: 2px solid rgb(53, 55, 62)
						background-color: transparent
						padding: 20px 0px
						cursor: pointer
						margin-right: 40px
						width: 200px
						transition: all 0.3s linear
						&:hover
							background-color: rgb(53, 55, 62)
							color: white
	.skills
		background-color: #f7f7f7
		@extend %padding-section
		.bars
			display: flex
			justify-content: space-between
			margin-top: 40px
			padding-bottom: 50px
			.left-b, .right-b
				width: 40%
			.left-b
	.feedback
		@extend %padding-section
	@media(max-width: 1024px)
		.about
			.info
				flex-direction: column
				.with-img
					width: 100%
				.profile
					width: 100%
					.buttons
						display: flex
						justify-content: center
		.skills
			.bars
				.left-b, .right-b
					width: 48%
	@media(max-width: 500px)
		.about
			padding: 50px
		.skills
			padding: 50px
			.bars
				flex-wrap: wrap
				.left-b,
				.right-b
					width: 100%
		.feedback
			padding: 50px
			.main
				width: 100%
				margin-left: 0px
</style>