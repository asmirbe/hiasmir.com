<script>
	import { onMount } from "svelte";
	import Arc from "./Arc.svelte";
	import Track from "./Track.svelte";
	import Thumb from "./Thumb.svelte";
	import Line from "./Indicator.svelte";
	import { pipe, toRad, toDeg, getRelativeAngle } from "./utils";

	export let r = 80;
	export let initialAngle = 0;
	export let value = undefined;
	export let trackWidth = 2;
	export let max = 100;
	export let removeAngleLimit = false;
	export let trackColor = "#f5f5dc";
	export let arcColor = "#7985f1";
	export let arcColorFocus = arcColor;
	export let thumbWidth = 10;
	export let thumbColor = "white";
	export let lineColor = "black";
	export let onChange = (value) => {};

	let angle = getRelativeAngle((value / max) * 360, initialAngle) || initialAngle;
	let offsets = { left: 0, top: 0 };
	let limitAngleFactor = 90;
	let ref;
	let isDragging = false;

	onMount(() => {
		offsets = ref.getBoundingClientRect();
	});

	function thumbSelect() {
		isDragging = true;
		document.addEventListener("touchmove", moveThumb);
		document.addEventListener("mousemove", moveThumb);
	}

	function thumbLeave() {
		isDragging = false;
		document.removeEventListener("touchmove", moveThumb);
		document.removeEventListener("mousemove", moveThumb);
	}

	function moveThumb(evt) {
		const event = evt.changedTouches ? evt.changedTouches[0] : evt;

		const newAngle = pipe(calculateAngle(event.clientX, event.clientY), limitAngleVariation);

		angle = newAngle;
		handleChange(newAngle);
	}

	function calculateAngle(mouseX, mouseY) {
		const x = mouseX - r - offsets.left;
		const y = -mouseY + r + offsets.top;
		const newAngle = toDeg(Math.atan(y / x)) + (x < 0 ? 180 : 0) + (x >= 0 && y < 0 ? 360 : 0);

		return newAngle;
	}

	function limitAngleVariation(newAngle) {
		if (removeAngleLimit) {
			return newAngle;
		}

		const nextRelativeAngle = getRelativeAngle(newAngle, initialAngle);
		const currentRelativeAngle = getRelativeAngle(angle, initialAngle);

		if (nextRelativeAngle < currentRelativeAngle + limitAngleFactor && nextRelativeAngle > currentRelativeAngle - limitAngleFactor) {
			return newAngle;
		} else {
			return angle;
		}
	}

	function calculateThumbPosition(newAngle) {
		const x = Math.cos(toRad(newAngle)) * (r + trackWidth / 2) + r + trackWidth / 2;
		const y = -Math.sin(toRad(newAngle)) * (r + trackWidth / 2) + r + trackWidth / 2;

		return { x, y };
	}

	function handleChange(newAngle) {
		const angleInRadians = toRad(newAngle);
		onChange(angleInRadians);
	}

	function calculateLinePoints(newAngle) {
		const x1 = r + trackWidth / 2;
		const y1 = r + trackWidth / 2;
		const x2 = Math.cos(toRad(newAngle)) * (r + trackWidth / 2) + r + trackWidth / 2;
		const y2 = -Math.sin(toRad(newAngle)) * (r + trackWidth / 2) + r + trackWidth / 2;

		return { x1, y1, x2, y2 };
	}
</script>

<div id="circular-slider" style="width: {r * 2}px; height: {r * 2}px; position: relative; {isDragging ? `--arc-color-focus: ${arcColorFocus}` : null};" bind:this={ref}>
	<Track width={trackWidth} color={trackColor} />
	<Arc {r} {angle} {initialAngle} width={trackWidth} />
	<Line color={lineColor} points={calculateLinePoints(angle)} />
	<Thumb diameter={thumbWidth} color={thumbColor} position={calculateThumbPosition(angle)} handleSelect={thumbSelect} />
</div>

<svelte:window on:mouseup={thumbLeave} on:touchend={thumbLeave} />
