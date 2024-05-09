---
title: "Motion Blur with WebGL"
date: "2023-10-26"
link: "https://motion.hiasmir.com/"
excerpt: "A simple motion blur effect created with Svelte & WebGL."
thumbnail:
  - src: "/motion/motion.mp4"
    poster: "/motion/motion.png"
    caption: Originally, this was a SwiftUI prototype created by <a href="https://twitter.com/alexwidua/status/1734636066336882996">Alex Widua</a>.
media:
  - type: "video"
    src: "/motion/motion.mp4"
    poster: "/motion/motion.png"
---

<script>
	import ComponentWrapper from '$components/ComponentWrapper.svelte';
	import Media from '$components/Post/Media.svelte';

  // Components in this post
	import InputRange from '$postcomp/InputRange.svelte';
	import CircleSlider from '$postcomp/CircleSlider/CircleSlider.svelte';

	let value = 0;

</script>

On May 5, 2024, I saw a tweet from [Alex Widua](https://twitter.com/alexwidua/status/1734636066336882996), who created a SwiftUI prototype that I really liked.

So, I decided to reproduce it using Svelte and WebGL.
For the challenge, I didn't want to use any external libraries, I did everything from scratch, which helped me better understand WebGL & GLSL.

#### Overview

- Making the controls
- Setup the scene with WebGL
- Building the shader with GLSL
- Implementing the motion blur effect
- Enjoying the result

Before diving into anything else, I recognized my aversion to the standard operating system inputs. To address this, I set out to create aesthetically pleasing Apple-style controls. My first endeavor was implementing a Range Slider.

<ComponentWrapper title="InputRange.svelte">
	<InputRange min={0} max={100} value={50} onChange={() => {}}/>
</ComponentWrapper>

Subsequently, I developed a knob component specifically designed to manipulate the direction of the motion blur effect.

<ComponentWrapper title="CircleSlider.svelte">
	<CircleSlider r={25} trackWidth={2} thumbWidth={20} value={0} initialAngle={90} removeAngleLimit={true} onChange={() => {}} arcColor="#007AFF" max={360} trackColor="rgba(99, 99, 99, 0.2)" lineColor="rgba(99, 99, 99, 0.2)" />
</ComponentWrapper>

These are not perfect i admit it but actually they work! i'm happy with the result. i'm planning to improve them in the future. i'm open to any suggestions and feedbacks. i hope you like them. thank you for reading

... more to come !
