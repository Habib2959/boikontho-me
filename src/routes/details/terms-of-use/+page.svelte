<script lang="ts">
	import { en, bn } from '$lib/lang/terms';
	import { language } from '../../../store';
</script>

<section class="mt-3 md:mt-6 md:mx-2 lg:mx-4 xl:mx-0 2xl:min-h-[58vh] 2xl:flex 2xl:items-center">
	<div class="container mx-auto w-[90%] md:w-full">
		{#if $language.lang === 'bn'}
			{#each bn as bnContent}
				<div class="border-b-2 border-btnColor mb-3 hack-terms-title pb-[1px]">
					<h1
						class="text-lg font-bold lg:text-2xl bg-btnColor text-[#fff] py-1 pr-10 md:pr-16 pl-1"
					>
						{bnContent.header}
					</h1>
				</div>
				<ol class="list-decimal mx-auto w-[90%] mb-3">
					{#each bnContent.items as listItems}
						<li>
							{listItems}
						</li>
					{/each}
				</ol>
			{/each}
		{:else}
			{#each en as enContent}
				<div class="border-b-2 border-btnColor mb-3 hack-terms-title pb-[1px]">
					<h1
						class="text-lg font-bold lg:text-2xl bg-btnColor text-[#fff] py-1 pr-10 md:pr-16 pl-1"
					>
						{enContent.header}
					</h1>
				</div>
				<ol class="list-decimal mx-auto w-[90%] mb-3">
					{#each enContent.items as listItems}
						<li>
							{listItems}
						</li>
					{/each}
				</ol>
			{/each}
		{/if}
	</div>
</section>

<style>
	.hack-terms-title h1 {
		-webkit-clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
		clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
		display: inline-block;
	}
</style>
