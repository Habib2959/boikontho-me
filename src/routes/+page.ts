import { baseUrl } from '$lib/apis/baseUrl';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch }) => {
  try {
    const res = await fetch(`${baseUrl}/books`)
    
    return {
      data: await res.json()
    };
  } catch (err) {
    throw error(404, 'Not found')
  }
  
};
