import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
  try {
    const project = await import(`../../lib/posts/${params.project}.md`);
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