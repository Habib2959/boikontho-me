<script>
	import ill from '$lib/images/our-story.png';
	import { bn, en } from '$lib/lang/about';
	import { language } from '../../../store';
	const { header, p1, p2, p3, p4 } = bn();
	const { headerEn, p1En, p2En, p3En, p4En } = en();
</script>

<section class="mt-3 md:mt-6 md:mx-2 lg:mx-4 xl:mx-0 2xl:min-h-[58vh] 2xl:flex 2xl:items-center">
	<div class="container mx-auto w-[90%] md:w-full">
		<div class="grid gap-8 md:grid-cols-2 md:items-center">
			<div>
				<img src={ill} alt="us" class="rounded-lg" />
			</div>
			<div class="text-center md:text-left">
				<h2 class="text-xl font-semibold lg:text-3xl">
					{#if $language.lang === 'bn'}
						{header}
					{:else}
						{headerEn}
					{/if}
				</h2>
				<p class="mt-3">
					{#if $language.lang === 'bn'}
						{@html p1}
					{:else}
						{@html p1En}
					{/if}
				</p>
				<p class="mt-3">
					{#if $language.lang === 'bn'}
						{@html p2}
					{:else}
						{@html p2En}
					{/if}
				</p>
				<p class="mt-3">
					{#if $language.lang === 'bn'}
						{@html p3}
					{:else}
						{@html p3En}
					{/if}
				</p>
				<p class="mt-3">
					{#if $language.lang === 'bn'}
						{@html p4}
					{:else}
						{@html p4En}
					{/if}
				</p>
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
</style>
