<script>
	import ill from '$lib/images/Illustration 1.svg';
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
				<h2 class="text-xl font-semibold lg:text-3xl">Our Story</h2>
				<p class="mt-3">
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat."
				</p>
				<p class="mt-3">
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum."
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
		<div class="mt-6 lg:mt-12">
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
		</div>
	</div>
</section>

<style>
	.hack-terms-title h1 {
		-webkit-clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
		clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
		display: inline-block;
	}
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
