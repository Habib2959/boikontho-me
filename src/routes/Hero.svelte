<script>
	import ill from '$lib/images/ill.svg';
</script>

<section class="md:pt-40 pt-[150px] md:pb-16 pb-8 z-1 lg:px-10">
	<div class="container mx-auto">
		<div class="grid grid-cols-1 content-center md:grid-cols-2 gap-5 place-items-center">
			<div class="order-last self-center text-center md:order-first md:text-left">
				<div class="flex flex-col">
					<h1 class="font-bold text-3xl mb-4">
						বাংলাদেশের সবচেয়ে বড় অডিও বইয়ের সম্ভার নিয়ে আসছে "বইকণ্ঠ"
					</h1>
					<a
						href="/register"
						class="bg-[#602D90] w-[80%] md:w-[70%] lg:w-[50%] md:mx-[inherit] mx- mx-auto relative transition-all duration-300 hover:bg-[#602d90bf] text-white py-3 px-8 rounded hack-btn"
						>প্রি-রেজিস্ট্রেশন করুন <i
							class="fa-solid fa-arrow-right absolute top-[35%] right-[15%] transition-all"
						/></a
					>

					<a
						href="/details"
						class="bg-[#fff] border border-[#602D90] text-[#602D90] w-[80%] md:w-[70%] lg:w-[50%] md:mx-[inherit] mx-auto relative mt-5 transition-all duration-300 py-3 px-8 rounded hack-btn"
						>বিস্তারিত জানুন<i
							class="fa-solid fa-arrow-right absolute top-[35%] right-[15%] transition-all"
						/></a
					>
				</div>
			</div>
			<div class="w-full">
				<img src={ill} alt="demo" class="w-full" />
			</div>
		</div>
	</div>
</section>

<style>
	.hack-btn:hover i {
		right: 10%;
	}
</style>
