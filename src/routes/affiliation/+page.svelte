<script>
	import { language } from '../../store';
	let mobile = '';
	let address = '';
	let name = '';
	let email = '';
	let gender = '';
	let dob = '';
	// @ts-ignore
	let platform = [];
	let link = '';
	let platformbn = [
		{
			label: 'ফেইসবুক গ্রুপ'
		},
		{
			label: 'ফেইসবুক পেইজ'
		},
		{
			label: 'ইন্সটাগ্রাম পেইজ'
		},
		{
			label: 'ইউটিউব চ্যানেল'
		},
		{
			label: 'ওয়েব সাইট/ পোর্টাল'
		}
	];
	let platformEn = [
		{
			label: 'Facebook Group'
		},
		{
			label: 'Facebook Page'
		},
		{
			label: 'Instagram Page'
		},
		{
			label: 'Youtube Channel'
		},
		{
			label: 'Website/ Portal'
		}
	];
	const handleSubmit = async () => {
		// try {
		// 	const data = await bookChoice(name, mobileOrEmail, booklist);
		// 	successText.set(data.detail);
		// 	successBtnText.set('Go to home');
		// 	successbtnLink.set('/');
		// 	goto('/success');
		// } catch (err) {
		// 	alert(err);
		// }
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
<section class="mt-3 md:mt-6 md:mx-2 lg:mx-4 xl:mx-0 2xl:min-h-[58vh] 2xl:flex 2xl:items-center">
	<div class="container mx-auto w-[90%] md:w-full">
		<div class="text-center max-w-[800px] mx-auto">
			<h2 class="text-3xl my-3 font-bold text-btnColor">
				{$language.lang === 'bn'
					? 'আপনার পছন্দের বই বইকন্ঠে!'
					: 'Your Favourite book is on Boikontho!'}
			</h2>
			<p class="mb-3 text-subtitleColor">
				{$language.lang === 'bn'
					? 'আপনি চাইলে আপনার পছন্দের বইয়ের তালিকা জমা দিতে পারেন। আমরা আমাদের পরবর্তি প্রোডাকশনে আপনার পছন্দের বইটিকে অগ্রাধিকার দিয়ে কাজ করব।'
					: 'You can submit your favourite booklist in our platform. We will working highly prioritize with your preferred books in our upcoming production.'}
			</p>
		</div>
		<div
			class="px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] rounded-md max-w-[800px] mx-auto"
		>
			<form on:submit|preventDefault={handleSubmit}>
				<input
					required
					type="text"
					class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn' ? 'আপনার নাম' : 'Name'}
					bind:value={name}
				/>

				<input
					required
					type="text"
					name="mobile"
					class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7]  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn' ? 'মোবাইল' : 'Mobile'}
					bind:value={mobile}
				/>
				<input
					required
					type="email"
					name="email"
					class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7]  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn' ? 'ইমেইল' : 'Email'}
					bind:value={email}
				/>
				<textarea
					required
					class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn' ? 'ঠিকানা' : 'Address'}
					bind:value={address}
				/>
				<input
					required
					type="text"
					class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn'
						? 'আপনার গ্রুপ, পেইজ, চ্যানেল অথবা ওয়েবসাইট লিংক'
						: 'Your Group, Page, Channel or Website link'}
					bind:value={link}
				/>
				<div class="mt-2 text-[#9e9e9e]">
					<p>
						{$language.lang === 'bn' ? 'জন্ম তারিখঃ' : 'Date of birth :'}
					</p>
					<input
						type="date"
						required
						class="px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
						bind:value={dob}
					/>
				</div>
				<div class="mt-2 text-[#9e9e9e]">
					<p>
						{$language.lang === 'bn' ? 'লিঙ্গঃ' : 'Select your gender :'}
					</p>
					<label>
						<input type="radio" bind:group={gender} value="male" class="accent-[#F43131]" />
						{$language.lang === 'bn' ? 'পুরুষ' : 'Male'}
					</label>
					<label>
						<input type="radio" bind:group={gender} value="female" class="accent-[#F43131]" />
						{$language.lang === 'bn' ? 'মহিলা' : 'Female'}
					</label>
				</div>

				<div class="mt-2 text-[#9e9e9e]">
					<p>
						{$language.lang === 'bn' ? 'প্ল্যাটফর্ম নির্বাচন করুনঃ' : 'Select the platform :'}
					</p>
					{#if $language.lang === 'bn'}
						{#each platformbn as platformContent}
							<label class="block">
								<input
									type="checkbox"
									bind:group={platform}
									value={platformContent.label}
									class="accent-[#F43131]"
								/>
								{platformContent.label}
							</label>
						{/each}
					{:else}
						{#each platformEn as platformContent}
							<label class="block">
								<input
									type="checkbox"
									bind:group={platform}
									value={platformContent.label}
									class="accent-[#F43131]"
								/>
								{platformContent.label}
							</label>
						{/each}
					{/if}
				</div>
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
		background: url('../../lib/images/affiliation.webp');
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
