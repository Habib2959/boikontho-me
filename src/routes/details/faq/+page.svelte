<script lang="ts">
	import Item from './Item.svelte';
	let show: null | number = null;
	const data = [
		{
			question: 'foo',
			ans: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
			id: 1
		},
		{
			question: 'bar',
			ans: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
			id: 2
		},
		{
			question: 'my question',
			ans: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
			id: 3
		}
	];
	const showCollapse = (i: number): void => {
		i === show ? (show = null) : (show = i);
	};
</script>

<section class="mt-3 md:mt-6 md:mx-2 lg:mx-4 xl:mx-0 2xl:min-h-[58vh] 2xl:flex 2xl:items-center">
	<div class="container mx-auto w-[90%] md:w-full">
		<h1 class="text-2xl font-bold text-center mb-5 lg:text-5xl lg:pb-5">Boikontho faq</h1>
		{#each data as entry, i}
			<Item {entry} {i} {show} {showCollapse} />
		{/each}
	</div>
</section>
