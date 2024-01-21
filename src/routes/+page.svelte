<script>
	import Card from "./Card.svelte";
	import Footer from "./Footer.svelte";
	import { experience, sideProjects } from "../state.js";
	let currentTime = new Date();
	// Met à jour 'currentTime' toutes les secondes
	setInterval(() => {
		currentTime = new Date();
	}, 1000);

	// Fonction pour vérifier si l'heure d'été est en vigueur
	const isSummerTime = (date) => {
		const year = date.getFullYear();
		const startDST = new Date(year, 2, 31 - new Date(year, 2, 31).getDay(), 2, 0, 0, 0);
		const endDST = new Date(year, 9, 31 - new Date(year, 9, 31).getDay(), 2, 0, 0, 0);
		return date >= startDST && date < endDST;
	};

	// Fonction pour formater l'heure
	const formatTime = (date) => {
		let localTime = date.getTime();
		let localOffset = date.getTimezoneOffset() * 60000;
		let parisOffset = isSummerTime(date) ? 7200000 : 3600000;
		let utc = localTime + localOffset;
		let parisTime = new Date(utc + parisOffset);

		let hours = parisTime.getHours();
		let minutes = parisTime.getMinutes();
		let seconds = parisTime.getSeconds();
		const ampm = hours >= 12 ? "PM" : "AM";
		hours = hours % 12;
		hours = hours ? hours : 12; // l'heure '0' doit être '12'
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		return `${hours}:${minutes}:${seconds} ${ampm}`;
	};
</script>

<main>
	<div class="wrapper">
		<nav>
			<a href="/">
				<i></i>
				Asmir
			</a>
			<time>{formatTime(currentTime)}</time>
		</nav>
		<article>
			<h5>A little about me</h5>
			<p>I am a product development and web professional based in France. My passion lies in designing design systems, developing web APIs, and projects involving advanced technologies. I strive not to take myself too seriously while being fully engaged in my projects.</p>

			<p>As a lifelong learner, I am constantly seeking to expand my knowledge and skills, particularly in emerging technologies. Although my work is my main passion, I find time for hobbies such as reading and playing video games, which keeps me creative and fun.</p>

			<p>
				Currently, I am working at <a href="https://www.solware.fr/">Solware</a>
				as a Frontend Developer and Designer, where I am involved in the design and development of next-generation software for dealership management. My role mainly involves building the application's user interface using React and TypeScript.
			</p>

			<p>Currently, I am on a path to explore new challenges and collaborate with diverse teams to bring innovative projects to life. I am always open to new opportunities and collaborations.</p>
		</article>
		<section class="content">
			<div class="cards">
				<h5>What I've been working on</h5>
				<article>
					<p>In 2024, I plan to create a platform where people from different backgrounds can share and find inspiring setups. It will be the perfect place to find the best setup to help you be creative and make your personal workspace better.</p>
				</article>
				{#each sideProjects.sort((a, b) => new Date(b.date) - new Date(a.date)) as item}
					<Card data={item} />
				{/each}
			</div>
		</section>
		<Footer />
	</div>
</main>

<style>
	main {
		width: 100%;
		padding-right: 2rem;
		padding-left: 2rem;
		@media (min-width: 768px) {
			padding-left: 2vw;
			padding-right: 2vw;
		}
	}
	.wrapper {
		display: grid;
		width: 100%;
		padding-bottom: 12rem;
		max-width: 30rem;
	}
	nav {
		display: flex;
		align-items: center;
		padding: 1rem 0;
		justify-content: space-between;
		margin-bottom: 5rem;
		position: static;
		top: 0;
	}
	nav > a {
		margin: -0.5rem;
		padding: 0.5rem;
		font-weight: 600;
		display: flex;
		align-items: center;
		text-decoration: none;
	}
	nav > a:hover {
		color: unset;
	}
	nav time {
		color: #737373;
	}
	nav i {
		width: 0.75rem;
		height: 0.75rem;
		background-color: #141414;
		border-radius: 50%;
		flex: none;
		justify-content: center;
		align-items: center;
		margin-right: 0.5rem;
		display: flex;
	}
	section {
		display: flex;
		flex-direction: column;
		margin-bottom: 5rem;
	}
	article {
		margin-bottom: 2rem;
	}

	.cards {
		display: flex;
		flex-direction: column;
	}
</style>
