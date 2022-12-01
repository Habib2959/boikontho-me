<script>
	import ill1 from '$lib/images/Illustration 1.svg';
</script>

<section class="md:pt-40 pt-[150px] md:pb-16 pb-8 z-1 lg:px-10">
	<div class="container mx-auto">
		<div class="grid grid-cols-1 content-center md:grid-cols-2 gap-5 place-items-center">
			<div class="order-last self-center text-center md:order-first md:text-left">
				<div class="flex flex-col">
					<h1 class="font-bold text-3xl mb-4 hack-font">
						দেশের সর্ববৃহৎ অডিওবুক ও ই-বুকের সম্ভার নিয়ে আসছে বইকণ্ঠ
					</h1>
					<a
						href="/register"
						class="bg-btnColor w-[80%] md:w-[70%] lg:w-[50%] md:mx-[inherit] mx- mx-auto relative transition-all duration-300 hover:bg-btnHoverColor text-white py-3 px-8 rounded hack-btn"
						>প্রি-রেজিস্ট্রেশন করুন <i
							class="fa-solid fa-arrow-right absolute top-[35%] right-[15%] transition-all"
						/></a
					>

					<a
						href="/details"
						class="bg-white border border-btnColor text-btnColor w-[80%] md:w-[70%] lg:w-[50%] md:mx-[inherit] mx-auto relative mt-5 transition-all duration-300 py-3 px-8 rounded hack-btn"
						>বিস্তারিত জানুন<i
							class="fa-solid fa-arrow-right absolute top-[35%] right-[15%] transition-all"
						/></a
					>
				</div>
			</div>
			<div class="w-full">
				<img src={ill1} alt="demo" class="w-full" />
			</div>
		</div>
	</div>
</section>

<style>
	@font-face {
		font-family: 'Hind Siliguri Semi Bold';
		src: url('../lib/fonts/Hind_Siliguri_SemiBold-Regular.ttf');
	}
	.hack-font {
		font-family: 'Hind Siliguri Semi Bold';
		font-size: 46px;
		font-weight: 400;
		line-height: 3.3rem;
	}
	.hack-btn:hover i {
		right: 10%;
	}
	@media (max-width: 768px) {
		.hack-font {
			font-size: 35px;
			line-height: 3rem;
		}
	}
</style>
