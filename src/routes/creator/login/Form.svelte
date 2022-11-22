<script>
	import InputBox from './InputBox.svelte';
	import Button from './Button.svelte';
	import { emplpoyeeRole, userAuthenticated } from '../../../store';
	import { userInfo } from '../../../store';
	import { goto } from '$app/navigation';
	import TelInput from './TelInput.svelte';
	import { login } from './apis';
	let yes = true;
	export let values = {
		userName: '',
		password: '',
		tel: '',
		confirmPassword: '',
		email: '',
		role: '',
		newsletter: yes
	};
	emplpoyeeRole.subscribe((updatedRole) => {
		values.role = updatedRole;
	});
	let Roles = ['Graphics Designer', 'Web developer', 'Content Writer', 'SEO'];
	async function submitSigninHandler() {
		await login(values.tel, values.password);
		userInfo.set(values);
		const auth = localStorage.getItem('token');
		if (auth) {
			userAuthenticated.set(true);
			goto('/');
		} else {
			alert('user is not authinticated');
			userAuthenticated.set(false);
		}
	}
</script>

<div class="hack-content-box">
	<h1 class="hack-title text-3xl text-semibold">Welcome back to Uthti</h1>
	<form on:submit|preventDefault={submitSigninHandler}>
		<TelInput type="text" placeholder="Mobile Number" bind:value={values.tel} />
		<InputBox type="password" placeholder="Password" bind:value={values.password} />

		<Button mode="Sign in" />
	</form>
	<p class="hack-text-center hack-switch-signup">
		Don't have an account
		<a href="/register" class="hack-sign-in-text">Sign up</a>
	</p>
</div>

<style>
	* {
		font-family: 'Montserrat', sans-serif;
	}
	.hack-switch-signup {
		margin-top: 20px;
	}
	.hack-title {
		margin-bottom: 50px;
	}
	/* .hack-newsletter-check {
		margin: 20px 0px 10px 0px;
		display: block;
	} */
	.hack-content-box {
		width: 500px;
		margin: 0 auto;
	}
	/* .hack-text-red {
		color: red;
	} */
	/* .hack-checkmark {
		position: absolute;
		top: 0;
		left: 0;
		height: 20px;
		width: 20px;
		background-color: #eee;
		border-radius: 4px;
	} */
	/* label {
		position: relative;
		cursor: pointer;
	} */
	/* label input:checked ~ .hack-checkmark {
		background-color: #9f9f9f;
	}
	.hack-checkmark:after {
		content: '';
		position: absolute;
		display: none;
	} */
	/* Show the checkmark when checked
	label input:checked ~ .hack-checkmark:after {
		display: block;
	}
	label .hack-checkmark:after {
		left: 7px;
		top: 2px;
		width: 5px;
		height: 10px;
		border: solid white;
		border-width: 0 3px 3px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	} */
	.hack-sign-in-text {
		font-weight: 600;
		text-decoration: underline;
		cursor: pointer;
	}
	.hack-text-center {
		text-align: center;
	}
	/* media query */
	@media (max-width: 1200px) {
		.hack-content-box {
			width: 400px;
		}
	}
	@media (max-width: 600px) {
		.hack-content-box {
			width: 300px;
			margin: 30px auto;
		}
	}
</style>
