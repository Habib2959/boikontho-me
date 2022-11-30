<script lang="ts">
	// Set the date we're counting down to
	let countDownDate = new Date('Jan 1, 2023 0:0:0').getTime();
	let days: number | string = 0;
	let hours: number | string = 0;
	let minutes: number | string = 0;
	let seconds: number | string = 0;

	// Update the count down every 1 second
	var x = setInterval(function () {
		// Get today's date and time
		let now = new Date().getTime();

		// Find the distance between now and the count down date
		let distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		days = Math.floor(distance / (1000 * 60 * 60 * 24));
		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((distance % (1000 * 60)) / 1000);

		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		if (hours < 10) {
			hours = '0' + hours;
		}
		if (days < 10) {
			days = '0' + days;
		}

		// If the count down is finished, write some text
		if (distance < 0) {
			clearInterval(x);
		}
	}, 1000);
</script>

<div class="flex items-center justify-center mb-3">
	<div
		class="bg-countdownBg text-countdown text-2xl md:text-lg lg:text-2xl px-5 py-3 md:px-3 lg:px-5 md:py-2 lg:py-3 mx-2 rounded-md relative hack-coundown"
	>
		{days}
		<p class="absolute top-[105%]  text-[14px]">Days</p>
	</div>
	<div
		class="bg-countdownBg text-countdown text-2xl md:text-lg lg:text-2xl px-5 py-3 md:px-3 lg:px-5 md:py-2 lg:py-3 mx-2 rounded-md relative hack-coundown"
	>
		{hours}
		<p class="absolute top-[105%] right-[15%] text-[14px] md:right-[0%] lg:right-[15%]">Hours</p>
	</div>
	<div
		class="bg-countdownBg text-countdown text-2xl md:text-lg lg:text-2xl px-5 py-3 md:px-3 lg:px-5 md:py-2 lg:py-3 mx-2 rounded-md relative hack-coundown"
	>
		{minutes}
		<p class="absolute top-[105%] right-[15%] text-[14px] md:right-[0%] lg:right-[15%]">Minute</p>
	</div>
	<div
		class="bg-countdownBg text-countdown text-2xl md:text-lg lg:text-2xl px-5 py-3 md:px-3 lg:px-5 md:py-2 lg:py-3 mx-2 rounded-md relative hack-coundown"
	>
		{seconds}
		<p class="absolute top-[105%] right-[15%] text-[14px] md:right-[0%] lg:right-[15%]">Second</p>
	</div>
</div>

<style>
	.hack-coundown {
		z-index: 10000;
	}
	.hack-coundown::before {
		content: '';
		position: absolute;
		height: 50%;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #393939;
		z-index: -1;
		border-bottom-left-radius: 0.375rem;
		border-bottom-right-radius: 0.375rem;
	}
</style>
