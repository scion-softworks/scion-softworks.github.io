<template>
	<img
		:src="image"
		alt="Project screenshot"
		class="w-full h-48 object-scale-down"
	/>
	<div class="p-6">
		<h3 class="text-xl font-semibold mb-2">{{ name }}</h3>
		<p class="text-blue-gray-800 mb-4">
			{{ description }}
		</p>
		<div class="flex gap-3">
			<a :href="github" class="text-blue-600 hover:text-blue-700">GitHub</a>
			<a :href="docs" v-if="docs" class="text-blue-600 hover:text-blue-700">Docs</a>
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
		github: {
			type: String,
			required: true
		},
		docs: {
			type: String,
			required: false
		}
	}
};
</script>
