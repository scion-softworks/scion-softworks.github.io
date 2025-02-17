<template>
	<div
		class="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50"
	>
		<NavBar />

		<!-- About Section -->
		<section class="min-h-screen py-16 px-6">
			<div class="max-w-6xl mx-auto animate-fade-in-up">
				<!-- Hero Section -->
				<div class="text-center mb-20">
					<h1
						class="pt-16 text-4xl md:text-6xl font-bold text-slate-800 mb-4"
					>
						Crafting Talent into Software
						<span
							class="block mt-3 text-2xl md:text-3xl font-medium text-indigo-600"
						>
							Where Innovation Meets Purpose
						</span>
					</h1>
					<p class="text-lg text-slate-600 max-w-3xl mx-auto">
						We're a passionate team of creators dedicated to
						building meaningful open-source software that simplifies
						your creative process
					</p>
				</div>

				<!-- Story Section -->
				<div class="grid md:grid-cols-2 gap-12 items-center mb-20 px-4">
					<div class="relative group">
						<div
							class="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-[800ms]"
						></div>
						<div
							class="relative bg-white rounded-2xl p-8 border-2 border-indigo-100"
						>
							<h2 class="text-3xl font-bold text-slate-800 mb-4">
								Our Journey
							</h2>
							<p class="text-slate-600 mb-6">
								What started as a small passion project in 2020
								has evolved into a full-fledged open source
								software organization
							</p>
							<div
								class="flex items-center gap-4 text-indigo-600"
							>
								<div
									class="flex-1 border-t-2 border-indigo-100"
								></div>
								<span class="font-semibold">Est. 2020</span>
								<div
									class="flex-1 border-t-2 border-indigo-100"
								></div>
							</div>
						</div>
					</div>

					<div class="grid grid-cols-2 gap-4">
						<div
							class="h-48 bg-indigo-100 rounded-xl hidden md:block"
						></div>
						<div
							class="h-64 bg-indigo-100 rounded-xl mt-8 hidden md:block"
						></div>
						<div
							class="h-64 bg-indigo-100 rounded-xl hidden md:block"
						></div>
						<div
							class="h-48 bg-indigo-100 rounded-xl mt-8 hidden md:block"
						></div>
					</div>
				</div>

				<!-- Team Section -->
				<div class="text-center mb-20 px-4">
					<h2 class="text-3xl font-bold text-slate-800 mb-12">
						Meet the Team
					</h2>
					<div class="grid md:grid-cols-3 gap-8">
						<div
							v-for="member in team"
							:key="member.name"
							class="group relative p-8 bg-white rounded-2xl border-2 border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
						>
							<div class="mb-6">
								<div
									class="w-32 h-32 mx-auto rounded-full bg-indigo-100 mb-4 overflow-hidden"
								>
									<img :src="member.avatar" />
								</div>
								<h3 class="text-xl font-bold text-slate-800">
									{{ member.name }}
								</h3>
								<p class="text-indigo-600">{{ member.role }}</p>
							</div>
							<p class="text-slate-600 mb-6">{{ member.bio }}</p>
							<div class="flex justify-center gap-4">
								<a
									v-for="(social, index) in member.socials"
									:key="index"
									:href="social.link"
									target="_blank"
									class="text-slate-500 hover:text-indigo-600 transition-colors"
								>
									<img
										:src="social.icon"
										loading="lazy"
										class="w-6 h-6"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Values Section -->
				<div
					class="bg-white rounded-2xl p-8 border-2 border-indigo-100 mb-20"
				>
					<h2
						class="text-3xl font-bold text-slate-800 mb-12 text-center"
					>
						Our Core Values
					</h2>
					<div class="grid md:grid-cols-3 gap-8">
						<div
							v-for="value in values"
							:key="value.title"
							class="p-6 text-center"
						>
							<div
								class="w-16 h-16 mx-auto bg-indigo-100 rounded-xl mb-4 flex items-center justify-center"
							>
								<div class="text-4xl text-indigo-600">
									{{ value.emoji }}
								</div>
							</div>
							<h3 class="text-xl font-bold text-slate-800 mb-2">
								{{ value.title }}
							</h3>
							<p class="text-slate-600">
								{{ value.description }}
							</p>
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
	name: 'AboutPage',
	components: {
		NavBar,
		FooterBar
	},
	data() {
		return {
			team: [
				{
					name: 'artzified',
					avatar: 'https://avatars.githubusercontent.com/u/101265482?v=4',
					role: 'owner',
					socials: [
						{
							icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Roblox_player_icon_black.svg',
							link: 'https://www.roblox.com/users/3305613465'
						},
						{
							icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
							link: 'https://github.com/artzified'
						}
					]
				},
				{
					name: 'cffex',
					avatar: 'https://avatars.githubusercontent.com/u/118915241?v=4',
					role: 'owner',
					socials: [
						{
							icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Roblox_player_icon_black.svg',
							link: 'https://www.roblox.com/users/2060048619'
						},
						{
							icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
							link: 'https://github.com/cffex'
						}
					]
				}
			],
			values: [
				{
					title: 'Innovation First',
					description:
						'Pushing boundaries to deliver cutting-edge solutions',
					emoji: '💡'
				},
				{
					title: 'Quality',
					description:
						'Never compromising on quality in every detail',
					emoji: '🛡️'
				},
				{
					title: 'Community Driven',
					description:
						'Building with and for the people who matter most',
					emoji: '💖'
				}
			]
		};
	},
	mounted() {
		// Reuse animation logic
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

		elements.forEach((element) => observer.observe(element));
	}
};
</script>
