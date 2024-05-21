<script>
	import Button from "$components/Button.svelte";
	export let data;
	const { PostContent } = data;
	const { title, excerpt, media } = data.meta;
	import Media from "$components/Post/Media.svelte";
	import IconX from "$components/Icon/IconX.svelte";
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
			<div class="top">
				<Button href={data.meta.link} target="_blank">Visit <IconLink /></Button>
				<Button layout="circle" size="28" href="/"><IconX /></Button>
			</div>
			<h1>{title}</h1>
			{#if excerpt}
				<p>{excerpt}</p>
			{/if}
		</header>
		<Media {media} />
		<section class="post-content">
			<svelte:component this={PostContent} />
		</section>
	</section>
</main>
<svelte:window on:keydown={(e) => e.key === "Escape" && (window.location.href = "/")} />

<style lang="scss">
	header {
		width: 100%;
		gap: 1rem;
		padding: 2rem 2rem 0 2rem;
		h1 {
			font-size: 21px;
			margin-top: 2rem;
		}
		.top {
			display: flex;
			z-index: 9999;
			position: fixed;
			top: 16px;
			right: 16px;
			justify-content: center;
			gap: .75rem;
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
	}
</style>
