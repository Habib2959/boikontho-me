<script>
	import InputBox from './InputBox.svelte';
	import Button from '$lib/Button.svelte';
	// import Dropdown from './Dropdown.svelte';
	import { emplpoyeeRole, userAuthenticated } from '../../store';
	import { userInfo } from '../../store';
	import { goto } from '$app/navigation';
	import TelInput from './TelInput.svelte';
	import { register } from '$lib/apis/reader/register';
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
	// let Roles = ['Graphics Designer', 'Web developer', 'Content Writer', 'SEO'];
	let loading = false;
	async function submitSignupHandler() {
		if (values.password !== values.confirmPassword) {
			alert("password didn't matched");
		} else {
			loading = true;
			try {
				let data = await register(values.userName, values.email, values.tel, values.password);
				userInfo.set(values);
				loading = false;
				goto('/otp');
			} catch (error) {
				loading = false;
			}
		}
	}
	// function handleNewsletter() {
	// 	if (yes) {
	// 		yes = false;
	// 		values.newsletter = yes;
	// 	} else {
	// 		yes = true;
	// 		values.newsletter = yes;
	// 	}
	// }
</script>

<div class="hack-content-box">
	<h1 class="hack-title text-3xl text-semibold">Welcome to boikontho.com</h1>
	<form on:submit|preventDefault={submitSignupHandler} autocomplete="off">
		<InputBox type="text" placeholder="Full Name" bind:value={values.userName} />
		<TelInput type="text" placeholder="Mobile Number" bind:value={values.tel} />
		<!-- <Dropdown type="text" placeholder="Choose a role" bind:value={values.role} {Roles} /> -->
		<InputBox type="email" placeholder="Email Address" bind:value={values.email} />
		<InputBox type="password" placeholder="Password" bind:value={values.password} />
		<InputBox type="password" placeholder="Confirm Password" bind:value={values.confirmPassword} />
		<!-- <div>
			<p>
				By continuing , you agree to Boikontho’s <a href="/" class="hack-text-red"
					>Conditions of Use</a
				>
				and
				<a href="/" class="hack-text-red">Privacy Policy</a>
			</p>
			<label class="hack-newsletter-check">
				<input
					type="checkbox"
					bind:checked={yes}
					on:click={handleNewsletter}
					class="accent-slate-500"
				/>
				Signup to the newsletters -->
		<!-- eita baad <span class="hack-checkmark" /> -->
		<!-- </label>
		</div> -->

		<Button mode="Sign up" {loading} />
	</form>
	{#if !$userAuthenticated}
		<p class="hack-text-center hack-switch-signup">
			Have an account?

			<a href="/login" class="hack-sign-in-text">Sign in</a>
		</p>
	{/if}
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
		margin-top: 30px;
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

	/* label {
		position: relative;
		cursor: pointer;
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
