<script>
	import { language } from '../../store';
	import { bn, en } from '$lib/lang/creator';
	const { header, p1 } = bn();
	const { headerEn, p1En } = en();
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
		<div class="grid md:items-center">
			<!-- <div>
				<img src={ill} alt="us" class="rounded-lg" />
			</div> -->
			<div class="text-center">
				<h2 class="text-xl font-semibold lg:text-3xl">
					{$language.lang === 'bn' ? header : headerEn}
				</h2>
				<p class="mt-3">
					{#if $language.lang === 'bn'}
						{@html p1}
					{:else}
						{p1En}
					{/if}
				</p>
				<div class="text-center mt-5">
					<a
						href="/creator/register"
						class="bg-btnColor transition-colors duration-300  hover:bg-btnHoverColor text-white p-2 lg:p-3 rounded hack-btn-animation"
						>{$language.lang === 'bn' ? 'ক্রিয়েটর একাউন্ট খুলুন' : 'Creator account'}</a
					>
					<p class="mt-3">
						{$language.lang === 'bn' ? 'অথবা ' : 'or'}
						<a href="/creator/login" class="text-btnColor"
							>{$language.lang === 'bn' ? 'লগিন করুন ' : 'login'}</a
						>
					</p>
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
	/* .hack-banner {
		background: url('../../lib/images/creator.png');
		padding: 90px;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
		margin-top: 60px;
	} */
	.hack-banner {
		background: url('../../lib/images/creator.webp');
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
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
			min-height: 250px;
		}
	}
	@media (min-width: 1440px) {
		.hack-banner {
			min-height: 360px;
		}
	}
</style>
