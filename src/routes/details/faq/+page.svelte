<script>
	import Item from './Item.svelte';
	const data = {
		foo: [1, 2, 3],
		bar: [4, 5, 6, 7, 8, 9, 10, 11],
		baz: [12, 24, 42]
	};
</script>

<section class="md:mx-2 lg:mx-4 xl:mx-0 2xl:min-h-[55vh] 2xl:flex 2xl:items-center">
	<div class="container mx-auto">
		{#each Object.entries(data) as entry}
			<Item {entry} />
		{/each}
	</div>
</section>
