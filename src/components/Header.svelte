<script>
	import { formatTime } from "$lib/js/utils.js";
	import Footer from "./Footer.svelte";

	let currentTime = new Date();

	// Met à jour 'currentTime' toutes les secondes
	setInterval(() => {
		currentTime = new Date();
	}, 1000);

	// Met à jour 'time' et 'condition' à chaque changement de 'currentTime'
	$: time = formatTime(currentTime).time;
	$: condition = formatTime(currentTime).ampm === "AM";
</script>

<main>
	<section class="intro">
		<header>
			<div class="inline">
				<h1>Hey, I’m Asmir</h1>
				<!-- <time class="opacity">
					{time}
					{#if condition}
						<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
							<path fill="currentColor" d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z" />
							<path fill="currentColor" fill-rule="evenodd" d="M6.25 12a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0ZM12 7.75a4.25 4.25 0 1 0 0 8.5a4.25 4.25 0 0 0 0-8.5Z" clip-rule="evenodd" />
							<path
								fill="currentColor"
								d="M5.46 4.399a.75.75 0 0 0-1.061 1.06l.707.707a.75.75 0 1 0 1.06-1.06l-.707-.707ZM22.75 12a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm-3.149-6.54a.75.75 0 1 0-1.06-1.061l-.707.707a.75.75 0 1 0 1.06 1.06l.707-.707ZM12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm6.894-2.416a.75.75 0 1 0-1.06 1.06l.707.707a.75.75 0 1 0 1.06-1.06l-.707-.707ZM3.75 12a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm2.416 6.894a.75.75 0 0 0-1.06-1.06l-.707.707a.75.75 0 0 0 1.06 1.06l.707-.707Z"
							/>
						</svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
							<path fill="currentColor" fill-rule="evenodd" d="M11.486 4.768a7.25 7.25 0 1 0 7.399 9.51a6.25 6.25 0 0 1-7.398-9.51ZM3.25 12a8.75 8.75 0 0 1 10.074-8.65a.75.75 0 0 1 .336 1.342a4.75 4.75 0 1 0 5.83 7.499a.75.75 0 0 1 1.22.654A8.751 8.751 0 0 1 3.25 12Z" clip-rule="evenodd" />
						</svg>
					{/if}
				</time> -->
			</div>
			<div>
				<p>I love using JavaScript to prototype different ideas and dive into projects that let me play with the latest tech. I'm passionate about what I do, but I also like to keep things light and fun.</p>
				<p class="opacity">I'm on the lookout for cool new opportunities to enjoy myself, try new things, and make some awesome stuff. If you've got an exciting project or collaboration that'll put a smile on my face and let my creativity run wild, I'm all ears!</p>
			</div>
		</header>
		<Footer />
	</section>
</main>

<style lang="scss">
	header {
		gap: 2rem;
		display: flex;
		flex-direction: column;
		.inline {
			display: flex;
			justify-content: space-between;
		}
	}
	h1 {
		display: flex;
		align-items: center;
		gap: 1rem;
		font-size: 1rem;
		font-weight: 600;
	}
	// time {
	// 	display: flex;
	// 	align-items: center;
	// 	gap: 4px;
	// 	svg {
	// 		width: 20px;
	// 		height: 20px;
	// 	}
	// }
	.opacity {
		color: #737373;
	}
	.intro {
		padding: 2rem;
		gap: 5rem;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		@media (min-width: 768px) {
			max-width: 570px;
			height: 100%;
			padding: 4rem;
		}
	}
	main {
		display: flex;
		width: 100%;
		justify-content: center;
	}
</style>
