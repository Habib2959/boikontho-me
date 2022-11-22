import { writable } from 'svelte/store';

export const emplpoyeeRole = writable("");
export const userInfo = writable({tel:''});
export const userAuthenticated = writable(false);