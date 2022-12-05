<script>
	import insta from '$lib/images/instagram.svg';
	import fb from '$lib/images/facebook.svg';
	import ln from '$lib/images/linkedin.svg';
	import yt from '$lib/images/youtube.svg';
	import { contact } from '$lib/apis/public/contact';
	import { goto } from '$app/navigation';
	import { successText } from '../../../store';
	let name = '';
	let email = '';
	let num = '';
	let message = '';
	const handleSubmit = async () => {
		try {
			const data = await contact(name, num, email, message);
			successText.set(data.detail);
			goto('/success');
		} catch (err) {
			alert(err);
		}
		// console.log(name, email, num, message);
	};
</script>

<div class="mb-3 md:mb-6 py-5 text-[#fff] hack-card">
	<h1 class="text-2xl font-bold text-center lg:text-5xl">FEEL FREE TO ASK BOIKONTHO</h1>
</div>
<section class="md:mx-2 lg:mx-4 xl:mx-0 2xl:min-h-[55vh] 2xl:flex 2xl:items-center">
	<div class="container mx-auto">
		<div class="grid md:grid-cols-2">
			<div class="md:order-last">
				<div
					class="px-3 py-2 bg-white border shadow-lg border-[#e9e7e7] w-[90%] md:w-full rounded-md mx-auto"
				>
					<form on:submit|preventDefault={handleSubmit}>
						<input
							type="text"
							class="mt-1 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							placeholder="Name"
							bind:value={name}
							required
						/>
						<input
							type="email"
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							placeholder="Email"
							bind:value={email}
							required
						/>
						<input
							type="tel"
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							placeholder="Mobile Number"
							bind:value={num}
							required
						/>
						<textarea
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							placeholder="Message"
							bind:value={message}
						/>
						<button
							type="submit"
							class="mt-3 px-3 py-2 text-[#fff] bg-btnColor border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							>Send</button
						>
					</form>
				</div>
			</div>
			<div class="w-[90%] md:w-full mx-auto">
				<div class="mt-5">
					<h2 class="text-xl font-semibold lg:text-3xl">Contact Boikontho</h2>
					<p><span>Email: </span><a href="/">support@boikontho.com</a></p>
					<p><span>Mobile: </span>01322666140</p>
					<h3 class="font-semibold text-xl mt-4 lg:text-2xl">FIND US ON</h3>
					<div class="hack-icon">
						<a href="https://www.linkedin.com/company/boikontho"
							><img src={ln} alt="ln" class="w-[1.5rem] inline-block hack-svg-ln" /></a
						>
						<a href="https://www.facebook.com/BoiKonthoOfficial" class="ml-3"
							><img src={fb} alt="fb" class="w-[1.5rem] inline-block hack-svg-fb" /></a
						>
						<a href="https://www.instagram.com/boikonthobd" class="ml-3"
							><img src={insta} alt="insta" class="w-[1.5rem] inline-block hack-svg-insta" /></a
						>
						<a href="https://www.youtube.com/channel/UCz9OyAvi3dhlNZaDRs2SPOQ" class="ml-3"
							><img src={yt} alt="yt" class="w-[1.5rem] inline-block hack-svg-yt" /></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.hack-card {
		background: linear-gradient(270deg, #ed1c24 0%, #c11f47 100%);
	}
	.hack-svg-ln,
	.hack-svg-fb,
	.hack-svg-yt,
	.hack-svg-insta {
		transition: 0.3s;
		filter: brightness(0) saturate(100%) invert(0%) sepia(5%) saturate(5244%) hue-rotate(76deg)
			brightness(117%) contrast(91%);
	}
	.hack-svg-ln:hover {
		filter: brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(1414%) hue-rotate(175deg)
			brightness(97%) contrast(89%);
	}
	.hack-svg-fb:hover {
		filter: brightness(0) saturate(100%) invert(46%) sepia(97%) saturate(4147%) hue-rotate(201deg)
			brightness(96%) contrast(97%);
	}
	.hack-svg-insta:hover {
		filter: brightness(0) saturate(100%) invert(27%) sepia(59%) saturate(2541%) hue-rotate(262deg)
			brightness(86%) contrast(87%);
	}
	.hack-svg-yt:hover {
		filter: brightness(0) saturate(100%) invert(16%) sepia(79%) saturate(7483%) hue-rotate(358deg)
			brightness(101%) contrast(110%);
	}
</style>
