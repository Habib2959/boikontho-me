<script lang="ts">
	export let mode = 'Sign up';
	export let loading: boolean;
</script>

<button
	type="submit"
	class:button--loading={loading === true}
	disabled={loading}
	class="bg-btnColor">{mode}</button
>

<style>
	button {
		margin-top: 20px;
		/* background: #9e72fd; */
		color: #fff;
		border-radius: 8px;
		outline: none;
		border: none;
		font-size: 16px;
		padding: 12px 30px;
		cursor: pointer;
		width: 100%;
		font-weight: 500;
		font-family: 'Montserrat', sans-serif;
		position: relative;
	}
	.button--loading {
		background: #f431319a;
	}
	.button--loading::after {
		content: '';
		position: absolute;
		width: 32px;
		height: 32px;
		top: 23%;
		left: 20%;
		right: 0;
		bottom: 0;
		border: 4px solid transparent;
		border-top-color: #ffffff;
		border-radius: 50%;
		animation: s-Adxu8lHSkCpI-button-loading-spinner 1s ease infinite;
	}
	@keyframes button-loading-spinner {
		from {
			transform: rotate(0turn);
		}

		to {
			transform: rotate(1turn);
		}
	}
</style>
