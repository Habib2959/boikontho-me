<script lang="ts">
	import Booklist from './Booklist.svelte';
	import Hero from './Hero.svelte';
	// import Opening from "./Opening.svelte";
	import Zigzag from './Zigzag.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	
</script>

<svelte:head>
	<title>Largest Bangla Audio Book & Bangla E-Book Platform | Boikontho.com</title>
	<meta name="description" content="Largest Bangla Audio Book & Bangla E-Book Platform" />
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
