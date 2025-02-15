import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router.js';

const app = createApp(App);

app.use(router).mount('#app');

app.config.globalProperties.$orgName = 'Scion Softworks';

app.mixin({
	computed: {
		orgName() {
			return this.$orgName;
		}
	}
});
