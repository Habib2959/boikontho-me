<script>
	import InputBox from './InputBox.svelte';
	import Button from '$lib/Button.svelte';
	import { userAuthenticated, username } from '../../store';
	import { userInfo } from '../../store';
	import { goto } from '$app/navigation';
	// import TelInput from './TelInput.svelte';
	import { login } from '$lib/apis/reader/login';
	import FormError from '$lib/FormError.svelte';
	export let values = {
		password: '',
		email: ''
	};

	let loading = false;
	let errorMessage = '';
	let errorType = '';
	async function submitSigninHandler() {
		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
			errorMessage = 'Put a valid email';
			errorType = 'emailError';
			return;
		}
		if (values.password.length < 8) {
			errorMessage = 'Password must be minimum 8 characters';
			errorType = 'passError';
			return;
		}
		loading = true;
		try {
			const loginRes = await login(values.email, values.password);
			loading = false;
			errorMessage = '';
			errorType = '';
			goto('/');
		} catch (err) {
			if (err.detail) {
				errorMessage = err.detail;
				errorType = 'loginError';
			}
			loading = false;
		}

		userInfo.set(values);
		loading = false;
		const auth = localStorage.getItem('token');
		if (auth) {
			const user = localStorage.getItem('user');
			userAuthenticated.set(true);
			// @ts-ignore
			username.set(JSON.parse(user));
			goto('/');
		} else {
			userAuthenticated.set(false);
		}
	}
</script>

<div class="hack-content-box">
	<h1 class="hack-title text-3xl text-semibold">Welcome back to Boikontho</h1>
	<div class:hidden={errorType !== 'loginError'}>
		<FormError {errorMessage} />
	</div>
	<form on:submit|preventDefault={submitSigninHandler}>
		<InputBox type="email" placeholder="Email Address" bind:value={values.email} />
		<div class:hidden={errorType !== 'emailError'}>
			<FormError {errorMessage} />
		</div>
		<InputBox type="password" placeholder="Password" bind:value={values.password} />
		<div class:hidden={errorType !== 'passError'}>
			<FormError {errorMessage} />
		</div>

		<Button mode="Sign in" {loading} />
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
