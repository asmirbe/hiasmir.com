<script>
	import Card from "./Card.svelte";
	export let posts;

  let projects = posts.filter((item) => item.archived === false).sort((a, b) => new Date(b.date) - new Date(a.date));
  let archived = posts.filter((item) => item.archived === true && item.published === true).sort((a, b) => new Date(b.date) - new Date(a.date));
</script>

<main>
	<section>
		<!-- <div class="sm-container">
		<h4>Explorations</h4>
	</div> -->
		{#each projects as item}
			<Card data={item} />
		{/each}
    {#if archived && archived.length > 0}
      <h4>Archived</h4>
      {#each archived as item}
        <a href="/archived/{item.slug}">{item.title}</a>
      {/each}
    {/if}
	</section>

</main>

<style lang="scss">
	main {
    @extend %main-layout;
  }
</style>
