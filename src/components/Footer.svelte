<script>
	import { links } from "$lib/config.js";
	$: trier = links.sort((a, b) => a.title.length - b.title.length);
</script>

<footer>
	<h4>Social & Contact</h4>
	<ul>
		{#each trier as link}
			<li>
				<a href={link.link} target="_blank">
					{link.title}
				</a>
			</li>
		{/each}
	</ul>
</footer>

<style>
	h4 {
		margin-bottom: 2rem;
		font-weight: 600;
	}
	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 1rem;
	}
	ul > li {
		list-style: none;
		font-weight: 400;
	}
</style>
