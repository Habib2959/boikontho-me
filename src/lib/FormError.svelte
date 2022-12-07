<script lang="ts">
	import errIcon from '$lib/images/error.svg';
	export let errorMessage: string;
</script>

<div class="flex items-baseline">
	<!-- <img
		src={errIcon}
		alt="error"
		class="ml-4 w-[0.65rem] md:w-[.9rem] mr-3 inline-block hack-svg-color"
	/> -->
	<p class="text-btnColor text-sm -mt-1 mb-4">
		{errorMessage}
	</p>
</div>

<style>
	.hack-svg-color {
		filter: invert(45%) sepia(65%) saturate(5584%) hue-rotate(339deg) brightness(100%)
			contrast(123%);
	}
</style>
