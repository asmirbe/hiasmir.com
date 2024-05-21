import { error } from '@sveltejs/kit';
// Ensures all pages under this layout (which is all of them) are statically prerendered at build time
export const prerender = true
export const load = async ({ params }) => {
  try {
    const project = await import(`../../lib/posts/${params.project}.md`);
    // const project = serializeNonPOJOs(data);
    return {
      PostContent: project.default,
      meta: {
        ...project.metadata,
        slug: params.post,
      },
    };
  } catch (err) {
    throw error(404, 'Project not found');
  }
};