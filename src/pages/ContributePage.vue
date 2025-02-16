<template>
	<div
		class="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50"
	>
		<NavBar />
		<NotificationManager />

		<!-- Contribution Section -->
		<section class="min-h-screen py-28 px-6">
			<div class="max-w-6xl mx-auto animate-fade-in-up">
				<!-- Hero Section -->
				<div class="text-center mb-[4rem]">
					<h1
						class="text-4xl md:text-6xl font-bold text-slate-800 mb-4"
					>
						Make an Impact
						<span
							class="block mt-3 text-2xl md:text-3xl font-medium text-indigo-600"
						>
							Your contribution shapes the future of our projects
						</span>
					</h1>
					<p class="text-lg text-slate-600 max-w-3xl mx-auto">
						Whether you're a developer, designer, or enthusiast,
						there's a way for everyone to contribute. Join our
						growing community of contributors today!
					</p>
				</div>

				<!-- Contribution Cards -->
				<div class="grid md:grid-cols-3 gap-8 px-4 mb-20">
					<!-- Code Contribution -->
					<div
						class="group relative p-8 bg-white rounded-2xl border-2 border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
					>
						<div class="text-center">
							<div class="mb-6 flex justify-center">
								<div
									class="p-4 bg-indigo-100 rounded-xl group-hover:bg-indigo-200 transition-colors"
								>
									<svg
										class="w-12 h-12 text-indigo-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
										/>
									</svg>
								</div>
							</div>
							<h3 class="text-2xl font-bold text-slate-800 mb-4">
								Code Contributions
							</h3>
							<p class="text-slate-600 mb-6">
								Help improve projects through code enhancements,
								bug fixes, or new features
							</p>
							<a
								href="https://github.com/orgs/scion-softworks/repositories"
								target="_blank"
								class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
							>
								<svg
									class="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fill-rule="evenodd"
										d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
										clip-rule="evenodd"
									/>
								</svg>
								View GitHub
							</a>
						</div>
					</div>

					<!-- Financial Support -->
					<div
						class="group relative p-8 bg-white rounded-2xl border-2 border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
					>
						<div class="text-center">
							<div class="mb-6 flex justify-center">
								<div
									class="p-4 bg-indigo-100 rounded-xl group-hover:bg-indigo-200 transition-colors"
								>
									<svg
										class="w-12 h-12 text-indigo-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
								</div>
							</div>
							<h3 class="text-2xl font-bold text-slate-800 mb-4">
								Financial Support
							</h3>
							<p class="text-slate-600 mb-6">
								Help sustain development through donations!
							</p>
							<div class="flex flex-col gap-4">
								<button
									@click="copyWallet('BTC')"
									class="flex items-center justify-center gap-2 px-6 py-5 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors"
								>
									<img src="@/assets/bitcoin.svg" class="w-6 h-6" />
									BTC Wallet
								</button>
							</div>
						</div>
					</div>

					<!-- Community Support -->
					<div
						class="group relative p-8 bg-white rounded-2xl border-2 border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
					>
						<div class="text-center">
							<div class="mb-6 flex justify-center">
								<div
									class="p-6 bg-indigo-100 rounded-xl group-hover:bg-indigo-200 transition-colors"
								>
									<svg
										class="w-12 h-12 text-indigo-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
								</div>
							</div>
							<h3 class="text-2xl font-bold text-slate-800 mb-4">
								Community Support
							</h3>
							<p class="text-slate-600 mb-6">
								Help others, share ideas, and improve
								documentation. Or just hangout and chill with
								the community
							</p>
							<div class="flex flex-col gap-4">
								<a
									href="https://discord.gg/YavbjPc8"
									target="_blank"
									class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
								>
									<img
										src="@/assets/discord-icon.svg"
										class="w-5 h-5"
									/>
									Join Discord
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class="flex flex-col justify-center lg:flex-row gap-8 px-4 mb-20 ">
					<!-- Left Column - Code Contributors -->
					<div class="space-y-8">
						<div
							class="p-8 bg-white rounded-2xl border-2 border-indigo-100"
						>
							<h3 class="text-2xl font-bold text-slate-800 mb-2 text-center">
								Our awesome code contributors
							</h3>
							<p class="text-center text-md opacity-50">May be inaccurate due to github's API quirks</p>
							<div v-if="!contributors" class="text-center text-xl opacity-50">🤷‍♂️ Could not fetch contributors</div>

							<div class="grid grid-cols-3 md:grid-cols-4 gap-4 pt-3">

								<div
									v-for="contributor in contributors"
									:key="contributor.id"
									class="flex flex-col items-center p-3 bg-indigo-50 rounded-lg transition-all duration-300 hover:drop-shadow-xl hover:-translate-y-2"
								>
									<img
										:src="contributor.avatar_url"
										class="w-12 h-12 rounded-full mb-2 drop-shadow-xl"
									/>
									<a
										:href="contributor.html_url"
										target="_blank"
										class="text-sm font-mono text-indigo-600 hover:underline text-center"
									>
										{{ contributor.login }}
									</a>
									<p class="opacity-50">{{ contributor.contributions }} commits made</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Right Column - Financial Supporters -->
					<!-- <div class="lg:w-1/2 space-y-8">
						<div
							class="p-8 bg-white rounded-2xl border-2 border-indigo-100"
						>
							<h3 class="text-2xl font-bold text-slate-800 mb-6">
								Financial Supporters
							</h3>
							<div class="space-y-6">
								<a
									v-if="subscriptions.length === 0"
									class="text-xl underline text-blue-600"
									href="https://buymeacoffee.com/scionsoftworks"
									target="_blank"
								>
									Be the first to support us
								</a>

								<div
									v-for="(supporter, index) in subscriptions"
									:key="index"
									class="p-4 bg-indigo-50 rounded-lg flex items-center gap-4"
								>
									<div class="flex-shrink-0">
										<div
											class="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center"
										>
											<span
												class="text-indigo-600 text-xl"
												>💎</span
											>
										</div>
									</div>
									<div>
										<h4
											class="font-semibold text-slate-800"
										>
											{{ supporter.payer_name }}
										</h4>
										<p class="text-sm text-slate-600">
											{{ supporter.message }}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div> -->
				</div>
			</div>
		</section>
		<FooterBar />
	</div>
</template>

<script>
export default {
	name: 'ContributePage',
	data() {
		return {
			contributors: [],
			subscriptions: []
		};
	},
	created() {
		this.fetchData();
	},

	methods: {
		copyWallet(type) {
			const wallets = {
				BTC: 'bc1qlvapre5fuk3ujsk5vqnlnq7v0f9cu54n6g6wjl'
			};
			navigator.clipboard
				.writeText(wallets[type])
				.then(() => alert(`${type} address copied!`))
				.catch(() => alert('Copy failed', 'error'));
		},

		async fetchData() {
			try {
				const response = await fetch(
					'https://contributors-and-supporters.electriccollision.workers.dev/'
				);
				const data = await response.json();

				console.log(data);

				this.contributors = data.contributors;
				this.subscriptions = data.subscriptions;
			} catch (error) {
				this.contributors = null;
				this.subscriptions = null;

				console.error(error);
			}
			
		}
	},
	mounted() {
		// Reuse animation logic from contacts page
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
