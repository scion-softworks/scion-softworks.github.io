<template>
	<div>
		<div class="overflow-hidden rounded-t-2xl">
			<img
				:src="image"
				loading="lazy"
				:alt="name + ' screenshot'"
				class="w-full h-48 object-scale-down transition-transform duration-500 group-hover:scale-105"
			/>
		</div>
		<div class="p-6">
			<h3 class="text-xl font-bold text-slate-800 mb-2">{{ name }}</h3>
			<p class="text-slate-600 mb-4">{{ description }}</p>
			<div class="flex gap-3" v-if="Object.keys(links).length">
				<a
					v-for="(url, key) in links"
					:key="key"
					:href="url"
					target="_blank"
					class="text-indigo-600 hover:text-indigo-800 transition-colors"
				>
					{{ key }}
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProjectCard',
	props: {
		name: { type: String, required: true },
		description: { type: String, required: true },
		image: { type: String, required: true },
		links: { type: Object, required: false, default: () => ({}) }
	}
};
</script>
