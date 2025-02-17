<template>
	<div
		class="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50"
	>
		<NavBar />

		<!-- Contact Section -->
		<section id="contact" class="min-h-screen py-16 px-6">
			<div class="max-w-4xl mx-auto animate-fade-in-up">
				<h2
					class="pt-16 text-4xl md:text-5xl font-bold text-center mb-12 text-slate-800"
				>
					Let's Connect!
					<span
						class="block mt-2 text-2xl md:text-3xl font-medium text-indigo-600"
						>How would you like to reach me?</span
					>
				</h2>

				<div class="grid md:grid-cols-2 gap-8 px-4">
					<!-- Discord Card -->
					<div
						class="group relative p-8 border-2 border-indigo-100 rounded-2xl bg-white hover:border-indigo-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
					>
						<div class="text-center">
							<div class="flex justify-center mb-6">
								<div
									class="p-4 bg-indigo-100 rounded-full group-hover:bg-indigo-200 transition-colors"
								>
									<img
										src="@/assets/img/discord-icon.svg"
										loading="lazy"
										class="w-12 h-12"
									/>
								</div>
							</div>
							<h3 class="text-2xl font-bold mb-4 text-slate-800">
								Chat on Discord
							</h3>
							<div
								class="flex items-center justify-center gap-1 mb-4"
							>
								<span
									class="text-lg font-mono px-2 py-1 bg-indigo-50 text-indigo-700 rounded-lg"
								>
									@artzified
								</span>
								<button
									@click="copyDiscord"
									class="p-2 rounded-lg hover:bg-indigo-100 transition-colors tooltip"
									data-tip="Copy to clipboard"
								>
									<svg
										class="w-6 h-6 text-indigo-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
										/>
									</svg>
								</button>
							</div>
							<p class="text-slate-600 mb-6">
								Let's chat about projects, collaborations, or
								just say hi!
							</p>
							<div
								class="text-sm text-slate-500 flex items-center justify-center gap-2"
							>
								💤 Typically responds within 24 hours
							</div>
						</div>
					</div>

					<!-- Roblox Card -->
					<div
						class="group relative p-8 border-2 border-indigo-100 rounded-2xl bg-white hover:border-indigo-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
					>
						<div class="text-center">
							<div class="flex justify-center mb-6">
								<div class="relative group">
									<img
										src="https://tr.rbxcdn.com/30DAY-AvatarHeadshot-86B49D020CEDCA41F9FD12827AEC621E-Png/150/150/AvatarHeadshot/Png/noFilter"
										loading="lazy"
										class="w-32 h-32 rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
									/>
									<div
										class="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-indigo-100 transition-colors"
									></div>
								</div>
							</div>
							<h3 class="text-2xl font-bold mb-4 text-slate-800">
								Roblox Profile
							</h3>
							<p class="text-slate-600 mb-6">
								Check out my games, join my experiences, or send
								me a message!
							</p>
							<a
								href="https://www.roblox.com/users/3305613465/profile"
								target="_blank"
								class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md"
							>
								<img
									src="@/assets/img/profile.png"
									loading="lazy"
									class="w-6 h-6"
								/>
								Visit Profile
							</a>
						</div>
					</div>
				</div>

				<!-- Additional Contact Methods -->
				<div class="max-w-2xl mx-auto mt-16">
					<div class="text-center mb-3">
						<h3 class="text-2xl font-semibold text-slate-800 mb-4">
							Other Ways to Connect
						</h3>
						<p class="text-slate-600">
							Or reach out through these platforms:
						</p>
					</div>
					<div class="flex justify-center gap-6">
						<a
							href="https://github.com/scion-softworks"
							class="p-2 rounded-full bg-white border-2 border-indigo-100 hover:border-indigo-200 hover:bg-indigo-50 transition-colors"
						>
							<img
								src="@/assets/img/github-icon.png"
								loading="lazy"
								class="w-12 h-12"
							/>
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
