<template>
	<img
		:src="image"
		loading="lazy"
		alt="{{ name }} screenshot"
		class="w-full h-48 object-scale-down"
	/>
	<div class="p-6">
		<h3 class="text-xl font-semibold mb-2">{{ name }}</h3>
		<p class="text-blue-gray-800 mb-4">
			{{ description }}
		</p>
		<div class="flex gap-3" v-if="Object.keys(links).length">
			<div v-for="(url, key) in links" :key="key">
				<a
					:href="url"
					target="_blank"
					class="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300"
					>{{ key }}</a
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProjectCard',
	props: {
		name: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		links: {
			type: Object,
			required: false, // Set to false if you want it to be optional
			default: () => ({}) // Provide an empty object as the default value
		}
	}
};
</script>
