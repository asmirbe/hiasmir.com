// Get media type from extension
const getMediaType = (src) => {
	const ext = src.split(".").pop();
	const mediaTypes = {
		mp4: "video",
		webm: "video",
		ogg: "video",
		jpg: "image",
		jpeg: "image",
		png: "image",
		gif: "image",
	};
	return mediaTypes[ext] || "unknown";
};

// Get video aspect ratio
const fetchPosts = async ({ offset = 0, category = "" } = {}) => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob("/src/lib/posts/**/*.md")).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
      const isArchived = path.includes("archived");
			const slug = path.split("/").pop().slice(0, -3);
			return { ...metadata, slug, archived: isArchived };
		})
	);

	let sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

	if (offset) {
		sortedPosts = sortedPosts.slice(offset);
	}

	sortedPosts = sortedPosts.map((post) => ({
		date: post.date,
		title: post.title,
		slug: post.slug.toLowerCase(),
		published: post.published || false,
		link: post.link,
    archived: post.archived,
		excerpt: post.excerpt,
		thumbnail: post.thumbnail
    ? post.thumbnail.map((item) => ({
        src: item.src,
        poster: item.poster,
        type: getMediaType(item.src),
				caption: item.caption || "",
      }))
    : [],
		media: post.media
			? post.media.map((item) => ({
					type: item.type,
					src: item.src,
					poster: item.poster || "",
					caption: item.caption || "",
			  }))
			: [],
	}));

	return { posts: sortedPosts };
};

export default fetchPosts;
