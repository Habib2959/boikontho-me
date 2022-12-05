<script lang="ts">
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	$: outerWidth = 0;
</script>

<svelte:window bind:outerWidth />

<div class="mt-[60px] hack-banner py-6 lg:py-12">
	<div
		class="h-[90px] w-[90px] lg:w-[150px] lg:h-[150px] rounded-full text-center mx-auto border border-[#000] p-2 flex items-center justify-center bg-[#fff]"
	>
		{#if $page.routeId === '/details/faq'}
			<p in:fly={{ x: -20, duration: 500 }} class="lg:text-2xl lg:font-semibold">FAQ</p>
		{:else if $page.routeId === '/details/about-us'}
			<p in:fly={{ x: -20, duration: 500 }} class="lg:text-2xl lg:font-semibold">ABOUT</p>
		{:else if $page.routeId === '/details/career'}
			<p in:fly={{ x: -20, duration: 500 }} class="lg:text-2xl lg:font-semibold">CAREER</p>
		{:else if $page.routeId === '/details/contact-us'}
			<p in:fly={{ x: -20, duration: 500 }} class="lg:text-2xl lg:font-semibold">CONTACT</p>
		{:else if $page.routeId === '/details/privacy-policy'}
			<p in:fly={{ x: -20, duration: 500 }} class="lg:text-2xl lg:font-semibold">PRIVACY</p>
		{:else if $page.routeId === '/details/terms-of-use'}
			<p in:fly={{ x: -20, duration: 1000 }} class="lg:text-2xl lg:font-semibold">TERMS</p>
		{/if}
	</div>
</div>

<section class="shadow-md">
	<div class="container mx-auto">
		<div>
			<ul class="flex justify-around text-sm text-gray md:text-lg xl:text-xl">
				<li class="pt-2 pb-1" class:active={$page.routeId === '/details/faq'}>
					<a href="/details/faq">FAQ</a>
				</li>
				<li class="pt-2 pb-1" class:active={$page.routeId === '/details/about-us'}>
					<a href="/details/about-us">About {outerWidth > 600 ? 'us' : ''} </a>
				</li>
				<li class="pt-2 pb-1" class:active={$page.routeId === '/details/career'}>
					<a href="/details/career">Career</a>
				</li>
				<li class="pt-2 pb-1" class:active={$page.routeId === '/details/contact-us'}>
					<a href="/details/contact-us">Conatct {outerWidth > 600 ? 'us' : ''}</a>
				</li>
				<li class="pt-2 pb-1" class:active={$page.routeId === '/details/privacy-policy'}>
					<a href="/details/privacy-policy">Privacy {outerWidth > 600 ? 'policy' : ''}</a>
				</li>
				<li class="pt-2 pb-1" class:active={$page.routeId === '/details/terms-of-use'}>
					<a href="/details/terms-of-use">Terms {outerWidth > 600 ? 'of use' : ''}</a>
				</li>
			</ul>
		</div>
	</div>
</section>

<style>
	.active {
		border-bottom: 2px solid #f43131;
		color: #f43131;
	}
	.hack-banner {
		background: url('../../lib/images/background.png');
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
