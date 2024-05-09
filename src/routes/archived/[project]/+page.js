import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
	try {
		const project = await import(`../../../lib/posts/archived/${params.project}.md`)

		return {
			PostContent: project.default,
			meta: { ...project.metadata, slug: params.post }
		}
	} catch(err) {
		error(404, err);
	}
}