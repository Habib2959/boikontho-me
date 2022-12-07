<script lang="ts">
	import { slide } from 'svelte/transition';
	export let i: number;
	export let show: null | number;
	export let showCollapse: any;
	interface Entry {
		question: string;
		ans: string;
		id: number;
	}
	export let entry: Entry[];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="acrdion-btn"
	id={`hack-acc-${entry?.id}`}
	on:click={() => showCollapse(i)}
	aria-expanded={show === i}
>
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
{#if show === i}
	<div class="bg-footerBg" transition:slide={{ duration: 300 }}>
		<p class="p-3">{entry?.ans}</p>
	</div>
{/if}

<style>
	.acrdion-btn {
		display: flex;
		color: inherit;
		cursor: pointer;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid #e9e7e7;
		padding: 5px 0px;
	}
	svg {
		transition: transform 0.2s ease-in;
	}

	[aria-expanded='true'] svg {
		transform: rotate(0.25turn);
	}
</style>
