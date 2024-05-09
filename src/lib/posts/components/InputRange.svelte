<script>
	export let min = 0;
	export let max = 100;
	export let value = 0;
	export let onChange = () => {};
	let container;
	let thumb;
	let dragging = false;

	function handleDragStart() {
		dragging = true;
	}

	function handleDragEnd() {
		dragging = false;
	}

	function handleDrag(event) {
		if (!dragging) return;

		const containerRect = container.getBoundingClientRect();
		const thumbRect = thumb.getBoundingClientRect();
		const mouseX = event.type === "touchmove" ? event.touches[0].clientX : event.clientX;

		let newX = mouseX - containerRect.left - thumbRect.width / 2;
		newX = Math.max(0, Math.min(newX, containerRect.width - thumbRect.width));

		const percentage = newX / (containerRect.width - thumbRect.width);
		value = Math.round(percentage * (max - min) + min);

		onChange(value);
	}


</script>


<main>
	<div class="range" bind:this={container}>
		<div class="range__track">
			<div class="range__progress" style="width: {((value - min) / (max - min)) * 100}%" />
		</div>
		<div class="range__thumb" bind:this={thumb} style="left: {((value - min) / (max - min)) * 100}%" on:mousedown={handleDragStart} on:touchstart={handleDragStart} />
	</div>
</main>

<svelte:window on:mouseup={handleDragEnd} on:touchend={handleDragEnd} on:mousemove={handleDrag} on:touchmove={handleDrag} />

<style>
	main {
		padding: 0.7rem;
		position: relative;
	}
	.range {
		position: relative;
		min-width: 100%;
		width: 180px;
		box-sizing: border-box;
		outline: none;
	}

	.range__track {
		position: absolute;
		top: 50%;
		left: 0;
		pointer-events: none;
		right: 0;
		height: 2px;
		background-color: rgba(99, 99, 99, 0.2);
		transform: translateY(-50%);
	}

	.range__progress {
		position: absolute;
		top: 0;
		pointer-events: none;
		left: 0;
		height: 100%;
		background-color: #007AFF;
	}

	.range__thumb {
		position: absolute;
		top: 50%;
		touch-action: none;
		width: 20px;
		height: 20px;
		background-color: #fff;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		cursor: pointer;
	}
</style>
