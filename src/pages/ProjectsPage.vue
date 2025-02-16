<template>
	<div class="flex flex-col min-h-screen">
		<!-- Add to navigation -->
		<NavBar />

		<!-- Projects Section -->
		<section class="py-32 px-6 bg-sky-100">
			<div class="max-w-6xl mx-auto">
				<h2
					class="text-3xl font-bold text-center mb-12 animate-fade-in-up"
				>
					Featured Projects
				</h2>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div
						v-for="(project, index) in projects"
						:key="index"
						class="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in-up transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
					>
						<ProjectCard
							:name="project.name"
							:description="project.description"
							:image="project.image"
							:github="project.github"
							:docs="project.docs"
						/>
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
	components: {
		ProjectCard
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
	}
};
</script>
