<script lang="ts">
    import ill2 from '$lib/images/ill2.svg';
    import ill3 from '$lib/images/ill3.svg';
    import ill4 from '$lib/images/ill4.svg';
    let data = [
        {
			id: 1,
			desc: 'উদ্বোধনের আগে রেজিস্ট্রেশনকারীরা পাবেন ২ মাসের ফ্রি সাবস্ক্রিপশন',
			btn: 'ফ্রি রেজিস্ট্রেশন করুন',
            src: ill2
		},
		{
			id: 2,
			desc:
				"আপনার পছন্দের বইয়ের তালিকা জমা দিন। আমরা 'user-first' স্ট্রাটেজিতে আপনার বই নিয়ে কাজ করব।",
			btn: 'বইয়ের তালিকা জমা দিন',
            src: ill3
		},
		{
			id: 3,
			desc:
				"আপনি কি স্পষ্ট ও শুদ্ধভাবে বই পড়তে / আবৃত্তি করতে ভালবাসেন? যুক্ত হয়ে নিন 'Boikontho creator program' এ",
			btn: 'যুক্ত হন',
            src: ill4
		}
    ]
</script>


{#each data as info }
    <div class="grid grid-cols-1 content-center py-4 px-3 md:grid-cols-2">
        <div class:md:order-last = {info.id % 2 === 0}>
            <img src={info.src} alt = "demo" class="my-4 mx-auto w-2/3 md:w-full md:px-10" />
        </div>
        <div class="self-center text-center md:px-10 md:text-justify">
            <h2 class="text-3xl my-3 font-bold">Title</h2>
            <p class="mb-3 text-[#9b9b9b]">{info.desc}</p>
            <div class="py-3">
                <a href="/" class="bg-sky-500/75 transition-colors duration-300  hover:bg-sky-700 text-white p-3 rounded"
						>{info.btn}</a
					>
            </div>
        </div>
    </div>
{/each}