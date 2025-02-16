<template>
	<NavBar />

	<div class="flex flex-col items-center justify-center h-screen">
		<p class="text-8xl pb-16">¯\_(ツ)_/¯</p>
		<h1 class="text-4xl font-semibold text-blue-gray-800">404 Not Found</h1>
		<p class="text-blue-gray-600 pb-4 text-lg">
			The page you're looking for doesn't exist <i>yet</i>
		</p>

		<router-link
			to="/"
			class="bg-blue-600 text-white text-xl px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
		>
			Go back
		</router-link>
	</div>

	<FooterBar />
</template>

<script>
export default {
	name: 'ProjectsPage',
};
</script>
