<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App'
};
</script>

<style>
html, body, #app {
  height: 100%;
  box-sizing: border-box;
}

.animate-fade-in-up {
	opacity: 0;
	transform: translateY(20px);
	transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-fade-in-up.visible {
	opacity: 1;
	transform: translateY(0);
}
</style>
