<script lang="ts">
	import { page } from '$app/stores';
	$: outerWidth = 0;
</script>

<svelte:window bind:outerWidth />
<section class="mb-10">
	<div class="">
		<div>
			<ul class="flex justify-around text-sm text-gray md:text-lg xl:text-xl">
				<li
					class="py-3 md:py-5 pb-1 basis-1/2 border-b border-[#ccc]"
					class:active={$page.routeId === '/ambassador'}
				>
					<a data-sveltekit-noscroll href="/ambassador"
						>{outerWidth > 600 ? 'Apply as campus ambassador' : 'Campus ambassador'}
					</a>
				</li>
				<li
					class="py-3 md:py-5 pb-1 basis-1/2 border-b border-[#ccc]"
					class:active={$page.routeId === '/club'}
				>
					<a data-sveltekit-noscroll href="/club"
						>{outerWidth > 600 ? 'Apply behalf of a club or organisation' : 'Club'}
					</a>
				</li>
			</ul>
		</div>
	</div>
</section>

<style>
	.active {
		border: 1px solid #ccc;
		border-bottom: none;
		border-top-left-radius: 0.375rem;
		border-top-right-radius: 0.375rem;
	}
</style>
