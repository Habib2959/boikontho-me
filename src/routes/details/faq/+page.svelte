<script lang="ts">
	import Item from './Item.svelte';
	let show: null | number = null;
	import { databn, dataEn } from '$lib/lang/faq';
	import { language } from '../../../store';
	const showCollapse = (i: number): void => {
		i === show ? (show = null) : (show = i);
	};
</script>

<section class="mt-3 md:mt-6 md:mx-2 lg:mx-4 xl:mx-0 2xl:min-h-[58vh] 2xl:flex 2xl:items-center">
	<div class="container mx-auto w-[90%] md:w-full">
		<h1 class="text-2xl font-bold text-center mb-5 lg:text-5xl lg:pb-5">Boikontho faq</h1>
		{#if $language.lang === 'bn'}
			{#each databn as entry, i}
				<Item {entry} {i} {show} {showCollapse} />
			{/each}
		{:else}
			{#each dataEn as entry, i}
				<Item {entry} {i} {show} {showCollapse} />
			{/each}
		{/if}
	</div>
</section>
