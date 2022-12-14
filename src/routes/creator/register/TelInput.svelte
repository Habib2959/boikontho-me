<script lang="ts">
	// TODO:
	export let type: any, value: string | number, placeholder: string;

	function typeAction(node: any) {
		node.type = type;
	}
</script>

<div class="hack-input-container">
	<input use:typeAction {placeholder} bind:value class="hack-input" required maxlength="11" />
	<span class="hack-prefix">+88</span>
</div>

<style>
	.hack-input-container {
		display: flex;
		position: relative;
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
		margin-bottom: 12px;
		width: 100%;
		text-indent: 30px;
		font-family: 'Montserrat';
		text-indent: 80px;
	}
	.hack-input:focus-visible {
		border: 1px solid #000;
	}
	.hack-input::placeholder {
		margin-left: 20px;
	}
	.hack-prefix {
		position: absolute;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
		top: 0;
		padding: 22px 15px 22px 15px;
		border-right: 1px solid #ccc;
	}
</style>
