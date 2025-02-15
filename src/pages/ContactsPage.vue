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
								<svg
									class="w-12 h-12 text-[#5865F2]"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path
										d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
									/>
								</svg>
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
