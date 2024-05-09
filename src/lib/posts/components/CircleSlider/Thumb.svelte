<script>
	export let diameter;
	export let color;
	export let position;
	export let handleSelect;
</script>

<div
	id="thumb"
	style="
    position: absolute;
    left: {position.x}px;
    top: {position.y}px;
		box-sizing: border-box;
  "
	draggable={false}
	on:touchstart={handleSelect}
	on:mousedown={handleSelect}
>
	<div
		id="thumb-image"
		style="
	width: {diameter}px;
	touch-action: none;
	user-select: none;
	height: {diameter}px;
	background-color: {color};
	border-radius: 100%;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	transform: translate(-50%, -50%);
	position: absolute;
	cursor: pointer;
"
	/>
</div>
