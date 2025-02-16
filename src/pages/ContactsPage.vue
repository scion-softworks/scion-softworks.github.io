<template>
	<div class="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50">
		<NavBar />

		<!-- Contact Section -->
		<section id="contact" class="min-h-screen py-16 px-6">
			<div class="max-w-4xl mx-auto animate-fade-in-up">
				<h2 class="pt-16 text-4xl md:text-5xl font-bold text-center mb-12 text-slate-800">
					Let's Connect!
					<span class="block mt-2 text-2xl md:text-3xl font-medium text-indigo-600">How would you like to reach me?</span>
				</h2>

				<div class="grid md:grid-cols-2 gap-8 px-4">
					<!-- Discord Card -->
					<div class="group relative p-8 border-2 border-indigo-100 rounded-2xl bg-white hover:border-indigo-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
						<div class="text-center">
							<div class="flex justify-center mb-6">
								<div class="p-4 bg-indigo-100 rounded-full group-hover:bg-indigo-200 transition-colors">
									<img src="@/assets/discord-icon.svg" class="w-12 h-12" />
								</div>
							</div>
							<h3 class="text-2xl font-bold mb-4 text-slate-800">Chat on Discord</h3>
							<div class="flex items-center justify-center gap-3 mb-4">
								<span class="text-lg font-mono px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg">
									@artzified
								</span>
								<button
									@click="copyDiscord"
									class="p-2 rounded-lg hover:bg-indigo-100 transition-colors tooltip"
									data-tip="Copy to clipboard"
								>
									<svg class="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
									</svg>
								</button>
							</div>
							<p class="text-slate-600 mb-6">
								Let's chat about projects, collaborations, or just say hi!
							</p>
							<div class="text-sm text-slate-500 flex items-center justify-center gap-2">
								💤
								Typically responds within 24 hours
							</div>
						</div>
					</div>

					<!-- Roblox Card -->
					<div class="group relative p-8 border-2 border-indigo-100 rounded-2xl bg-white hover:border-indigo-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
						<div class="text-center">
							<div class="flex justify-center mb-6">
								<div class="relative group">
									<img
										src="https://tr.rbxcdn.com/30DAY-AvatarHeadshot-86B49D020CEDCA41F9FD12827AEC621E-Png/150/150/AvatarHeadshot/Png/noFilter"
										class="w-32 h-32 rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
									/>
									<div class="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-indigo-100 transition-colors"></div>
								</div>
							</div>
							<h3 class="text-2xl font-bold mb-4 text-slate-800">Roblox Profile</h3>
							<p class="text-slate-600 mb-6">
								Check out my games, join my experiences, or send me a message!
							</p>
							<a
								href="https://www.roblox.com/users/3305613465/profile"
								target="_blank"
								class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md"
							>
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M13.35 20.13c-.76.69-1.93.69-2.7-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.03-1.26.5-2.45 1.35-3.33C4.87 3.04 7.18 2 9.5 2c1.2 0 2.4.27 3.5.82.34.16.57.5.57.88 0 .1-.03.19-.07.27-.1.24-.27.45-.47.6-1.3 1.13-2.6 2.3-3.87 3.5-.3.28-.47.67-.44 1.07.04.4.26.76.6.97.47.29 1.09.25 1.5-.1.99-.96 2-1.9 3.01-2.85.45-.43 1.08-.66 1.73-.6.65.05 1.24.37 1.57.88.34.52.4 1.16.16 1.72-.22.52-.65.9-1.15 1.1-.34.14-.7.22-1.06.22-.45 0-.9-.12-1.29-.35-.27-.16-.6-.17-.88-.02-.27.15-.44.42-.44.72 0 .16.05.32.13.45.23.4.65.65 1.1.65h.04c.22 0 .44-.05.64-.14.56-.26 1.03-.68 1.33-1.22.43-.78.42-1.7-.04-2.47-.46-.77-1.3-1.24-2.2-1.24-.5 0-.98.12-1.42.35-1.17.6-2.3 1.34-3.4 2.15-.3.23-.54.53-.7.87-.17.34-.25.72-.25 1.1 0 .76.3 1.48.85 2.01 1.1 1.05 2.2 2.1 3.3 3.15.28.27.68.36 1.04.25.36-.12.65-.4.76-.77.12-.4.01-.83-.28-1.1-.47-.45-.93-.9-1.4-1.35-.3-.28-.38-.7-.2-1.06.18-.35.55-.55.94-.5.4.05.73.3.85.67.1.28.04.58-.14.8-.35.37-.7.75-1.05 1.12-.2.2-.18.53.04.7.2.18.52.16.7-.04.4-.4.78-.82 1.15-1.25.4-.46.6-1.06.55-1.67-.05-.6-.35-1.15-.85-1.5-.5-.35-1.12-.45-1.72-.28-.6.17-1.1.58-1.38 1.13-.3.58-.36 1.24-.17 1.86.19.62.6 1.14 1.13 1.47.6.37 1.3.5 2 .35.7-.14 1.3-.5 1.73-1.02.43-.52.66-1.17.65-1.84-.01-.67-.26-1.32-.72-1.82-.46-.5-1.08-.8-1.74-.85-.66-.05-1.3.16-1.8.55-.5.4-.8.97-.85 1.58-.05.6.15 1.2.55 1.63.35.37.7.75 1.05 1.12.2.2.2.53.04.7-.04.3-.2.35-.57.15-.83-.35-.4-.7-.8-1.05-1.2-.3-.34-.23-.85.15-1.1.38-.25.88-.15 1.15.2.4.45.8.9 1.2 1.35.3.34.38.85.38 1.2 0 .35-.38.35-.88 0-1.22-.4-.45-.8-.9-1.2-1.35-.5-.55-1.2-.85-1.95-.85s-1.45.3-1.95.85c-.5.55-.8 1.3-.8 2.1 0 .8.3 1.55.8 2.1.45.5 1.1.85 1.8.95.7.1 1.4-.05 2-.4.6-.35 1.05-.9 1.3-1.55.25-.65.3-1.35.13-2.02-.17-.67-.55-1.25-1.08-1.65-.53-.4-1.17-.6-1.83-.55-.66.05-1.27.3-1.73.75-.47.45-.75 1.05-.8 1.7-.05.65.15 1.3.55 1.8.35.4.7.8 1.05 1.2.2.2.2.53.04.7-.04.3-.2.35-.57.15-.83-.35-.4-.7-.8-1.05-1.2-.3-.34-.23-.85.15-1.1.38-.25.88-.15 1.15.2.4.45.8.9 1.2 1.35.3.34.85.34 1.2 0 .35-.34.35-.85 0-1.2-.4-.45-.8-.9-1.2-1.35-.5-.55-1.2-.85-1.95-.85s-1.45.3-1.95.85c-.5.55-.8 1.3-.8 2.1 0 .8.3 1.55.8 2.1.45.5 1.1.85 1.8.95.7.1 1.4-.05 2-.4.6-.35 1.05-.9 1.3-1.55.25-.65.3-1.35.13-2.02-.17-.67-.55-1.25-1.08-1.65-.53-.4-1.17-.6-1.83-.55-.66.05-1.27.3-1.73.75-.47.45-.75 1.05-.8 1.7-.05.65.15 1.3.55 1.8.35.4.7.8 1.05 1.2.2.2.53.2.7 0 .3-.2.35-.57.15-.83-.35-.4-.7-.8-1.05-1.2-.3-.34-.23-.85.15-1.1.38-.25.88-.15 1.15.2.4.45.8.9 1.2 1.35.3.34.85.34 1.2 0 .35-.34.35-.85 0-1.2z"/>
								</svg>
								Visit Profile
							</a>
						</div>
					</div>
				</div>

				<!-- Additional Contact Methods -->
				<div class="max-w-2xl mx-auto mt-16">
					<div class="text-center mb-3">
						<h3 class="text-2xl font-semibold text-slate-800 mb-4">Other Ways to Connect</h3>
						<p class="text-slate-600">Or reach out through these platforms:</p>
					</div>
					<div class="flex justify-center gap-6">
						<a href="https://github.com/scion-softworks" class="p-2 rounded-full bg-white border-2 border-indigo-100 hover:border-indigo-200 hover:bg-indigo-50 transition-colors">
							<img src="@/assets/github-icon.png" class="w-12 h-12" />
						</a>
					</div>
				</div>
			</div>
		</section>

		<FooterBar />
	</div>
</template>

<script>
export default {
	name: 'ContactsPage',
	mounted() {
		// Animation observer
		const elements = document.querySelectorAll('.animate-fade-in-up');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		elements.forEach((element) => {
			observer.observe(element);
		});
	},
	methods: {
		copyDiscord() {
			navigator.clipboard
				.writeText('@artzified')
				.then(() => alert('Discord username copied to clipboard!'))
				.catch((err) => console.error('Failed to copy:', err));
		}
	}
};
</script>

<style>
.hover\:bg-sky-100:hover {
	background-color: #e0f2fe;
}

.transition-colors {
	transition: background-color 0.2s, color 0.2s;
}
</style>
