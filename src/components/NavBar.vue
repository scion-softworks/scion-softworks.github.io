<template>
	<nav
		class="border-2 border-sky-500 border-opacity-50 fixed w-full bg-sky-100 py-4 px-6 border-b border-blue-gray-200 z-50"
	>
		<div
			class="flex flex-wrap items-center justify-between max-w-6xl mx-auto"
		>
			<a href="/">
				<span class="text-2xl font-bold text-blue-gray-800">{{
					orgName
				}}</span>
			</a>
			<div class="flex gap-6 mt-2 md:mt-0">
				<router-link
					to="/about-us"
					class="text-blue-gray-800 hover:text-blue-600 transition-colors"
				>
					About Us
				</router-link>
				<router-link
					to="/contacts"
					class="text-blue-gray-800 hover:text-blue-600 transition-colors"
				>
					Contacts
				</router-link>
				<router-link
					to="/projects"
					class="text-blue-gray-800 hover:text-blue-600 transition-colors"
				>
					Projects
				</router-link>
				<router-link
					to="/contribute"
					class="text-blue-gray-800 hover:text-blue-600 transition-colors"
				>
					Contribute
				</router-link>
				<a
					href="https://discord.gg/YavbjPc8"
					target="_blank"
					class="text-blue-gray-800 hover:text-blue-600 transition-colors"
				>
					Community
				</a>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'NavBar'
};
</script>
