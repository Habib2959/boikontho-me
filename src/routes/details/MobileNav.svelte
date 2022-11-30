<script lang="ts">
	import { fade } from 'svelte/transition';
	import ill1 from '$lib/images/Illustration 1.svg';
	import ill2 from '$lib/images/Illustration 2.svg';
	import ill3 from '$lib/images/Illustration 3.svg';
	import { page } from '$app/stores';
	$: outerWidth = 0;
</script>

<svelte:window bind:outerWidth />

<div class="mt-[80px]">
	{#if $page.routeId === '/details/faq'}
		<img src={ill1} alt="img1" class="h-[200px] w-full" in:fade={{ duration: 1000 }} />
	{:else if $page.routeId === '/details/about-us'}
		<img src={ill2} alt="img1" class="h-[200px] w-full" in:fade={{ duration: 1000 }} />
	{:else if $page.routeId === '/details/career'}
		<img src={ill3} alt="img1" class="h-[200px] w-full" in:fade={{ duration: 1000 }} />
	{:else if $page.routeId === '/details/contact-us'}
		<img src={ill1} alt="img1" class="h-[200px] w-full" in:fade={{ duration: 1000 }} />
	{:else if $page.routeId === '/details/privacy-policy'}
		<img src={ill2} alt="img1" class="h-[200px] w-full" in:fade={{ duration: 1000 }} />
	{:else if $page.routeId === '/details/terms-of-use'}
		<img src={ill3} alt="img1" class="h-[200px] w-full" in:fade={{ duration: 1000 }} />
	{/if}
</div>

<section class="shadow-md">
	<div class="container">
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
</style>
