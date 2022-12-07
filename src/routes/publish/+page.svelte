<script>
	import ill from '$lib/images/our-story.png';
</script>

<svelte:head>
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
<div class="hack-banner" />
<section class="mt-3 md:mt-6 md:mx-2 lg:mx-4 xl:mx-0 2xl:min-h-[58vh] 2xl:flex 2xl:items-center">
	<div class="container mx-auto w-[90%] md:w-full">
		<div class="grid gap-8 md:grid-cols-2 md:items-center">
			<div>
				<img src={ill} alt="us" class="rounded-lg" />
			</div>
			<div class="text-center md:text-left">
				<h2 class="text-xl font-semibold lg:text-3xl">আমাদের গল্প</h2>
				<p class="mt-3">
					মানুষের বন্ধু বই, আর বইয়ের বন্ধু বইকন্ঠ। বইকন্ঠ হলো একটি বহুমাত্রিক বইয়ের সমাধান এবং
					বাংলাদেশের <span class="text-btnColor">প্রথম অডিওবুক ও ইবুক মার্কেটপ্লেস</span>। বইকে
					শুধুমাত্র কাগজের পাতায় বন্দি না রেখে অডিও ও ডিজিটাল স্ক্রিনে তুলে ধরছে বইকন্ঠ। এটি যেমন
					পরিবেশ বান্ধব একই সঙ্গে সাশ্রয়ী যা বইকন্ঠকে একটি কার্বন নিউট্রাল ব্র্যান্ডেও পরিণত করেছে।
				</p>
				<p class="mt-3">
					বইকন্ঠ, ‘<span class="text-btnColor">হ্যাকিউলিস লিমিটেড (Hackules Limited)</span>’ এর একটি
					সাবসিডিয়ারি ব্র্যান্ড। ২০২১ সালের ২৬ এ আগস্ট বাংলাদেশ সরকার হতে লাইসেন্স প্রাপ্ত হওয়ার পর
					থেকে দীর্ঘ একবছরের প্রচেষ্টায় আমরা গড়ে তুলেছি বাংলাদেশের সর্বাধুনিক প্রযুক্তির বইয়ের
					প্ল্যাটফর্মঃ বইকন্ঠ।
				</p>
				<p class="mt-3">
					শধুমাত্র যানজটের জন্য দেশে প্রতিদিন প্রায় ২ কোটি কর্মঘন্টা নষ্ট হয় এবং জিডিপির ৬-১০% ক্ষতি
					হয়। <span class="text-btnColor">যানজটে</span> নিজের সময় ও মানসিক স্বাস্থ্য সুরক্ষায়
					বইকন্ঠের অডিওবুক একটি কার্যকরি সমাধান। এছাড়াও
					<span class="text-btnColor"> ভ্রমণে, অবসরে বা পরীক্ষার প্রস্তুতিতে</span> অডিওবুকের ভালো চাহিদা
					রয়েছে।
				</p>
				<p class="mt-3">
					আমাদের মুল লক্ষ্য সর্বাধুনিক ও অভিনব প্রযুক্তির মাধ্যমে বই পঠন ও শ্রবণ কে জনপ্রিয়করণের
					মাধ্যমে মানুষ ও বইয়ের মধ্যকার ক্রমবর্ধমান দূরত্ব হ্রাস করা এবং বইকে আরও বেশি ​​সহজলভ্য করে
					তোলা।
				</p>
				<div class="text-center mt-5">
					<a
						href="/publish/register"
						class="bg-btnColor transition-colors duration-300  hover:bg-btnHoverColor text-white p-2 lg:p-3 rounded hack-btn-animation"
						>পাবলিশার একাউন্ট খুলুন</a
					>
					<p class="mt-3">অথবা <a href="/publish/login" class="text-btnColor">লগিন করুন</a></p>
				</div>
			</div>
		</div>
		<!-- <div class="mt-6 lg:mt-12">
			<div class="border-b-2 border-btnColor mb-3 hack-terms-title pb-[1px]">
				<h1 class="text-lg font-bold lg:text-2xl bg-btnColor text-[#fff] py-1 pr-10 pl-1">
					Boikontho.com
				</h1>
			</div>
			<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:items-center">
				<div class="card-with-no-hover text-center">
					<div>
						<img
							src={ill}
							alt="ill"
							class="w-[150px] h-[150px] p-2 mx-auto rounded-full border-2 border-btnColor"
						/>
					</div>
					<h3 class="font-semibold text-xl mt-4 lg:text-2xl">One Stop Purchasing Solution</h3>
					<p class="mt-3">
						From industrial to grocery and essentials, we have everything you need for your office.
					</p>
				</div>
				<div class="card-with-no-hover text-center">
					<div>
						<img
							src={ill}
							alt="ill"
							class="w-[150px] h-[150px] p-2 mx-auto rounded-full border-2 border-btnColor"
						/>
					</div>
					<h3 class="font-semibold text-xl mt-4 lg:text-2xl">One Stop Purchasing Solution</h3>
					<p class="mt-3">
						From industrial to grocery and essentials, we have everything you need for your office.
					</p>
				</div>
				<div class="card-with-no-hover text-center">
					<div>
						<img
							src={ill}
							alt="ill"
							class="w-[150px] h-[150px] p-2 mx-auto rounded-full border-2 border-btnColor"
						/>
					</div>
					<h3 class="font-semibold text-xl mt-4 lg:text-2xl">One Stop Purchasing Solution</h3>
					<p class="mt-3">
						From industrial to grocery and essentials, we have everything you need for your office.
					</p>
				</div>
				<div class="card-with-no-hover text-center">
					<div>
						<img
							src={ill}
							alt="ill"
							class="w-[150px] h-[150px] p-2 mx-auto rounded-full border-2 border-btnColor"
						/>
					</div>
					<h3 class="font-semibold text-xl mt-4 lg:text-2xl">One Stop Purchasing Solution</h3>
					<p class="mt-3">
						From industrial to grocery and essentials, we have everything you need for your office.
					</p>
				</div>
				<div class="card-with-no-hover text-center">
					<div>
						<img
							src={ill}
							alt="ill"
							class="w-[150px] h-[150px] p-2 mx-auto rounded-full border-2 border-btnColor"
						/>
					</div>
					<h3 class="font-semibold text-xl mt-4 lg:text-2xl">One Stop Purchasing Solution</h3>
					<p class="mt-3">
						From industrial to grocery and essentials, we have everything you need for your office.
					</p>
				</div>
				<div class="card-with-no-hover text-center">
					<div>
						<img
							src={ill}
							alt="ill"
							class="w-[150px] h-[150px] p-2 mx-auto rounded-full border-2 border-btnColor"
						/>
					</div>
					<h3 class="font-semibold text-xl mt-4 lg:text-2xl">One Stop Purchasing Solution</h3>
					<p class="mt-3">
						From industrial to grocery and essentials, we have everything you need for your office.
					</p>
				</div>
			</div>
		</div> -->
	</div>
</section>

<style>
	/* .hack-terms-title h1 {
		-webkit-clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
		clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
		display: inline-block;
	} */
	.hack-banner {
		background: url('../../lib/images/publish.png');
		padding: 90px;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
		margin-top: 60px;
	}
	.hack-btn-animation {
		animation-name: pulse;
		animation-duration: 2.5s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-fill-mode: both;
		animation-play-state: running;
		display: inline-block;
	}
	@keyframes pulse {
		0% {
			transform: scale(0.95);
		}

		70% {
			transform: scale(1.15);
		}

		100% {
			transform: scale(0.95);
		}
	}
	@media (min-width: 768px) {
		.hack-banner {
			margin-top: 65px;
			min-height: 400px;
		}
	}
	@media (min-width: 1440px) {
		.hack-banner {
			min-height: 500px;
		}
	}
</style>
