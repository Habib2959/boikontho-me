<script>
	import { emplpoyeeRole } from '../../../store';
	export let type, value, placeholder, Roles;
	let showDropdown = false;
	function typeAction(node) {
		node.type = type;
	}
	function handleRole(role) {
		emplpoyeeRole.set(role);
	}
	function handleDropdown() {
		showDropdown = !showDropdown;
	}
	function handleDropdownFocus() {
		showDropdown = false;
	}
</script>

<div class="hack-input-container">
	<input
		use:typeAction
		{placeholder}
		bind:value
		class="hack-input"
		readonly
		on:click={handleDropdown}
		on:blur={handleDropdownFocus}
	/>
	<ul class={showDropdown ? 'hack-dropdown' : 'hack-dropdown-hide'}>
		{#each Roles as option}
			<li on:click={() => handleRole(option)}>{option}</li>
		{/each}
	</ul>
	<i class={showDropdown ? 'fa-solid fa-caret-down fa-caret-up' : 'fa-solid fa-caret-down'} />
</div>

<style>
	.hack-input-container {
		position: relative;
	}
	.fa-caret-down {
		position: absolute;
		top: 25%;
		right: 2.5%;
		transition: all 0.3s ease 0s;
	}
	.fa-caret-up {
		position: absolute;
		top: 26%;
		right: 2.5%;
		transform: rotate(180deg);
	}
	.hack-input-container ul li {
		list-style: none;
		color: #28292e;
		font-size: 14px;
		font-weight: 400;
		overflow-x: hidden;
		overflow-y: auto;
		cursor: pointer;
		padding: 10px 20px;
	}
	.hack-input-container ul li:hover {
		background-color: #eaeaea;
	}
	.hack-input-container ul {
		box-sizing: border-box;
		box-shadow: 3px 2px 8px #ccc;
		position: absolute;
		width: 100%;
		background: #fff;
		top: 60%;
		border-radius: 8px;
		padding: 0;
		transition: all 0.3s ease 0s;
	}
	.hack-dropdown-hide {
		opacity: 0;
		visibility: hidden;
	}
	.hack-dropdown {
		visibility: visible;
		opacity: 1;
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
			cursor: pointer;
			color: #6f6f6f;
		}
	}
</style>
