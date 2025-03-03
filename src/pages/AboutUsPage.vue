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
							v-for="member in $team"
							:key="member.name"
							class="group relative p-8 bg-white rounded-2xl border-2 border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
						>
							<div class="mb-6">
								<div
									class="w-32 h-32 mx-auto rounded-full bg-indigo-100 mb-4 overflow-hidden"
								>
									<img
										:src="member.avatar"
										:alt="member.name"
									/>
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
										:alt="member.name + social.name"
										class="w-6 h-6"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Values Section -->
				<div class="relative py-20 mb-20 overflow-hidden">
					<div
						class="absolute inset-0 opacity-5 pattern-dots-slate-300"
					></div>
					<div class="relative max-w-7xl mx-auto px-4">
						<h2
							class="text-4xl font-bold text-slate-800 mb-16 text-center"
						>
							The Pillars We Build On
						</h2>

						<div class="grid md:grid-cols-3 gap-8">
							<div
								v-for="(value, index) in $values"
								:key="value.title"
								class="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-2 shadow-[0_8px_24px_-15px_rgba(79,70,229,0.3)]"
							>
								<div
									class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
								></div>

								<div class="flex items-start mb-6">
									<div
										class="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mr-4"
									>
										<span class="text-3xl">{{
											value.emoji
										}}</span>
									</div>
									<div>
										<div
											class="text-sm font-semibold text-indigo-600 mb-1"
										>
											Pillar 0{{ index + 1 }}
										</div>
										<h3
											class="text-2xl font-bold text-slate-800"
										>
											{{ value.title }}
										</h3>
									</div>
								</div>

								<p
									class="text-slate-600 relative pl-2 border-l-4 border-indigo-100 group-hover:border-indigo-300 transition-colors"
								>
									{{ value.description }}
								</p>

								<div
									class="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity"
								>
									<div class="text-7xl select-none">
										{{ value.emoji }}
									</div>
								</div>
							</div>
						</div>

						<div class="mt-16 text-center">
							<p class="text-lg text-slate-600 max-w-2xl mx-auto">
								These aren't just words on a screen - they're
								the battle-tested principles that shape every
								line of code, every design decision, and every
								community interaction.
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
export default {
	name: 'AboutPage'
};
</script>
