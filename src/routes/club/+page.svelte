<script lang="ts">
	import { goto } from '$app/navigation';
	import { club } from '$lib/apis/public/club';
	import ClubSwitcher from '$lib/clubSwitcher.svelte';
	import { language, successbtnLink, successBtnText, successText } from '../../store';
	let name = '';
	let mobile = '';
	let email = '';
	let institution = '';
	let website = '';
	let club_name = '';
	const handleSubmit = async () => {
		try {
			const data = await club(name, club_name, mobile, email, institution, website);
			successText.set(data.detail);
			successBtnText.set('Go to home');
			successbtnLink.set('/');
			goto('/success');
		} catch (err) {
			alert(err);
		}
	};
</script>

<svelte:head>
	<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Boikontho",
  "alternateName": "বইকন্ঠ",
  "url": "https://boikontho.com/",
  "logo": "https://boikontho.com/logo.svg"
}
	</script>
</svelte:head>
<div class="hack-banner" />
<section class="flex items-center justify-center mt-[80px] 2xl:min-h-[80vh]">
	<div class="container mx-auto w-[90%] lg:w-[100%]">
		<div class="text-center max-w-[800px] mx-auto">
			<ClubSwitcher />
			<h2 class="text-3xl my-3 font-bold text-btnColor">
				{$language.lang === 'bn'
					? 'ক্লাব অথবা সংগঠনের হয়ে যুক্ত হোন!'
					: 'Join onbehalf of a Club or Organization'}
			</h2>
			<!-- <p class="mb-3 text-subtitleColor">
				{$language.lang === 'bn'
					? 'আপনি চাইলে আপনার পছন্দের বইয়ের তালিকা জমা দিতে পারেন। আমরা আমাদের পরবর্তি প্রোডাকশনে আপনার পছন্দের বইটিকে অগ্রাধিকার দিয়ে কাজ করব।'
					: 'Tempor consequat elit amet anim.'}
			</p> -->
		</div>
		<div
			class="px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] rounded-md max-w-[800px] mx-auto"
		>
			<form on:submit|preventDefault={handleSubmit}>
				<input
					type="text"
					class="mt-1 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn' ? 'আপনার নাম' : 'Name'}
					bind:value={name}
				/>
				<input
					type="text"
					class="mt-1 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn'
						? 'ক্লাব অথবা সংগঠনের নাম'
						: 'Name of the Club or Organization'}
					bind:value={club_name}
				/>
				<input
					type="number"
					maxlength="11"
					class="mt-1 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7]  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn' ? 'মোবাইল' : 'Mobile'}
					bind:value={mobile}
				/>
				<input
					type="email"
					class="mt-1 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7]  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn' ? 'ইমেইল' : 'Email'}
					bind:value={email}
				/>
				<input
					type="text"
					class="mt-1 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7]  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn' ? 'শিক্ষা প্রতিষ্ঠান ' : 'Institution'}
					bind:value={institution}
				/>
				<input
					type="text"
					class="mt-1 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7]  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn' ? 'ওয়েবসাইট' : 'Website'}
					bind:value={website}
				/>
				<button
					type="submit"
					class="mt-3 px-3 py-2 text-[#fff] bg-btnColor border shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					>{$language.lang === 'bn' ? 'জমা দিন' : 'Submit'}</button
				>
			</form>
		</div>
	</div>
</section>

<style>
	/* .hack-terms-title h1 {
		-webkit-clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
		clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
		display: inline-block;
	} */
	.hack-banner {
		background: url('../../lib/images/campus.webp');
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	}
	/* .hack-btn-animation {
		animation-name: pulse;
		animation-duration: 2.5s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-fill-mode: both;
		animation-play-state: running;
		display: inline-block;
	} */

	@media (min-width: 768px) {
		.hack-banner {
			margin-top: 65px;
			min-height: 250px;
		}
	}
	@media (min-width: 1440px) {
		.hack-banner {
			min-height: 360px;
		}
	}
</style>
