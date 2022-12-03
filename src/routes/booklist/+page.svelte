<script lang="ts">
	import { goto } from '$app/navigation';
	let mobileOrEmail = '';
	let booklist = '';
	const handleSubmit = () => {
		console.log(mobileOrEmail, booklist);
		goto('/success');
	};
</script>

<section class="flex items-center justify-center mt-[120px] lg:mt-0 lg:min-h-screen">
	<div class="container mx-auto w-[90%] lg:w-[100%]">
		<div
			class="px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-md max-w-[800px] mx-auto"
		>
			<form on:submit|preventDefault={handleSubmit}>
				<label class="block">
					<input
						type="text"
						name="email"
						class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
						placeholder="মোবাইল অথবা ইমেইল"
						bind:value={mobileOrEmail}
					/>
					<span class="block text-xs mt-2 mb-6 ml-2 font-medium text-slate-700">
						( নটিফিকেশন পেতে )</span
					>
				</label>
				<textarea
					class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder="পছন্দের বইয়ের তালিকা"
					bind:value={booklist}
				/>
				<button
					type="submit"
					class="mt-3 px-3 py-2 text-[#fff] bg-[#602D90] border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					>জমা দিন</button
				>
			</form>
		</div>
	</div>
</section>
