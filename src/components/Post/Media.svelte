<script>
	import VideoPlayer from "../VideoPlayer.svelte";
	export let media;
</script>

{#if Array.isArray(media) && media.length > 0}
	<section class="media">
		{#each media as { type, src, alt, poster, caption }}
			{#if type === "image"}
				<img {src} {alt} />
			{:else if type === "video"}
				<VideoPlayer {src} {poster} caption={caption ? caption : false}/>
			{/if}
		{/each}
	</section>
{/if}

<style lang="scss">
	section {
		@extend %post-media-layout;
    align-items: center;
	}
  img {
    max-width: 100%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  }
</style>
