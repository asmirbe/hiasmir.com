<script>
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	let hovering = false;
	let mousePosition = [0, 0];
	let width = 0;
	export let text = "";

	onMount(() => {
		const canvas = document.createElement("canvas");
		const context = canvas.getContext("2d");

		if (!context) return console.log("ERR: Context is none.");

		context.font = "normal 13px Inter";
		const metrics = context.measureText(text);

		width = metrics.width + 24;

		if (width > 439) width = 439;
	});
</script>

<svelte:window
	on:mousemove={(e) => {
		mousePosition = [e.clientX, e.clientY];

		if (mousePosition[0] + width > document.body.clientWidth) {
			mousePosition[0] -= width;
		}
	}}
/>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:mouseenter={() => (hovering = true)}

	on:touchstart={() => {
		setTimeout(() => (hovering = false), 2000);
		hovering = true;
	}}
>
	<slot />
</div>

{#if hovering}
	<main style="top: {mousePosition[1]}px; left: {mousePosition[0]}px;">{text}</main>
{/if}

<style>
	main {
		opacity: 100%;

		background-color: #222;

		display: flex;
		flex-direction: column;
		gap: 6px;
		padding: 4px 10px;
		border-radius: 5px;
		margin-top: 12px;
		margin-left: 12px;
		max-width: 440px;
		width: fit-content;
		height: fit-content;
		position: absolute;
		font-size: 13px;
		font-weight: normal;
		color: #fff;
		z-index: 100;
		line-height: 21px;
	}

	@media (pointer: none), (pointer: coarse) {
		main {
			position: fixed;
			top: auto !important;
			bottom: 64px !important;
			left: 50vw !important;
			transform: translateX(-50%);

			width: fit-content;
			max-width: 80vw;
		}
	}
</style>
