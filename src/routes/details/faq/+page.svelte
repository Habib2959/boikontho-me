<script lang="ts">
	import Item from './Item.svelte';
	let show: null | number = null;
	const data = [
		{
			question: 'বইকন্ঠ কি?',
			ans: 'বইকণ্ঠ বাংলাদেশের প্রথম অডিওবুক ও ইবুক মার্কেটপ্লেস । বইকে শুধুমাত্র কাগজের পাতায় বন্দি না রেখে অডিও ও ডিজিটাল স্ক্রিনে তুলে ধরছে বইকন্ঠ।',
			id: 1
		},
		{
			question: 'প্রি-রেজিস্ট্রেশনে ১ মাসের ফ্রি সাবস্ক্রিপশনের জন্য কি আমায় কোন টাকা পরিশোধ করতে হবে?',
			ans: 'না।',
			id: 2
		},
		{
			question: 'আমার একাউন্ট সম্পর্কিত যেকোন সমস্যার জন্য কোথায় যোগাযোগ করবো?',
			ans: 'আপনার একাউন্ট সম্পর্কিত যেকোন সমস্যা বিস্তারিত লিখে পাঠিয়ে দিন support@boikontho.com এই মেইলে।',
			id: 3
		},
		{
			question: 'আপনাদের হেল্পলাইনে কখন কল করা যাবে?',
			ans: 'আমাদের হেল্পলাইনে সকাল ১০ঃ০০ টা থেকে বিকাল ৫ঃ০০ টার মধ্যে কলে কথা বলতে পারবেন।',
			id: 3
		},
		{
			question: 'এছাড়াও আমার আরও কিছু প্রশ্ন আছে। কিভাবে করতে পারি?',
			ans: 'আপনার সকল প্রশ্ন বিস্তারিত লিখে পাঠিয়ে দিন support@boikontho.com এই মেইলে।',
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
