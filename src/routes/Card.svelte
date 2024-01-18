<script>
	import Tooltip from "./Tooltip.svelte";
	export let data;
</script>

<a href={data.link} target="_blank">
	<header>
		<h6>
			{data.title}
			<time>{data.date}</time>
			{#if data.link}
				<Tooltip text="View {data.title} online">
					<svg width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#333230"><path d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005" stroke="#333230" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
				</Tooltip>
			{/if}
		</h6>
	</header>
	<main>
		{#if data.image}
			<img src={data.image} alt="" />
		{/if}
		<p>
			{data.content.paragraph}
		</p>
	</main>
</a>

<style>
	a {
		text-decoration: none;
		border-radius: 15px;
		background-color:#f8f8f8;
		gap: 8px;
		display: grid;
		padding: 12px 15px;
		cursor: pointer;
		transition-duration: 0.3s;
	}
	a header h6 {
		font-weight: 500;
		font-size: 0.8rem;
		line-height: 1.2;
		display: flex;
		font-weight: 400;
		margin: 0;
		color: #606060;
		letter-spacing: 0.02m;
	}
	a header h6 time {
		margin-left: auto;
		font-weight: 400;
		margin-right: 6px;
	}
	a main {
		display: flex;
		gap: 14px;
	}
	a main img {
		width: 32px;
		height: 32px;
		border-radius: 8px;
		margin-top: 4px;
	}
	a main p {
		font-size: 0.85rem;
		line-height: 1.4;
		flex-grow: 1;
		color: #606060;
		letter-spacing: 0.017em;
	}
</style>
