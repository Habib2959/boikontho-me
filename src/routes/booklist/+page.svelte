<script lang="ts">
	import { goto } from '$app/navigation';
	import { bookChoice } from '$lib/apis/public/bookChoice';
	import { successbtnLink, successBtnText, successText, language } from '../../store';
	let mobileOrEmail = '';
	let booklist = '';
	let name = '';
	const handleSubmit = async () => {
		try {
			const data = await bookChoice(name, mobileOrEmail, booklist);
			successText.set(data.detail);
			successBtnText.set('Go to home');
			successbtnLink.set('/');
			goto('/success');
		} catch (err) {
			alert(err);
		}
	};
</script>

<section class="flex items-center justify-center mt-[80px] 2xl:min-h-[80vh]">
	<div class="container mx-auto w-[90%] lg:w-[100%]">
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
			<form on:submit|preventDefault={handleSubmit}>
				<input
					type="text"
					class="mt-1 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn' ? 'আপনার নাম' : 'Tempor consequat elit amet anim.'}
					bind:value={name}
				/>
				<label class="block mt-2">
					<input
						type="text"
						name="email"
						class="mt-1 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7]  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
						placeholder={$language.lang === 'bn'
							? 'মোবাইল অথবা ইমেইল'
							: 'Tempor consequat elit amet anim.'}
						bind:value={mobileOrEmail}
					/>
					<span class="block text-xs mt-2 mb-6 ml-2 font-medium text-slate-700">
						{$language.lang === 'bn' ? '( নোটিফিকেশন পেতে )' : '( for notification )'}</span
					>
				</label>
				<textarea
					class="mt-3 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn'
						? 'পছন্দের বইয়ের তালিকা'
						: 'Tempor consequat elit amet anim.'}
					bind:value={booklist}
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
