import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router.js';

import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';

import animateObserver from './plugins/animateObserver';

import projects from '@/assets/data/projects.json'
import team from '@/assets/data/team.json'
import values from '@/assets/data/values.json'

const app = createApp(App);

app.use(animateObserver);
app.use(router).mount('#app');

app.component('NavBar', NavBar);
app.component('FooterBar', FooterBar);

app.config.globalProperties.$orgName = 'Scion Softworks';
app.config.globalProperties.$projects = projects;
app.config.globalProperties.$team = team;
app.config.globalProperties.$values = values;