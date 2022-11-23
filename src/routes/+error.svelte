<script>
	import vid from '$lib/videos/confused.webm';
</script>

<div class="hack-error-div flex items-center justify-center">
	<div class="flex flex-col items-center justify-center sm:mt-20 lg:mt-20">
		<div class="text-center">
			<h2 class="font-bold text-2xl md:text-3xl">&nbsp;এ কোথায় আসলাম?</h2>
			<p class="md:text-xl">সরি আপনি যে পেজটি খুঁজছেন সেটির কোনো অস্তিত্ব নেই</p>
		</div>
		<div class="w-2/3 mx-auto lg:w-[40%]">
			<!-- svelte-ignore a11y-media-has-caption -->
			<video src={vid} autoplay loop />
		</div>
		<div class="mt-20">
			<a class="border border-color-home py-2 px-5 font-bold" href="/">হোমপেজে ফিরে যান</a>
		</div>
	</div>
</div>

<style>
	.hack-error-div {
		min-height: 100vh;
	}
</style>
