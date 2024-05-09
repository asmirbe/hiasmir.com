<script>
  import { pipe, toRad, getRelativeAngle } from './utils';

  export let r;
  export let angle;
  export let initialAngle;
  export let width;

  const getPointCoordString = (r, angle) => {
    const x = Math.cos(toRad(angle)) * r * 100;
    const y = -Math.sin(toRad(angle)) * r * 100;
    return `${x}px ${y}px`;
  };

  $: relativeAngle = getRelativeAngle(angle, initialAngle);
  $: center = `${r + width}px ${r + width}px`;
  $: start = getPointCoordString(r, initialAngle);
  $: end = getPointCoordString(r, angle);
  $: extraPoint1 = pipe(
    getRelativeAngle(45, initialAngle),
    a => getPointCoordString(r, a)
  );
  $: extraPoint2 = pipe(
    getRelativeAngle(135, initialAngle),
    a => getPointCoordString(r, a)
  );
  $: extraPoint3 = pipe(
    getRelativeAngle(225, initialAngle),
    a => getPointCoordString(r, a)
  );
  $: extra1 = relativeAngle > 90 ? `, ${extraPoint1}` : '';
  $: extra2 = relativeAngle > 180 ? `, ${extraPoint2}` : '';
  $: extra3 = relativeAngle > 270 ? `, ${extraPoint3}` : '';
  $: polygonString = `polygon(${center}, ${start}${extra1}${extra2}${extra3}, ${end})`;
</script>

<div
  id="arc"
  style="
    width: 100%;
    height: 100%;
    border-radius: 100%;
    <!-- box-shadow: inset 0 0 0 {width}px var(--arc-color-focus); -->
    position: absolute;
    clip-path: {polygonString};
  "
/>