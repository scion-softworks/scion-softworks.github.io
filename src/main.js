import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router.js';

import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';

const app = createApp(App);

app.use(router).mount('#app');

app.config.globalProperties.$orgName = 'Scion Softworks';
app.config.globalProperties.$projects = [
	{
		name: 'Parallelizer',
		description:
			'Parallelizer is a lightweight buffer-based parallelism solution with minimal overhead in mind',
		links: {
			Github: 'https://github.com/scion-softworks/parallelizer',
			Docs: 'https://scion-softworks.github.io/parallelizer',
			Wally: 'https://wally.run/package/artzified/parallelizer'
		},
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJM0JCzFHFW2cqimo2V2NChHSijFxu8RNS4Q&s',
	},
	{
		name: 'Muon',
		description:
			'Muon is a simple memory store library typescript implementation designed with ease of use in mind. It features exponential backoff for every operation in Hash Maps, Queues, and Sorted Maps',
		links: {
			Github: 'https://github.com/scion-softworks/Muon',
			Docs: 'https://github.com/scion-softworks/Muon/blob/master/README.md',
			NPM: 'https://www.npmjs.com/package/@rbxts/muon'
		},
		image: 'https://raw.githubusercontent.com/scion-softworks/Muon/refs/heads/master/public/logo.svg',
	},
	{
		name: 'PriorityQueue',
		description:
			'PriorityQueue is a simple priority queue typescript implementation with both MinHeapPriorityQueue and MaxHeapPriorityQueue. Both of them inherit the same base PriorityQueue class',
		links: {
			Github: 'https://github.com/scion-softworks/PriorityQueue',
			NPM: 'https://www.npmjs.com/package/@rbxts/priorityqueue'
		},
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPMwSiKxkkg3XpuyWqi_GgixTA5BSKnRj0A&s'
	}
];

app.component('NavBar', NavBar);
app.component('FooterBar', FooterBar);

app.mixin({
	computed: {
		orgName() {
			return this.$orgName;
		},
		projects() {
			return this.$projects;
		}
	}
});
