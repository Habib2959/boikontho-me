<script>
	import ill1 from '$lib/images/Illustration 1.svg';
	import arrow from '$lib/images/arrow.svg';
	import { bn, en } from '$lib/lang/heroContent';
	import { language } from '../store';
	const { header, btn1, btn2 } = bn();
	const { headerEn, btn1En, btn2En } = en();
</script>

<section class="md:pt-40 pt-[100px] md:pb-16 pb-8 z-1 lg:px-10">
	<div class="container mx-auto w-[92%] lg:w-full">
		<div class="grid grid-cols-1 content-center md:grid-cols-2 gap-5 place-items-center">
			<div class="order-last self-center text-center md:order-first md:text-left">
				<div class="flex flex-col">
					<h1 class="font-bold text-3xl mb-4 hack-font">
						{#if $language.lang === 'bn'}
							{header}
						{:else}
							{headerEn}
						{/if}
					</h1>
					<a
						href="/register"
						class="bg-btnColor w-[80%] md:w-[70%] lg:w-[50%] md:mx-[inherit] mx- mx-auto relative transition-all duration-300 hover:bg-btnHoverColor text-white py-3 px-8 rounded hack-btn"
						>{#if $language.lang === 'bn'}
							{btn1}
						{:else}
							{btn1En}
						{/if}
						<img
							src={arrow}
							alt="arrow"
							class="top-[35%] right-[10%] absolute transition-all w-[18px] hack-svg-white"
						/>
						<!-- <i class="fa-solid fa-arrow-right absolute top-[35%] right-[15%] transition-all" /> -->
					</a>

					<a
						href="/details"
						class="bg-white border border-btnColor text-btnColor w-[80%] md:w-[70%] lg:w-[50%] md:mx-[inherit] mx-auto relative mt-5 transition-all duration-300 py-3 px-8 rounded hack-btn"
						>{#if $language.lang === 'bn'}
							{btn2}
						{:else}
							{btn2En}
						{/if}
						<img
							src={arrow}
							alt="arrow"
							class="top-[35%] right-[10%] absolute transition-all w-[18px] hack-svg-color"
						/>
					</a>
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
		font-display: swap;
	}
	.hack-font {
		font-family: 'Hind Siliguri Semi Bold';
		font-size: 46px;
		font-weight: 400;
		line-height: 3.3rem;
	}
	.hack-btn:hover img {
		right: 7%;
	}
	.hack-svg-color {
		filter: invert(45%) sepia(65%) saturate(5584%) hue-rotate(339deg) brightness(100%)
			contrast(123%);
	}
	.hack-svg-white {
		filter: brightness(0) saturate(100%) invert(100%) sepia(51%) saturate(828%) hue-rotate(295deg)
			brightness(123%) contrast(100%);
	}
	@media (max-width: 768px) {
		.hack-font {
			font-size: 35px;
			line-height: 3rem;
		}
	}
</style>
