import { error, redirect } from "@sveltejs/kit";
import {serializeNonPOJOs} from '$lib/js/utils.js';

export const load = async ({ params }) => {
	try {
		const project = await import(`../../../lib/posts/archived/${params.project}.md`);
		// console.log(project.metadata.published);
		// if (project.metadata.published === false) error(404, {
		// 	message: 'Not found'
		// });
		return {
			PostContent: project.default,
			meta: { ...project.metadata, slug: params.post },
		};
	} catch (err) {
		error(404, err);
	}
};
