<script>
	export let href = "";
	export let onClick = () => {};
	export let layout = "default";
	export let style = "";
	export let size = "32";

	$: isCircle = layout === "circle";
</script>

{#if href}
	<a {href} {...$$restProps} class:circle={isCircle} style="{isCircle ? `width: ${size}px; height: ${size}px;` : ''} {style}">
			<slot />
	</a>
{:else}
	<button class:circle={isCircle} on:click={onClick} style="{isCircle ? `width: ${size}px; height: ${size}px;` : ''} {style}">
			<slot />
	</button>
{/if}

<style lang="scss">
	a,
	button {
			align-self: center;
			@extend %button;
			padding: 4px 12px;

			&.circle {
					border-radius: 50%;
					padding: 6px;
					display: flex;
					align-items: center;
					aspect-ratio: 1/1;
					justify-content: center;
			}
	}
</style>