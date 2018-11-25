import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import { routes } from './routes'

export const store = {
	works: [
		{
			'img': 'angular.png',
			'name': 'Angular 6',
			'client': 'Jogh',
			'tags': ['angular', 'web development']
		},
		{
			'img': 'codefox.png',
			'name': 'Codefox production',
			'client': 'CodeFox',
			'tags': ['web development']
		},
		{
			'img': 'angular.png',
			'name': 'Angular 6',
			'client': 'Jogh',
			'tags': ['angular', 'web development']
		},
		{
			'img': 'codefox.png',
			'name': 'Codefox production',
			'client': 'CodeFox',
			'tags': ['web development']
		},
		{
			'img': 'angular.png',
			'name': 'Angular 6',
			'client': 'Jogh',
			'tags': ['angular', 'web development']
		},
		{
			'img': 'codefox.png',
			'name': 'Codefox production',
			'client': 'CodeFox',
			'tags': ['web development']
		},
		{
			'img': 'angular.png',
			'name': 'Angular 6',
			'client': 'Jogh',
			'tags': ['angular', 'web development']
		},
		{
			'img': 'codefox.png',
			'name': 'Codefox production',
			'client': 'CodeFox',
			'tags': ['web development']
		},
		{
			'img': 'angular.png',
			'name': 'Angular 6',
			'client': 'Jogh',
			'tags': ['angular', 'web development']
		}
	]
}

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
