import Home from './components/Home.vue';
import About from './components/About.vue';
import Resume from './components/Resume.vue';
import Services from './components/Services.vue';
import Portfolio from './components/Portfolio.vue';
import SinglePortfolio from './components/SinglePortfolio.vue';
import Contact from './components/Contact.vue';

export const routes = [
	{ path: '/',      component: Home,  name: 'home' },
	{ path: '/about', component: About, name: 'about' },
	{ path: '/resume', component: Resume, name: 'resume' },
	{ path: '/services', component: Services, name: 'services' },
	{ path: '/portfolio', component: Portfolio, name: 'portfolio', props: true },
	{ path: '/portfolio/:id', component: SinglePortfolio, name: 'singleportfolio', props: true },
	{ path: '/contact', component: Contact, name: 'contact' },
]