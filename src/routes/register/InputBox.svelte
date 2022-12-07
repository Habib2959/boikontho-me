<script>
	export let type, value, placeholder;
	import eye from '$lib/images/show.svg';
	import eyeslash from '$lib/images/hide.svg';
	let showPass = false;
	function typeAction(node) {
		node.type = type;
	}
	function handleShowPass(e) {
		if (e.target.previousElementSibling.type === 'password') {
			e.target.previousElementSibling.type = 'text';
			showPass = true;
		} else {
			showPass = false;
			e.target.previousElementSibling.type = 'password';
		}
	}
</script>

<div class="hack-input-container">
	<input use:typeAction {placeholder} bind:value class="hack-input" required />
	{#if type === 'password'}
		{#if showPass}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<img
				src={eye}
				alt="eye"
				class="w-[1.1rem] md:w-[.9rem] hack-svg-color"
				on:click={(e) => handleShowPass(e)}
			/>
		{:else}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<img
				src={eyeslash}
				alt="eye"
				class="w-[1.1rem] md:w-[.9rem] hack-svg-color"
				on:click={(e) => handleShowPass(e)}
			/>
		{/if}
	{/if}
</div>

<style>
	.hack-svg-color {
		margin-left: -30px;
		margin-top: -4%;
		cursor: pointer;
		filter: brightness(0) saturate(100%) invert(43%) sepia(4%) saturate(15%) hue-rotate(125deg)
			brightness(99%) contrast(96%);
	}
	.hack-input-container {
		display: flex;
	}
	.hack-input {
		padding: 22px 0px;
		border-radius: 10px;
		background: #f4f4f4;
		cursor: pointer;
		border: 1px solid transparent;
		outline: none;
		transition: all 0.3s ease;
		-webkit-transition: all 0.3s ease;
		margin-bottom: 15px;
		width: 100%;
		text-indent: 30px;
		font-family: 'Montserrat';
	}
	.hack-input:focus-visible {
		border: 1px solid #000;
	}
	.hack-input::placeholder {
		margin-left: 20px;
	}
	@media (max-width: 1200px) {
		.hack-svg-color {
			margin-top: -6%;
		}
	}
	/* media query */
	@media (max-width: 600px) {
		.hack-svg-color {
			margin-left: -30px;
			margin-top: -8%;
		}
	}
</style>
