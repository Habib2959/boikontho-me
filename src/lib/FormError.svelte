<script lang="ts">
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
