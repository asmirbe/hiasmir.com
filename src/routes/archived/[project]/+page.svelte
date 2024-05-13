<script>
	import Button from "$components/Button.svelte";
	export let data;
	const { PostContent } = data;
	const { title, excerpt, media } = data.meta;
	import Media from "$components/Post/Media.svelte";
	import IconLink from "$components/Icon/IconLink.svelte";
	import "$style/post.scss";
</script>

<svelte:head>
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
</svelte:head>

<main>
	<section class="post">
		<header>
			<div class="inline">
				<Button style="margin-left: -6px" href="/">Back to Home</Button>
				<Button style="margin-right: -6px" href={data.meta.link} target="_blank">Visit <IconLink /></Button>
			</div>
			<h1>{title}</h1>
			{#if excerpt}
				<p>{excerpt}</p>
			{/if}
		</header>
		<Media {media} />
		{#if !PostContent}
			<section class="post-content">
				<svelte:component this={PostContent} />
			</section>
		{/if}
	</section>
</main>

<style lang="scss">
	header {
		width: 100%;
		gap: 1rem;
		padding: 2rem 2rem 0 2rem;
		h1 {
			margin-top: 2rem;
		}
		.inline {
			display: flex;
			justify-content: space-between;
			gap: 1rem;
		}

		p {
			color: #737373;
		}
		@media (min-width: 768px) {
			padding: 4rem 4rem 2rem 4rem;
			max-width: 570px;
		}
	}
	main {
		@extend %post-layout;
		padding-bottom: 6rem;
	}
</style>
