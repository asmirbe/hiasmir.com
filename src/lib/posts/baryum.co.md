---
title: "Baryum.co"
date: "2023-10-26"
link: "https://baryum.co/"
excerpt: "Baryum presents a meticulously curated collection of exceptional websites discovered on the internet. Each website is handpicked to ensure the utmost quality and excellence."
thumbnail:
  - src: "/baryum/baryum.mp4"
    poster: "/baryum/baryum.png"
media:
  - type: "video"
    src: "/baryum/baryum.mp4"
    poster: "/baryum/baryum.png"
    caption: "Shot 2023/05/03 at 8:41 PM"
---

<script>
	const FontAnalyzer = (() => {
	class TypeInfo {
		constructor(element) {
			this.element = element;
			this.detect();
		}
		detect() {
			this.fonts = window.getComputedStyle(this.element).fontFamily;
			this.stack = this.fonts.split(/,\s*/);
			this.current = this.getCurrentFont().replace(/^['"]|['"]$/g, "");
		}
		getCurrentFont() {
			var canvas = document.createElement("canvas"),
				ctx = canvas.getContext("2d"),
				i,
				font;
			for (i = 0; i < this.stack.length; i++) {
				font = this.stack[i].replace(/^"|'/, "").replace(/"|'$/, "");
				ctx.font = '12px "' + font + '", sans-serif';
				if (ctx.measureText("abcdefghijklmnopqrstuvwxyz").width !== ctx.measureText("abcdefghijklmnopqrstuvwxyz").width) {
					return font;
				}
			}
			return this.stack[0];
		}
	}
	return {
		getFont: function () {
			const elements = document.body.getElementsByTagName("*");
			const fonts = new Set();
			for (let element of elements) {
				const typeInfo = new TypeInfo(element);
				fonts.add(typeInfo.current);
			}
			return Array.from(fonts);
		},
		getTextNodes: function () {
			const elements = document.body.getElementsByTagName("*");
			const textNodes = [];
			for (let element of elements) {
				for (let node of element.childNodes) {
					if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
						textNodes.push(node);
					}
				}
			}
			return textNodes;
		},
		getOccurences: function (fonts, textNodes) {
			const fontUsage = {};
			for (let font of fonts) {
				fontUsage[font] = 0;
			}
			for (let node of textNodes) {
				const typeInfo = new TypeInfo(node.parentElement);
				const font = typeInfo.current;
				fontUsage[font]++;
			}
			return fontUsage;
		},
		getColorName: function (index) {
			const colors = ["red", "lime", "blue", "orange", "purple", "fuchsia", "magenta", "coral", "greenyellow", "pink", "teal", "lavender", "yellow", "turquoise", "coral", "lightsalmon", "skyblue"];
			return colors[index % colors.length];
		},
		init: function (debug) {
			const debuggerMode = debug || false;
			const fonts = this.getFont();
			const textNodes = this.getTextNodes();
			const fontUsage = this.getOccurences(fonts, textNodes);
			const fontData = fonts.map((font, i) => {
				const colorName = debuggerMode ? this.getColorName(i) : null;
				const fontDataItem = {
					name: font,
					occurences: fontUsage[font] || 0,
				};
				if (debuggerMode) {
					fontDataItem.color = colorName;
				}
				return fontDataItem;
			});

			if (debuggerMode) {
				const fontColors = fontData.reduce((acc, { name, color }) => {
					if (color) {
						acc[name] = color;
					}
					return acc;
				}, {});
				console.log(fontColors);
				textNodes.forEach((node) => {
					const typeInfo = new TypeInfo(node.parentElement);
					const font = typeInfo.current;
					console.log(font, fontColors[font]);
					if (fontColors[font]) {
						const span = document.createElement("span");
						span.appendChild(document.createTextNode(node.textContent));
						span.style.outline = `2px dashed ${fontColors[font]}`;
						const parent = node.parentNode;
						parent.replaceChild(span, node);
					}
				});
			}

			return fontData;
		},
	};
})();

	let fonts;
  function run() {
    fonts = FontAnalyzer.init();
    fonts = fonts.sort((a, b) => b.occurences - a.occurences);
  }
 import IconLink from '$components/Icon/IconLink.svelte';
   import Highlight from "svelte-highlight";

</script>

Since 2023, I'm running [Baryum <IconLink/>](https://baryum.co/), a meticulously curated collection of exceptional websites discovered on the internet. Each website is handpicked to ensure the utmost quality and excellence.

Built with Svelte and PostgreSQL. The website is designed to be simple and minimalistic, focusing on the content and the websites themselves. The website is also responsive and works well on all devices.

Bascially for the visitors adding a website is simple. You just need to fill out a form with the website's URL, an email and a name. Once submitted, the website will be reviewed and added to the collection.

<!-- To analyze the fonts used on a website, I created a Font Analyzer tool that detects the font stack of each element and determines the current font being used. The tool then generates a list of unique fonts and the number of times they are used on the page. -->

```JS
const user = await client.chat.completions.create({
  messages: [
    {
      role: 'user',
      content: 'My name is John Doe and I am a software engineer.'
      content: 'Hey, this is Ellie, and I work as a UX Designer.'
    }
  ],
  model: 'gpt-4-turbo-preview',
  response_model: {
    schema: UserSchema,
    name: 'User'
  }
});
```