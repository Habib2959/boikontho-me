<script lang="ts">
	import Booklist from './Booklist.svelte';
	import Hero from './Hero.svelte';
	// import Opening from "./Opening.svelte";
	import Zigzag from './Zigzag.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	
</script>

<svelte:head>
	<title>Best Bangla Audio Book & E-Book in Boikontho | বইকণ্ঠ</title>
	<meta name="description" content=" Boikontho is the first audiobook and e-book marketplace in Bangladesh. We aim to create a new entity other than from pages of papers" />
	<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Boikontho",
  "alternateName": "বইকন্ঠ",
  "url": "https://boikontho.com/",
  "logo": "https://boikontho.com/logo.svg"
}
	</script>
</svelte:head>

<Hero />
<Booklist books ={data.data}/>
<!-- <Opening /> -->
<Zigzag />
