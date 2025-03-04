<template>
	<div
		class="p-6 bg-white border-2 rounded-lg animate-fade-in-up transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
	>
		<h3 class="text-xl font-semibold mb-3">{{ header }}</h3>
		<p class="text-blue-gray-800">{{ subtext }}</p>
	</div>
</template>

<script>
export default {
	name: 'FeatureCard',
	props: {
		header: {
			type: String,
			required: true
		},
		subtext: {
			type: String,
			required: true
		}
	}
};
</script>
