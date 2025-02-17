<template>
	<footer
		class="mt-auto flex flex-col md:flex-row items-center justify-between w-full py-6 px-4 text-center border-t border-blue-gray-200 bg-white"
	>
		<p
			class="block font-sans text-base font-medium text-blue-gray-800 opacity-60"
		>
			© 2025 {{ orgName }}. All rights reserved.
		</p>
		<ul class="flex flex-wrap items-center gap-y-2 gap-x-6">
			<li>
				<a
					href="https://github.com/scion-softworks"
					target="_blank"
					class="flex items-center gap-1 pr-2 py-3 lg:py-0 font-sans text-base font-medium text-blue-gray-800 transition-colors hover:text-blue-600 focus:text-blue-600"
				>
					<img
						src="@/assets/img/github-icon.png"
						loading="lazy"
						class="w-6 h-6"
					/>
					GitHub
				</a>
			</li>
		</ul>
	</footer>
</template>

<script>
export default {
	name: 'FooterBar'
};
</script>
