<script lang="ts">
	import { page } from '$app/stores';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './styles.css';
	import { userAuthenticated, username, language, loginRole } from '../store';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { baseUrl } from '$lib/apis/baseUrl';
	import MobileNav from './MobileNav.svelte';

	onMount(async () => {
		const auth = localStorage.getItem('token');
		const lang = localStorage.getItem('lang');
		if (lang) {
			language.set(JSON.parse(lang));
		} else {
			localStorage.setItem('lang', JSON.stringify({ lang: 'bn', flag: 'bd' }));
			language.set({ lang: 'bn', flag: 'bd' });
		}

		if (auth) {
			const authCheck = await fetch(`${baseUrl}/auth-test/`, {
				method: 'GET',
				headers: { Authorization: `Token ${JSON.parse(auth)}` }
			});
			if (authCheck.ok) {
				const user = localStorage.getItem('user');
				
				if (user) {
					username.set(JSON.parse(user)?.name);
					loginRole.set(JSON.parse(user)?.role);
				}
				userAuthenticated.set(true);
				if ($page?.routeId?.includes('login')) {
					goto('/');
				}
			} else {
				localStorage.clear();
				userAuthenticated.set(false);
			}
		} else {
			userAuthenticated.set(false);
		}
	});
</script>

<div
	class="app max-w-[1400px] mx-auto"
	class:full-width={$page?.routeId?.includes('login') ||
		$page?.routeId?.includes('register') ||
		$page?.routeId?.includes('otp')}
>
	<Header />
	<MobileNav />
	<main class="mb-10 lg:mb-12">
		<slot />
	</main>
	<Footer />
</div>

<style>
	.full-width {
		max-width: inherit !important;
	}
</style>
