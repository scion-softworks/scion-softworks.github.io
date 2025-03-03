import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router.js';

import { createHead } from '@unhead/vue/client'

import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import animateObserver from './plugins/animateObserver';

const app = createApp(App);
const head = createHead()

const dataContext = require.context('@/assets/data/', false, /\.json$/);

dataContext.keys().forEach((path) => {
	const fileName = path.replace('./', '').replace('.json', '');
	const module = dataContext(path);

	app.config.globalProperties[`$${fileName}`] = module;
});

app.config.globalProperties.$orgName = 'Scion Softworks';

app.use(head);
app.use(animateObserver);
app.use(router)
	.component('NavBar', NavBar)
	.component('FooterBar', FooterBar)
	.mount('#app');
