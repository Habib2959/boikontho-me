<script lang="ts">
	import logo from '$lib/images/logo.svg';
	import { page } from '$app/stores';
	import { userAuthenticated, username, language } from '../store';
	import avatar from '$lib/images/avatar.svg';
	let y: number;
	import { goto } from '$app/navigation';
	import down from '$lib/images/down.svg';
	import gift from '$lib/images/gift.svg';

	// let name = 'habib';
	function logout() {
		localStorage.clear();
		userAuthenticated.set(false);
		goto('/');
	}
	function toggleLang() {
		if ($language.lang === 'en') {
			const newLang = { lang: 'bn', flag: 'bd' };
			localStorage.setItem('lang', JSON.stringify(newLang));
			language.set(newLang);
		} else {
			localStorage.setItem('lang', JSON.stringify({ lang: 'en', flag: 'uk' }));
			language.set({ lang: 'en', flag: 'uk' });
		}
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
			<div class="flex items-center ">
				<a
					href="/register"
					class="bg-btnColor p-2 transition-colors duration-300 hover:bg-btnHoverColor text-sm  sm:text-base text-white sm:p-3 rounded"
					><img
						src={gift}
						alt="gift"
						class="w-[12px] mr-2 md:w-[15px] hack-svg-white inline md:mr-3 mb-1"
					/>প্রি-রেজিস্ট্রেশন</a
				>
				<div class="md:ml-3">
					<div class="relative">
						<ul class="flex justify-between items-center bg-[#f5f5f5] rounded">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<li
								class="basis-1/2 px-1 rounded cursor-pointer m-[.2rem]"
								class:active={$language.lang === 'bn'}
								on:click={toggleLang}
							>
								বাংলা
							</li>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<li
								class="basis-1/2 px-1 rounded cursor-pointer m-[.2rem]"
								class:active={$language.lang === 'en'}
								on:click={toggleLang}
							>
								ENG
							</li>
						</ul>
					</div>
				</div>
			</div>
		{:else}
			<div class="flex items-center">
				<div class="relative">
					<div class="hack-dropdown-container">
						<div class="hack-dropdown-menu flex cursor-pointer items-center">
							<img src={avatar} alt="pp" width="30" />
							<div class="ml-1 text-[.9rem]">{$username ? $username : ''}</div>
							<img src={down} alt="arrow" width="10" class="hack-down ml-1 rounded-full" />
						</div>
						<div
							class="hack-dropdown absolute right-[0px] top-[101%] bg-[#fff] shadow-lg p-3 rounded-md w-max"
						>
							<ul>
								<!-- <li class="flex mb-2 cursor-pointer">
									<a href="/dashboard"><i class="fa-solid fa-gauge inline mr-2" />Dashboard</a>
								</li>
								<li class="flex mb-2 cursor-pointer">
									<a href="/"><i class="fa-solid fa-globe inline mr-2" />Goto Website</a>
								</li> -->
								<li class="flex cursor-pointer">
									<a href="/profile">Profile</a>
								</li>
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<li class="flex cursor-pointer" on:click={logout}>
									<p>Logout</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="md:ml-3">
					<div class="relative">
						<ul class="flex justify-between items-center bg-[#f5f5f5] rounded">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<li
								class="basis-1/2 px-1 rounded cursor-pointer m-[.2rem]"
								class:active={$language.lang === 'bn'}
								on:click={toggleLang}
							>
								বাংলা
							</li>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<li
								class="basis-1/2 px-1 rounded cursor-pointer m-[.2rem]"
								class:active={$language.lang === 'en'}
								on:click={toggleLang}
							>
								ENG
							</li>
						</ul>
					</div>
				</div>
			</div>
		{/if}
	</div>
</header>

<style>
	.scrolled {
		background-color: rgba(255, 255, 255, 0.8);
		/* padding: 10px 0px; */
		transition: background-color 0.3s ease-in, padding 0.2s ease-in;
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
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
	.hack-svg-white {
		filter: brightness(0) saturate(100%) invert(100%) sepia(51%) saturate(828%) hue-rotate(295deg)
			brightness(123%) contrast(100%);
	}
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
		padding: 0.5rem 0.8rem;
		transition: max-height 0.15s ease-in;
	}
	.hack-dropdown-container:hover .hack-down {
		transform: rotate(-180deg);
	}
	.hack-dropdown-container-country:hover .hack-dropdown {
		max-height: 500px;
		padding: 0.5rem 0.8rem;
		transition: max-height 0.15s ease-in;
	}
	.hack-dropdown-container-country:hover .hack-down {
		transform: rotate(-180deg);
	}
	.active {
		background: #f43131;
		color: #fff;
	}
</style>
