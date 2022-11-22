<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../login/Button.svelte';
	import { userInfo } from '../../../store';
	import { otpResend, otpVerify } from './otpApi';
	let startTimer: any = undefined;
	let info = {
		tel: ''
	};
	let timer = 5;
	let values = [
		{ id: 1, value: '', backspacePressCount: 0 },
		{ id: 2, value: '', backspacePressCount: 0 },
		{ id: 3, value: '', backspacePressCount: 0 },
		{ id: 4, value: '', backspacePressCount: 0 },
		{ id: 5, value: '', backspacePressCount: 0 },
		{ id: 6, value: '', backspacePressCount: 0 }
	];

	onMount(() => {
		// start resend time
		startTimer = setInterval(() => {
			timer -= 1;
		}, 1000);
	});
	// stop timer
	$: {
		if (timer <= 0) {
			clearInterval(startTimer);
		}
	}
	userInfo.subscribe((updatedInfo): void => {
		info = updatedInfo;
	});
	function handleKeyup(e: any, id: string | number) {
		// on backspace press previous input focus\

		if (e.key === 'Backspace') {
			const pressedValueIndex = values.findIndex((otpValue) => otpValue.id == id);
			values[pressedValueIndex].backspacePressCount += 1;
			if (values[pressedValueIndex].backspacePressCount > 1 && e.target.previousElementSibling) {
				e.target.previousElementSibling.focus();
			}
		} else {
			return;
		}
	}
	function handleInput(e: any, id: string | number) {
		// checking the inut to be numbers only
		let newValue = e.target.value.replace(new RegExp(/[^\d]/, 'ig'), '');
		e.target.value = newValue;
		const pressedValueIndex = values.findIndex((otpValue) => otpValue.id == id);
		values[pressedValueIndex].value = e.target.value;
		values[pressedValueIndex].backspacePressCount = 0;
		// check for a valid input and change the input field focus
		if (e.target.value !== '') {
			e.target?.nextElementSibling?.focus();
		}
		console.log(e.target.value);
	}
	async function handlesubmit() {
		// validation for blank input
		let blankInput = values.some((value) => value.value === '');
		if (blankInput) {
			alert('Put a valid otp');
		} else {
			let finalOtp = '';
			values.map((item) => {
				finalOtp += item.value;
			});
			const otpRes = await otpVerify(finalOtp, info?.tel);
			console.log(otpRes);
		}
	}
	function handleResendOtp() {
		otpResend(info.tel);
	}
</script>

<div class="hack-otp-box">
	<h2 class="hack-title">Enter Your 6 Digit OTP</h2>
	<p class="hack-subtitle">We have sent an OTP to your mobile number {info.tel ? info.tel : ''}</p>
	<form class="hack-form" on:submit|preventDefault={handlesubmit}>
		{#each values as otpValue}
			<input
				type="text"
				maxlength="1"
				inputmode="numeric"
				on:input={(e) => handleInput(e, otpValue.id)}
				on:keyup={(e) => handleKeyup(e, otpValue.id)}
				value={otpValue.value}
			/>
		{/each}
		<div class="hack-btn-div">
			<Button mode="Verify" />
		</div>
	</form>
	<button
		type="button"
		class={timer > 0 ? 'hack-resend-btn hack-btn-disable' : 'hack-resend-btn hack-btn-enable'}
		disabled={timer > 0}
		on:click={handleResendOtp}
	>
		Resend {timer > 0 ? `(${timer})` : ''}
	</button>
</div>

<style>
	.hack-otp-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 60%;
		margin: 0px auto;
		padding: 20px;
	}
	.hack-title {
		text-align: center;
		margin-right: 20px;
	}
	.hack-subtitle {
		text-align: center;
		margin-right: 20px;
	}
	.hack-form {
		text-align: center;
		width: 100%;
	}
	.hack-form input {
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
		text-align: center;
		width: 3rem;
		height: 3rem;
		padding: 15px;
		font-size: 18px;
		font-weight: 800;
		margin: 20px 20px 20px 0px;
		border: 2px solid #eaeaea;
		border-radius: 5px;
		transition: all 0.3s ease;
	}
	.hack-form input:focus-visible {
		outline: none;
		border: 2px solid #9e72fd;
		box-shadow: 1px 1px 5px #eaeaea;
	}
	.hack-btn-div {
		width: 90%;
		margin: 0px auto;
	}
	.hack-resend-btn {
		margin: 20px auto;
		font-weight: 800;
		font-size: 18px;
		border-radius: 8px;
		outline: none;
		padding: 10px 25px;
		cursor: pointer;
		width: 90%;
		font-weight: 500;
		font-family: 'Montserrat', sans-serif;
	}
	.hack-btn-disable {
		background: transparent;
		color: #ccc;
		border: 1px solid #ccc;
		cursor: not-allowed;
	}
	.hack-btn-enable {
		background: #f28c28;
		color: #fff;
		border: 2px solid #f28c28;
	}
	@media (max-width: 1200px) {
		.hack-otp-box {
			width: 100%;
		}
	}
	@media (max-width: 992px) {
		.hack-resend-btn {
			width: 60%;
		}
		.hack-btn-div {
			width: 60%;
		}
	}
	@media (max-width: 768px) {
		.hack-resend-btn {
			width: 100%;
		}
		.hack-btn-div {
			width: 100%;
		}
		.hack-otp-box {
			width: 70%;
		}
	}
	@media (max-width: 600px) {
		.hack-otp-box {
			width: 100%;
		}
		.hack-form input {
			width: 30px;
			padding: 10px 0px;
		}
		.hack-resend-btn {
			width: 80%;
		}
		.hack-btn-div {
			width: 80%;
		}
	}
	@media (max-width: 414px) {
		.hack-otp-box {
			width: 100%;
		}
		.hack-form input {
			width: 25px;
			padding: 4px 0px;
		}
		.hack-resend-btn {
			width: 100%;
		}
		.hack-btn-div {
			width: 100%;
		}
	}
</style>
