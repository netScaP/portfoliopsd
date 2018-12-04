<template lang="pug">
	div
		section#contact
			app-title-section(bold="let's talk", transparent="get in touch with me")
			.contact-info
				p.center-text Please Feel free to get in Touch Anytime, whether for Work inquirles or to just say Hello!
				.wrapper
					form(@submit.prevent="submit()")
						input(type="text", name="name", placeholder="Name", v-model="name", required)
						input(type="text", name="email", placeholder="Email", v-model="email", required)
						input(type="text", name="phone", placeholder="Phone", v-model="phone", required)
						input(type="text", name="website", placeholder="Website", v-model="website")
						textarea(placeholder="Description", rows="10", v-model="subject")
						button(type="submit") Send Message
					.my-info
						.address
							p.bold Address
							p.desc 133 South Kutubkhali Donia, Jatrabari Dhaka-1236
						.contact
							p.bold Contact info
							p.desc jonathondoe@gmail.com
								br
								span 01 (800) 433 633
						.working
							p.bold working hours
							p.desc Daily 10.00 to 22.00 ( Sunday Available )
</template>

<script>
	import TitleSection from './credentials/TitleSection.vue';

	import * as emailjs from 'emailjs-com';

	export default {
		data() {
			return {
				name: '',
				email: '',
				phone: '',
				website: '',
				subject: ''		
			}
		},
		methods: {
			submit() {
				emailjs.send('gmail', 'mail', {
					'name': this.name,
					'email': this.email,
					'phone': this.phone,
					'website': this.website,
					'subject': this.subject
				}, 'user_letgRoYc8zdoJwA7e4m6U')
				.then(res => {
					console.log(res.status + ' ' + res.text);
				}).catch(e => {
					console.log(e);
				})
			}
		},
		components: {
			appTitleSection: TitleSection
		}
	}
</script>

<style lang="sass" scoped>
	%padding-section
		padding: 50px 15%
	#contact
		@extend %padding-section
		.contact-info
			padding-top: 50px
			.center-text
				color: rgb(76, 76, 76)
				text-align: center
			.wrapper
				display: flex
				flex-wrap: wrap
				padding-top: 50px
				form
					width: 50%
					display: flex
					flex-wrap: wrap
					justify-content: space-between
					input
						width: 42%
						padding: 15px
						margin-bottom: 20px
					textarea
						width: 100%
						padding: 15px
						font-family: 'TypoPRO Montserrat'
						resize: vertical
					input, textarea
						border: 1px solid rgb(234, 234, 234)
						border-radius: 5px
					button
						margin-top: 20px
						border: 2px solid rgb(53, 55, 62)
						background-color: white
						color: rgb(53, 55, 62)
						font-weight: bold
						text-transform: uppercase
						padding: 15px 30px
						cursor: pointer
						transition: all 0.3s linear
						&:hover
							border: 2px solid white
							background-color: rgb(53, 55, 62)
							color: white
				.my-info
					width: 40%
					margin-left: 10%
					& > div
						border-bottom: 1px solid rgb(234, 234, 234)
						padding: 30px 0px
						display: flex
						flex-direction: column
						justify-content: space-around
					& > div:first-child
						padding: 0px 0px 30px 0px
					.bold
						font-weight: bold
						text-transform: uppercase
						margin-top: 0px
					.desc
						color: rgb(76, 76, 76)
						font-size: 14px
						margin: 0px
	@media(max-width: 1024px)
		#contact
			padding: 50px 10%
			.contact-info
				.wrapper
					form
						input
							width: 100%
	@media(max-width: 500px)
		#contact
			.contact-info
				.wrapper
					form, .my-info
						width: 100%
					form
						margin-bottom: 50px
					.my-info
						margin-left: 0px
</style>