import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ routeId }) => {
  if (routeId === '/details') {
    throw redirect(307, '/details/faq');
  }
}