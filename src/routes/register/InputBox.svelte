<script>
	export let type, value, placeholder;
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
			<i class="fa-sharp fa-solid fa-eye" on:click={(e) => handleShowPass(e)} />
		{:else}
			<i class="fa-solid fa-eye-slash" on:click={(e) => handleShowPass(e)} />
		{/if}
	{/if}
</div>

<style>
	.fa-sharp,
	.fa-solid {
		margin-left: -30px;
		margin-top: 5%;
		cursor: pointer;
		color: #6f6f6f;
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
		margin-bottom: 25px;
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
	/* media query */
	@media (max-width: 600px) {
		.fa-sharp,
		.fa-solid {
			margin-left: -30px;
			margin-top: 7%;
			cursor: pointer;
			color: #6f6f6f;
		}
	}
</style>
