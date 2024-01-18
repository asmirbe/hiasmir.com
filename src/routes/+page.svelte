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
	<header>
		<nav>
			<span>
				<i>●</i>
				 Asmir
			</span>
			<time>{formatTime(currentTime)}</time>
		</nav>
		<p>Hello, I'm Asmir. I specialize in creating diverse online content, blending design, coding, and a touch of fun, all with an emphasis on elegance and efficiency. Currently, employed as a designer and front-end developer.</p>
	</header>
	<!-- <section>
		<h5>Experience</h5>
		{#each experience as post}
			<article>
				<h4>
					{post.title}
					<time>{post.year}</time>
				</h4>
				<p>{post.content}</p>
			</article>
		{/each}
	</section> -->
	<section class="cards">
		<h5>Stuff i do</h5>
		<!-- Map sideprojects by date ascending -->
		{#each sideProjects.sort((a, b) => new Date(b.date) - new Date(a.date)) as item}
			<Card data={item} />
		{/each}
	</section>
	<Footer />
</main>

<style>
	main {
		max-width: 512px;
		display: grid;
		gap: 32px;
	}
	nav {
		display: flex;
		gap: 7px;
		align-items: center;
		height: 40px;
	}
	nav i {
		font-size: 16px;
		color: #525CEB;
		font-style: normal;
	}
	nav > span {
		font-weight: 500;
	}
	header {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	article {
		display: grid;
	}
	article h4 {
		font-size: inherit;
		display: flex;
		font-weight: 500;
		gap: 10px;
		width: 100%;
		float: left;
		color: #272727;
	}
	article time {
		color: #7c7c7d;
	}
	article p {
		font-size: inherit;
		margin: 0;
		width: 100%;
		float: left;
		margin-top: 8px;
		color: #272727;
	}
	h5 {
		color: rgba(0, 0, 0, 0.5);
		font-size: 12px;
		font-weight: 400;
	}
	section {
		display: block;
	}
	section {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	cite {
		font-size: 14px;
		display: block;
		font-weight: 400;
		line-height: 1.5;
		color: rgba(0, 0, 0, 0.7);
		padding: 0 4px 0 10px;
		border-left: 2px solid rgba(0, 0, 0, 0.2);
	}
</style>
