<template>
	<Head>
		<title>Scion Softworks - 404</title>
		<meta
			name="description"
			content="Oops! That page doesn't exist yet."
		/>
		<meta
			name="keywords"
			content="roblox, lua, luau, roblox studio, game development, open source, tools, tooling, 404, not found"
		/>
	</Head>
	<NavBar />

	<div class="flex flex-col items-center justify-center h-screen">
		<p
			class="text-7xl sm:text-8xl md:text-9xl lg:text-[9rem] pb-16 text-nowrap hidden min-[320px]:block"
		>
			¯\_(ツ)_/¯
		</p>
		<h1
			class="text-2xl sm:text-4xl font-semibold text-blue-800 text-center"
		>
			404 Not Found
		</h1>
		<p class="text-blue-gray-600 pb-4 m-2 text-md sm:text-xl text-center">
			Oopsies! The page you're looking for doesn't exist <i>yet</i>
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
	name: 'NotFound'
};
</script>

<script setup>
import { Head } from '@unhead/vue/components'
</script>
