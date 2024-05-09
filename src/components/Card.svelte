<script>
	import VideoPlayer from "./VideoPlayer.svelte";
	import Button from "./Button.svelte";
	import IconLink from "./Icon/IconLink.svelte";
	export let data;
</script>

<main>
	<header>
		<Button href="/{data.slug}">View {data.title}</Button>
		<Button href="{data.link}" target="_blank">
			<IconLink />
		</Button>
	</header>
	{#if !Array.isArray(data.thumbnail)}
		<div class="col">
			{#if data.thumbnail.type === "video"}
				<div class="item"><VideoPlayer src={data.thumbnail.src} caption={data.thumbnail.caption} poster={data.thumbnail.poster} /></div>
			{:else}
				<figure class="item">
					<img src={data.thumbnail.src} alt={data.title} />
				</figure>
			{/if}
		</div>
	{:else}
		<div class="col-two">
			{#each data.thumbnail as item}
				{#if item.type === "video"}
					<div class="item"><VideoPlayer src={item.src} caption={item.caption} poster={item.poster} /></div>
				{:else}
					<figure class="item"><img src={item.src} alt={item.title} /></figure>
				{/if}
			{/each}
		</div>
	{/if}
</main>

<style lang="scss">
	a {
		@extend %button;
	}

	main {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		header {
			display: flex;
			justify-content: center;
			gap: .5rem;
		}
	}

	[class^="col"] {
		flex: 1;
		display: grid;
	}

	.col-two {
		gap: 1.5rem;
		grid-template-columns: 1fr;

		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}

		> .item {
			position: relative;
			display: flex;
			width: 100%;
			flex-direction: column;

			> img {
				aspect-ratio: 262 / 467;
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
	}

	.item:only-child {
		grid-column: 1 / 3;
	}

	img {
		inset: 0;
		max-width: 100%;
		border: 1px solid rgba(0, 0, 0, 0.1);
		height: auto;
		display: flex;
		vertical-align: middle;
		aspect-ratio: 326/215;
	}
</style>
