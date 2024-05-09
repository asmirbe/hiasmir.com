<script>
  export let points = { x1: 0, y1: 0, x2: 0, y2: 0 };
	export let color;
</script>

<svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  <line x1={points.x1} y1={points.y1} x2={points.x2} y2={points.y2} stroke="var(--arc-color-focus, {color})" stroke-width="2" />
</svg>
