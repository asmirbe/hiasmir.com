import fetchPosts from '$lib/js/fetchPosts'
import { json } from '@sveltejs/kit'

export const prerender = true

export const GET = async () => {
  const options = {
    limit: 1000
  }

  const { posts } = await fetchPosts(options)
  return json(posts)
}