<template>
	<div class="flex flex-col min-h-screen">
		<!-- Add to navigation -->
		<NavBar />

		<!-- Contact Section -->
		<section id="contact" class="min-h-screen py-16 px-6 bg-white">
			<div class="max-w-4xl mx-auto animate-fade-in-up">
				<h2
					class="pt-16 text-3xl font-bold text-center mb-12 drop-shadow-md"
				>
					Contact Me
				</h2>

				<div class="grid md:grid-cols-2 gap-8">
					<!-- Discord Card -->
					<div
						class="p-8 border rounded-lg bg-sky-50 hover:bg-indigo-100 transition-colors"
					>
						<div class="text-center">
							<div class="flex justify-center mb-4">
								<img src="@/assets/discord-icon.svg"
									class="w-12 h-12"
								/>
							</div>
							<h3 class="text-xl font-semibold mb-2">Discord</h3>
							<div class="flex items-center justify-center gap-2">
								<span
									class="bg-blue-gray-800 text-blue-400 text-lg px-3 py-1 rounded-md"
									>@artzified</span
								>
								<button
									@click="copyDiscord"
									class="text-blue-gray-400 hover:text-blue-600 transition-colors"
									title="Copy username"
								>
									<svg
										class="w-4 h-4"
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
							<p class="text-lg text-blue-gray-600 mt-2">
								Direct message for inquiries
							</p>
						</div>
					</div>

					<!-- Roblox Card -->
					<div
						class="p-8 border rounded-lg bg-sky-50 hover:bg-indigo-100 transition-colors"
					>
						<div class="text-center">
							<div class="flex justify-center mb-4">
								<img
									src="https://tr.rbxcdn.com/30DAY-AvatarHeadshot-86B49D020CEDCA41F9FD12827AEC621E-Png/150/150/AvatarHeadshot/Png/noFilter"
									href="https://www.roblox.com/users/3305613465/profile"
									alt="Roblox Avatar"
									class="w-24 h-24 rounded-full border-4 border-white shadow-md"
								/>
							</div>
							<h3 class="text-xl font-semibold mb-2">
								Roblox Profile
							</h3>
							<div class="flex items-center justify-center gap-2">
								<a
									href="https://www.roblox.com/users/USERID/profile"
									target="_blank"
									class="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition-colors text-sm"
								>
									Visit Profile
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<FooterBar />
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';

export default {
	name: 'ContactsPage',
	components: {
		NavBar,
		FooterBar
	},
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
