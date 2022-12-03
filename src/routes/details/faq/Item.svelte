<script>
	import { slide } from 'svelte/transition';
	export let entry;
	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="acrdion-btn" on:click={toggle} aria-expanded={isOpen}>
	<h3 class="text-lg font-semibold">{entry?.question}</h3>
	<svg
		style="tran"
		width="20"
		height="20"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		viewBox="0 0 24 24"
		stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
	>
</div>
{#if isOpen}
	<div class="mx-2" transition:slide={{ duration: 300 }}>
		<p class="px-3 bg-footerBg">{entry?.ans}</p>
	</div>
{/if}

<style>
	.acrdion-btn {
		display: flex;
		color: inherit;
		cursor: pointer;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #e9e7e7;
		padding: 5px 0px;
	}
	svg {
		transition: transform 0.2s ease-in;
	}

	[aria-expanded='true'] svg {
		transform: rotate(0.25turn);
	}
</style>
