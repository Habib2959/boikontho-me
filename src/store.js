import { writable } from 'svelte/store';

export const emplpoyeeRole = writable("");
export const userInfo = writable({ email: '' });
export const userAuthenticated = writable(false);
export const username = writable('');
export const successText = writable('');
export const successBtnText = writable('');
export const successbtnLink = writable('');
export const language = writable({ lang: 'bn', flag: 'bd' });
export const loginRole = writable('')
