<script>
	export let href = '';
	export let onClick = () => {};
</script>

{#if href}
	<a href={href} {...$$restProps} style={$$props.style}>
		<slot/>
	</a>
{:else}
	<button style={$$props.style} on:click={onClick}>
	<slot/>
	</button>
{/if}
<style lang="scss">
	a, button {
		align-self: center;
		@extend %button;
	}
</style>

