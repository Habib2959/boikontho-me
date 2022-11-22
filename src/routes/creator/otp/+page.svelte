<script>
	import OtpInputs from './OtpInputs.svelte';
	import UthtiImage from '../login/UthtiImage.svelte';
</script>

<div class="hack-container">
	<div class="hack-row">
		<div class="hack-col-1">
			<UthtiImage />
		</div>
		<div class="hack-col-2">
			<OtpInputs />
		</div>
	</div>
</div>

<style>
	.hack-col-2 {
		width: 60%;
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
	.hack-col-1 {
		width: 40%;
		min-height: 100vh;
	}
	.hack-row {
		display: flex;
	}
	/* media query codes */
	@media (max-width: 1200px) {
		.hack-col-2 {
			width: 50%;
		}
		.hack-col-1 {
			width: 50%;
		}
	}
	@media (max-width: 992px) {
		.hack-col-2 {
			width: 100%;
		}
		.hack-col-1 {
			display: none;
		}
	}
	@media (max-width: 600px) {
		.hack-col-2 {
			width: 100%;
			height: max-content;
		}
	}
</style>
