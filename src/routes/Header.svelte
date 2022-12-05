<script lang="ts">
	import logo from '$lib/images/logo.svg';
	import { page } from '$app/stores';
	import { userAuthenticated, username } from '../store';
	import avatar from '$lib/images/avatar.svg';
	let y: number;
	import { goto } from '$app/navigation';
	import down from '$lib/images/down.svg';

	// let name = 'habib';
	function logout() {
		localStorage.clear();
		userAuthenticated.set(false);
		goto('/');
	}
</script>

<svelte:window bind:scrollY={y} />
<header
	class="py-2 fixed top-0 left-0 right-0 bg-[#fff] transition-all duration-300 max-w-[1400px] mx-auto"
	class:scrolled={y > 0}
	class:hidden={$page?.routeId?.includes('login') ||
		$page?.routeId?.includes('register') ||
		$page?.routeId?.includes('otp')}
>
	<div class="flex justify-between items-center px-3 md:max-w-[92%] md:mx-auto">
		<div>
			<a href="/">
				<img class="w-[90px] sm:w-[100px]" src={logo} alt="logo" />
			</a>
		</div>
		{#if !$userAuthenticated}
			<div>
				<a
					href="/register"
					class="bg-btnColor p-2 transition-colors duration-300 hover:bg-btnHoverColor text-sm sm:text-base text-white sm:p-3 rounded"
					>প্রি-রেজিস্ট্রেশন</a
				>
			</div>
		{:else}
			<div>
				<div class="relative">
					<div class="hack-dropdown-container">
						<div class="hack-dropdown-menu flex cursor-pointer items-center">
							<img src={avatar} alt="pp" width="30" />
							<div class="ml-1 text-[.9rem]">{$username}</div>
							<img src={down} alt="arrow" width="10" class="hack-down ml-1 rounded-full" />
						</div>
						<div
							class="hack-dropdown absolute right-[0px] top-[100%] bg-[#f5f5f5] p-3 rounded-md w-max"
						>
							<ul>
								<!-- <li class="flex mb-2 cursor-pointer">
									<a href="/dashboard"><i class="fa-solid fa-gauge inline mr-2" />Dashboard</a>
								</li>
								<li class="flex mb-2 cursor-pointer">
									<a href="/"><i class="fa-solid fa-globe inline mr-2" />Goto Website</a>
								</li> -->
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<li class="flex cursor-pointer" on:click={logout}>
									<p><i class="fa-solid fa-right-from-bracket inline mr-2" />Logout</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</header>

<style>
	.scrolled {
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
		background-color: rgba(255, 255, 255, 0.8);
		/* padding: 10px 0px; */
		transition: background-color 0.3s ease-in, padding 0.2s ease-in;
	}
	/* .scrolled img {
		width: 200px;
	} */
	header {
		box-shadow: 0 0 9px 1px rgba(79, 75, 147, 0.15);
		z-index: 1000000;
	}
	/* @media (max-width: 600px) {
		.scrolled img {
			width: 160px;
		}
	} */
	.hack-down {
		transition: 0.3s;
	}
	.hack-dropdown-menu {
		padding: 3px 8px;
		border-radius: 3px;
	}
	.hack-dropdown-menu:hover .hack-down {
		transform: rotate(-180deg);
	}
	.hack-dropdown {
		overflow: hidden;
		max-height: 0;
		padding: 0;
	}
	.hack-dropdown-container:hover .hack-dropdown {
		max-height: 500px;
		padding: 1rem;
		transition: max-height 0.15s ease-in;
	}
	.hack-dropdown-container:hover .hack-down {
		transform: rotate(-180deg);
	}
</style>
