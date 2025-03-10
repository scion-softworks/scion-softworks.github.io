<template>
	<Head>
		<title>Scion Softworks</title>
		<meta
			name="description"
			content="Community-driven open source tools for Roblox developers. Free Luau libraries, Roblox Studio plugins, and type-safe solutions for game development."
		/>
		<meta
			name="keywords"
			content="roblox, lua, luau, roblox studio, game development, open source, tools, tooling"
		/>
		<meta property="og:title" content="Scion Softworks - Roblox Developer Tools" />
		<meta
			property="og:description"
			content="Free open source tools for Roblox developers and Luau programmers"
		/>
		<link rel="canonical" href="https://scion-softworks.com/" />
	</Head>

	<div class="flex flex-col min-h-screen">
		<!-- Navigation -->
		<NavBar />

		<!-- Main Content -->
		<main>
			<!-- Hero Section -->
			<section
				class="pt-32 pb-16 px-6 bg-gradient-to-t from-white to-sky-100"
				itemscope
				itemtype="https://schema.org/Organization"
			>
				<div class="select-none max-w-6xl mx-auto text-center">
					<h1
						class="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up"
					>
						Open Source Tools for
						<span class="text-red-600" itemprop="keywords"
							>Roblox </span
						>
						<span class="text-blue-500" itemprop="keywords"
							>Developers</span
						>
					</h1>
					<p
						class="text-xl text-blue-gray-800 mb-8 animate-fade-in-up"
						itemprop="description"
					>
						Building powerful, community-driven solutions for Luau
						and Roblox Studio
					</p>
					<div class="flex justify-center gap-4 animate-fade-in-up">
						<button
							@click="scrollTo($refs.featured)"
							class="text-nowrap bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
							aria-label="View featured projects"
						>
							View Projects
						</button>
						<a
							href="https://github.com/scion-softworks"
							target="_blank"
							rel="noopener noreferrer"
							class="border-2 border-blue-600 text-black px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
							aria-label="Visit our GitHub repository"
						>
							<svg
								class="w-5 h-5"
								fill="black"
								viewBox="0 0 24 24"
							>
								<path
									fill-rule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									clip-rule="evenodd"
								/>
							</svg>
							GitHub
						</a>
					</div>
				</div>
			</section>

			<!-- Features Section -->
			<section class="py-16 px-6 bg-gradient-to-b from-white to-sky-50">
				<div class="max-w-6xl mx-auto">
					<h2
						class="text-3xl font-bold text-center mb-12 animate-fade-in-up"
					>
						Why Choose Our Tools
					</h2>
					<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<FeatureCard
							header="Open Source"
							subtext="Community-driven development with MIT licensing"
						/>
						<FeatureCard
							header="Strictly typed"
							subtext="Type-safe solutions utilizing Luau's type solver for robust systems"
						/>
						<FeatureCard
							header="Community Oriented"
							subtext="Built with and for the developer community"
						/>
						<FeatureCard
							header="Free Forever"
							subtext="100% free to use, modify, and distribute"
						/>
					</div>
				</div>
			</section>

			<!-- Projects Section -->
			<section
				class="py-16 px-6 bg-sky-50"
				ref="featured"
				itemscope
				itemtype="https://schema.org/ItemList"
			>
				<div class="max-w-6xl mx-auto">
					<h2
						class="text-3xl font-bold text-center mb-12 animate-fade-in-up"
					>
						Featured Roblox Projects
					</h2>
					<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<article
							v-for="(project, index) in $projects"
							:key="index"
							class="group relative p-8 rounded-2xl border-2 border-indigo-100 hover:border-indigo-200 bg-white shadow-md overflow-hidden animate-fade-in-up transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
							itemscope
							itemtype="https://schema.org/SoftwareSourceCode"
						>
							<ProjectCard
								:name="project.name"
								:description="project.description"
								:image="project.image"
								:links="project.links"
								:alt="`Screenshot of ${project.name}`"
							/>
						</article>
					</div>
				</div>
			</section>
		</main>

		<!-- Footer -->
		<FooterBar />
	</div>
</template>

<script>
import FeatureCard from '@/components/FeatureCard.vue';
import ProjectCard from '@/components/ProjectCard.vue';

export default {
	name: 'HomePage',
	components: {
		FeatureCard,
		ProjectCard
	},
	data() {
		return {};
	},
	methods: {
		scrollTo: (element) => {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	},
};
</script>

<style>
html,
body {
	overflow: auto !important;
	-ms-overflow-style: none !important; /* IE and Edge */
	scrollbar-width: none !important; /* Firefox */
}
</style>
