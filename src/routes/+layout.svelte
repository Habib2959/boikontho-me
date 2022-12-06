<script>
	import { page } from '$app/stores';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './styles.css';
	import { userAuthenticated, username } from '../store';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(async () => {
		const auth = localStorage.getItem('token');

		if (auth) {
			const userName = localStorage.getItem('user');
			if (userName) {
				username.set(JSON.parse(userName));
			}
			userAuthenticated.set(true);
			// username.set(JSON.parse(userName));
			if ($page?.routeId?.includes('login')) {
				goto('/');
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
