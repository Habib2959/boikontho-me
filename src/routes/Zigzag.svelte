<script lang="ts">
	import Countdown from './Countdown.svelte';
	import { databn, dataEn } from '$lib/lang/zigzagContent';
	import { language } from '../store';
</script>

{#if $language.lang === 'bn'}
	{#each databn as info}
		<div class="grid grid-cols-1 content-center py-4 px-3 md:grid-cols-2">
			<div class:md:order-last={info.id % 2 === 0}>
				<img src={info.src} alt="demo" class="my-4 mx-auto w-[90%] md:w-full md:px-10" />
			</div>
			<div class="self-center text-center md:px-10 md:text-justify">
				<h2 class="text-3xl my-3 font-bold hack-font">{info.title}</h2>
				{#if info.id === 1}
					<div class="hack-card">
						<Countdown />
					</div>
				{/if}
				<p class="mb-3 text-subtitleColor">{info.desc}</p>
				<div class="py-3">
					<a
						href={info.link}
						class="bg-btnColor transition-colors duration-300  hover:bg-btnHoverColor text-white p-3 rounded"
						class:hack-btn-animation={info.id === 1}>{info.btn}</a
					>
				</div>
			</div>
		</div>
	{/each}
{:else}
	{#each dataEn as info}
		<div class="grid grid-cols-1 content-center py-4 px-3 md:grid-cols-2">
			<div class:md:order-last={info.id % 2 === 0}>
				<img src={info.src} alt="demo" class="my-4 mx-auto w-[90%] md:w-full md:px-10" />
			</div>
			<div class="self-center text-center md:px-10 md:text-justify">
				<h2 class="text-3xl my-3 font-bold hack-font">{info.title}</h2>
				{#if info.id === 1}
					<div class="hack-card">
						<Countdown />
					</div>
				{/if}
				<p class="mb-3 text-subtitleColor">{info.desc}</p>
				<div class="py-3">
					<a
						href={info.link}
						class="bg-btnColor transition-colors duration-300  hover:bg-btnHoverColor text-white p-3 rounded"
						class:hack-btn-animation={info.id === 1}>{info.btn}</a
					>
				</div>
			</div>
		</div>
	{/each}
{/if}

<style>
	@font-face {
		font-family: 'Hind Siliguri Semi Bold';
		src: url('../lib/fonts/Hind_Siliguri_SemiBold-Regular.ttf');
		font-display: swap;
	}
	.hack-font {
		font-family: 'Hind Siliguri Semi Bold';
		font-size: 36px;
		font-weight: 400;
		line-height: 3.3rem;
	}
	.hack-card {
		background: linear-gradient(270deg, #ed1c24 0%, #c11f47 100%);
		border-radius: 5px;
		width: 100%;
		padding: 50px 30px;
		margin: 10px 0px;
	}
	.hack-btn-animation {
		animation-name: pulse;
		animation-duration: 2.5s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-fill-mode: both;
		animation-play-state: running;
		display: inline-block;
	}
	@keyframes pulse {
		0% {
			transform: scale(0.95);
		}

		70% {
			transform: scale(1.15);
		}

		100% {
			transform: scale(0.95);
		}
	}
</style>
