<script>
	import { language } from '../../store';
	import avatar from '$lib/images/avatar.svg';
	let mobileOrEmail = '';
	let message = '';
	let name = '';
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
				{$language.lang === 'bn' ? 'আপনার পছন্দের বই বইকন্ঠে!' : 'Tempor consequat elit amet anim.'}
			</h2>
			<p class="mb-3 text-subtitleColor">
				{$language.lang === 'bn'
					? 'আপনি চাইলে আপনার পছন্দের বইয়ের তালিকা জমা দিতে পারেন। আমরা আমাদের পরবর্তি প্রোডাকশনে আপনার পছন্দের বইটিকে অগ্রাধিকার দিয়ে কাজ করব।'
					: 'Tempor consequat elit amet anim.'}
			</p>
		</div>
		<div
			class="px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] rounded-md max-w-[800px] mx-auto"
		>
			<img src={avatar} class="w-[100px] mx-auto" alt="ceo" />
			<h2 class="mt-2 text-center font-semibold">{$language.lang === 'en' ? 'CEO' : 'সি ই ও'}</h2>
			<form on:submit|preventDefault={handleSubmit}>
				<input
					type="text"
					class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn' ? 'আপনার নাম' : 'Tempor consequat elit amet anim.'}
					bind:value={name}
				/>

				<input
					type="text"
					name="email"
					class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7]  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn'
						? 'মোবাইল অথবা ইমেইল'
						: 'Tempor consequat elit amet anim.'}
					bind:value={mobileOrEmail}
				/>

				<textarea
					class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn' ? 'ম্যাসেজ' : 'message'}
					bind:value={message}
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
		background: url('../../lib/images/background.png');
		padding: 90px;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
		margin-top: 60px;
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
	@keyframes pulse {
		0% {
			transform: scale(0.95);
		}

		70% {
			transform: scale(1.15);
		}

		100% {
			transform: scale(0.95);
		}
	}
	@media (min-width: 768px) {
		.hack-banner {
			margin-top: 65px;
			min-height: 400px;
		}
	}
	@media (min-width: 1440px) {
		.hack-banner {
			min-height: 500px;
		}
	}
</style>
