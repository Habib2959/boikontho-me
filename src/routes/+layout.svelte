<script>
	import { page } from '$app/stores';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './styles.css';
	import { userAuthenticated } from '../store';
	import { onMount } from 'svelte';

	onMount(() => {
		const auth = localStorage.getItem('token');
		if (auth) {
			userAuthenticated.set(true);
		} else {
			userAuthenticated.set(false);
		}
	});
</script>

<div
	class="app max-w-[1500px] mx-auto"
	class:full-width={$page?.routeId?.includes('login') ||
		$page?.routeId?.includes('register') ||
		$page?.routeId?.includes('otp')}
>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.full-width {
		max-width: inherit !important;
	}
</style>
