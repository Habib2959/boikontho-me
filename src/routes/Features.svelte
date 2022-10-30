<script>
	let data = [
		{
			id: 1,
			description: 'উদ্বোধনের আগে রেজিস্ট্রেশনকারীরা পাবেন ২ মাসের ফ্রি সাবস্ক্রিপশন',
			btn: 'ফ্রি রেজিস্ট্রেশন করুন'
		},
		{
			id: 2,
			description:
				"আপনার পছন্দের বইয়ের তালিকা জমা দিন। আমরা 'user-first' স্ট্রাটেজিতে আপনার বই নিয়ে কাজ করব।",
			btn: 'বইয়ের তালিকা জমা দিন'
		},
		{
			id: 3,
			description:
				"আপনি কি স্পষ্ট ও শুদ্ধভাবে বই পড়তে / আবৃত্তি করতে ভালবাসেন? যুক্ত হয়ে নিন 'Boikontho creator program' এ",
			btn: 'যুক্ত হন'
		}
	];
</script>

{#each data as info}
	<section class={`hack-features-${info.id} pt-5 pb-5`}>
		<div class="container mx-auto">
			<div class="flex flex-row items-center">
				<div class="hack-left  md:basis-1/2 px-8" class:order-last={info.id % 2 === 0}>
					<h1 class="font-bold text-xl mb-4">
						{info.description}
					</h1>
					<a href="/" class="bg-sky-500/75 transition hover:bg-sky-700 text-white p-3 rounded"
						>{info.btn}</a
					>
				</div>
				<div class="hack-right md:basis-1/2">
					<img src="book.jpg" alt="book" class="w-100" />
				</div>
			</div>
		</div>
	</section>
{/each}
