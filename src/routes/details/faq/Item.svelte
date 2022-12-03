<script>
	import { slide } from 'svelte/transition';
	export let entry;
	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="acrdion-btn" on:click={toggle} aria-expanded={isOpen}>
	<h3>{entry[0]}</h3>
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
	<ul transition:slide={{ duration: 300 }}>
		{#each entry[1] as item}
			<li>{item}</li>
		{/each}
	</ul>
{/if}

<style>
	.acrdion-btn {
		border: none;
		background: none;
		display: flex;
		color: inherit;
		font-size: 36px;
		cursor: pointer;
		margin: 0;
		padding-bottom: 0.5em;
		padding-top: 0.5em;
		justify-content: space-between;
		align-items: center;
	}

	svg {
		transition: transform 0.2s ease-in;
	}

	[aria-expanded='true'] svg {
		transform: rotate(0.25turn);
	}
</style>
