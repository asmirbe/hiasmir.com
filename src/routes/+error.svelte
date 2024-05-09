<script>
	import Button from '$components/Button.svelte';
	import { page } from "$app/stores";
</script>

<main>
	<p>{$page.status} - {$page.error.message}</p>
	<Button href="/">Back to Home</Button>
</main>

<style lang="scss">
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: column nowrap;
		gap: 1rem;
		padding: 2rem;
		@media (min-width: 768px){
			padding: 6rem;
		}
	}
</style>
