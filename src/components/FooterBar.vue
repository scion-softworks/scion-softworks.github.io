<template>
	<footer
		class="mt-auto flex flex-col md:flex-row items-center justify-between w-full py-6 px-4 text-center border-t border-blue-gray-200 bg-white"
	>
		<p
			class="block font-sans text-base font-medium text-blue-gray-800 opacity-60"
		>
			© 2024 {{ orgName }}. All rights reserved.
		</p>
		<ul class="flex flex-wrap items-center gap-y-2 gap-x-6">
			<li>
				<router-link
					to="/contacts"
					class="flex items-center gap-1 font-sans text-base font-medium text-blue-gray-800 transition-colors hover:text-blue-600 focus:text-blue-600"
				>
					Contacts
				</router-link>
			</li>
			<li>
				<a
					href="#"
					target="_blank"
					class="flex items-center gap-1 font-sans text-base font-medium text-blue-gray-800 transition-colors hover:text-blue-600 focus:text-blue-600"
				>
					Contribute
				</a>
			</li>
			<li>
				<a
					href="https://github.com/scion-softworks"
					target="_blank"
					class="flex items-center gap-1 font-sans text-base font-medium text-blue-gray-800 transition-colors hover:text-blue-600 focus:text-blue-600"
				>
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
