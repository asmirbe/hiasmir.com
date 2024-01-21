<script>
	import { links } from '../state.js';
</script>
<footer>
	<h5>Let's talk</h5>
	<p>
		<a href="mailto:hello@hiasmir.com">Email me</a> or reach out on <a href="https://twitter.com/asmirbe_" target="_blank">@asmirbe</a>
		to chat about weather, design or anything else you're interested in! At present, I'm trying to improve my Arabic language skills, مرحبا!</p>
		<ul>
			{#each links as link}
				<li>
					<a href={link.link} target="_blank">
						{link.title}
					</a>
				</li>
			{/each}
		</ul>
</footer>

<style>
	footer {
		margin: 0 auto;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 1rem;
	}
	ul >li {
		list-style: none;
		font-weight: 500;
	}
	li > a {
		text-decoration: none;
	}
</style>
