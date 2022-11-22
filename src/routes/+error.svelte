<script>
	import vid from '$lib/videos/confused.webm';
</script>

<div class="hack-error-div mt-[100px] flex items-center justify-center">
	<div class="flex flex-col items-center justify-center">
		<div class="text-center">
			<h2 class="font-bold text-xl">&nbsp;এ কোথায় আসলাম?</h2>
			<p>সরি আপনি যে পেজটি খুঁজছেন সেটির কোনো অস্তিত্ব নেই</p>
		</div>
		<div>
			<video src={vid} autoplay loop />
		</div>
		<div class="my-20">
			<a class="border border-color-home py-2 px-5 font-bold" href="/">হোমপেজে ফিরে যান</a>
		</div>
	</div>
</div>

<style>
	.hack-error-div {
		min-height: 100vh;
	}
</style>
