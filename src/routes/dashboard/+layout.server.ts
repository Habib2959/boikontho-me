
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from '../../../.svelte-kit/types/src/routes/dashboard/$types';

 
export const load: LayoutServerLoad = ({routeId}) => {
  if (routeId === 'dashboard') {
    throw redirect(307, '/dashboard/home');
  }
  
}