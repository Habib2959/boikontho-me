import { baseUrl } from '$lib/apis/baseUrl';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch, params }) => {
  try {
    const res = await fetch(`${baseUrl}/book/?book_id=${params.id}`);
    return {
      data: await res.json()
    };
  } catch (err) {
    throw error(404, 'Not found')
  }
  
};
