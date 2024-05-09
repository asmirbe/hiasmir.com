<script>
  export let width;
  export let color;
</script>

<div
  id="track"
  style="
    width: 100%;
    height: 100%;
    box-shadow:inset 0 0 0 {width}px {color};
    border-radius: 100%;
    position: absolute;
  "
/>