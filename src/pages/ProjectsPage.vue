<template>
	<Head>
		<title>Scion Softworks - Projects</title>
		<meta
			name="description"
			content="Explore our innovative open-source projects built to empower Roblox developers with creative tools."
		/>
		<meta
			name="keywords"
			content="roblox, lua, luau, roblox studio, game development, open source, projects, creative tools"
		/>
	</Head>
	<div
		class="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50"
	>
		<NavBar />

		<!-- Hero Section -->
		<section class="min-h-screen py-16 px-6">
			<div class="max-w-6xl mx-auto animate-fade-in-up">
				<div class="text-center mb-20">
					<h1
						class="pt-16 text-4xl md:text-6xl font-bold text-slate-800 mb-4"
					>
						Our Projects
						<span
							class="block mt-3 text-2xl md:text-3xl font-medium text-indigo-600"
						>
							Simplifying the Creative Process
						</span>
					</h1>
					<p class="text-lg text-slate-600 max-w-3xl mx-auto">
						Dive into our collection of projects that push the
						boundaries of creativity and technology
					</p>
				</div>

				<!-- Featured Projects Section -->
				<div>
					<h2 class="text-3xl font-bold text-center mb-12">
						Featured Projects
					</h2>
					<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div
							v-for="(project, index) in $projects"
							:key="index"
							class="group relative p-8 bg-white rounded-2xl border-2 border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
						>
							<ProjectCard
								:name="project.name"
								:description="project.description"
								:image="project.image"
								:links="project.links"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>

		<FooterBar />
	</div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';

export default {
	name: 'ProjectsPage',
	components: { ProjectCard }
};
</script>

<script setup>
import { Head } from '@unhead/vue/components';
</script>
