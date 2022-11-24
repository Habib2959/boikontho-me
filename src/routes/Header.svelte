<script lang="ts">
	import logo from '$lib/images/double_logo.svg';
	let y: number;
	import { page } from '$app/stores';
</script>

<svelte:window bind:scrollY={y} />
<header
	class="py-4 fixed top-0 left-0 right-0 bg-[#fff] transition-all duration-300 max-w-[1500px] mx-auto"
	class:scrolled={y > 0}
	class:hidden={$page?.routeId?.includes('login') ||
		$page?.routeId?.includes('register') ||
		$page?.routeId?.includes('otp')}
>
	<div class="flex justify-between items-center px-3 md:max-w-[92%] md:mx-auto">
		<a href="/">
			<img class="w-[150px] sm:w-[200px]" src={logo} alt="logo" />
		</a>
		<a
			href="/register"
			class="bg-btnColor transition-colors duration-300 hover:bg-btnHoverColor text-white p-3 rounded"
			><i class="fa-solid fa-gift mr-2" />প্রি-রেজিস্ট্রেশন</a
		>
	</div>
</header>

<style>
	.scrolled {
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
		background-color: rgba(255, 255, 255, 0.8);
		padding: 10px 0px;
		transition: background-color 0.3s ease-in, padding 0.2s ease-in;
	}
	.scrolled img {
		width: 200px;
	}
	header {
		box-shadow: 0 0 9px 1px rgba(79, 75, 147, 0.15);
		z-index: 1000000;
	}
</style>
