<script>
	export let src;
	export let caption;
	export let poster;

	let video;
	let time = 0;
	let duration;
	let paused;
	let isPlaying = false;
	let isShow = true;
	let isMouseInside = false;

	const debounce = (mainFunction, delay) => {
		let timer;
		return function (...args) {
			clearTimeout(timer);
			timer = setTimeout(() => {
				mainFunction(...args);
			}, delay);
		};
	};

	const hideControls = debounce(() => {
		if (!isMouseInside && isPlaying) {
			isShow = false;
		}
	}, 1000);

	function handleProgressClick(e) {
		const div = e.currentTarget;
		video.pause();
		isPlaying = false;
		isMouseInside = true;
		function seek(e) {
			const { left, width } = div.getBoundingClientRect();

			let p = (e.clientX - left) / width;
			if (p < 0) p = 0;
			if (p > 1) p = 1;

			time = p * duration;
		}

		seek(e);

		window.addEventListener("pointermove", seek);

		window.addEventListener(
			"pointerup",
			() => {
				window.removeEventListener("pointermove", seek);
				hideControls();
			},
			{
				once: true,
			}
		);
	}

	function toggleFullscreen() {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			video.requestFullscreen();
		}
	}

	function togglePlay() {
		if (isPlaying) {
			video.pause();
		} else {
			video.play();
			hideControls();
		}
		isPlaying = !isPlaying;
	}

	function showControls() {
		isShow = true;
		hideControls();
	}

	function onMouseEnter() {
		isMouseInside = true;
		showControls();
	}

	function onMouseLeave() {
		isMouseInside = false;
		if (isPlaying) {
			hideControls();
		}
	}

	// $: timer = Math.round((time / duration) * 100) / 100;
	$: timer = time / duration;
</script>

{#if src && poster}
	<figure>
		<div class="video-container" on:mouseenter={onMouseEnter} on:mouseleave={onMouseLeave}>
			<video
				bind:this={video}
				playsinline
				bind:currentTime={time}
				bind:duration
				{src}
				bind:paused
				preload="metadata"
				on:ended={() => {
					isShow = true;
					isPlaying = false;
				}}
			></video>
			<div class="tap-area" on:click|stopPropagation|preventDefault={togglePlay} on:mouseleave|stopPropagation></div>
			<div class="controls" class:show={isShow} class:hover={isPlaying && isShow} on:mouseleave|stopPropagation>
				<button class:play={isPlaying} class:pause={!isPlaying} on:click|stopPropagation|preventDefault={togglePlay} on:mouseleave|stopPropagation></button>
				<div class="progress-bar" on:pointerdown|stopPropagation={handleProgressClick} on:mouseleave|stopPropagation>
					<div class="progress" style="transform: scaleX({timer})" />
				</div>
				<button on:click|stopPropagation|preventDefault={toggleFullscreen} class="fullscreen" on:mouseleave|stopPropagation></button>
			</div>
			<img class="thumbnail" class:visible={!isPlaying && time === 0} src={poster} alt="" />
		</div>
		{#if caption}
			<div class="meta">{@html caption}</div>
		{/if}
	</figure>
{/if}

<style lang="scss">
	figure {
		user-select: none;
		gap: 0.5rem;
		position: relative;
		display: flex;
		width: 100%;
		flex-direction: column;
	}
	.video-container {
		user-select: none;
		aspect-ratio: 3/2;
		position: relative;
		width: 100%;
		&::before {
			content: "";
			height: 100%;
			position: absolute;
			inset:0;
			width: 100%;
			z-index: 1;
			pointer-events: none;
			padding-top: 66.6666666667%;
			box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
		}
	}
	.thumbnail {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: contain;
		inset: 0;
		opacity: 0;
		&.visible {
			opacity: 1;
		}
	}
	video {
		width: 100%;
		height: 100%;
		user-select: none;
    -webkit-user-select: none;
		object-fit: contain;
		display: block;
		max-width: 100%;
	}
	button {
		user-select: none;
		width: 32px;
		height: 32px;
		border: none;
		appearance: none;
		background-color: transparent;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		&.fullscreen {
			display: none;
			background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 7H25.5M25.5 7V14.5M25.5 7L19 13.5' stroke='%23FFF' stroke-width='2' stroke-linecap='square'/%3E%3Cpath d='M14.5 25.5L7 25.5M7 25.5L7 18M7 25.5L13.5 19' stroke='%23FFF' stroke-width='2' stroke-linecap='square'/%3E%3C/svg%3E%0A");
			@media (min-width: 768px) {
				display: block;
			}
		}
		&.pause {
			background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23 16.0933L8.75 25.1865L8.75 7L23 16.0933Z' fill='%23FFF'/%3E%3C/svg%3E%0A");
		}
		&.play {
			background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='9' y='7' width='5' height='18' fill='%23FFF'/%3E%3Crect x='18' y='7' width='5' height='18' fill='%23FFF'/%3E%3C/svg%3E%0A");
		}
	}
	.tap-area {
		position: absolute;
		z-index: 100;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.controls {
		position: absolute;
		z-index: 1000;
		bottom: 0rem;
		left: 0;
		display: flex;
		user-select: none;
		width: 100%;
		height: 48px;
		align-items: center;
		padding: 1rem;
		gap: 1rem;
		opacity: 0;
		&.show {
			opacity: 1;
		}
		&.hover {
			.progress-bar {
				background-color: rgba(255, 255, 255, 0.27);
			}
		}
	}

	.progress-bar {
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 4px;
		border-radius: 8px;
		transition: background-color 0.2s;
		background-color: rgba(255, 255, 255, 0.18);
		-webkit-mask-image: -webkit-radial-gradient(white, black);
		.progress {
			position: absolute;
			top: 0;
			transform: scaleX(0);
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #fff;
			transform-origin: left;
		}
	}

	.meta {
		text-align: center;
		font-size: 0.875rem;
		letter-spacing: -0.01em;
		color: rgba(0, 0, 0, 0.5);
	}
</style>
