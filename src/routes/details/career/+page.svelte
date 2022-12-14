<script lang="ts">
	import { career } from '$lib/apis/public/career';
	import { successText, language } from '../../../store';
	import { goto } from '$app/navigation';
	import { en, bn } from '$lib/lang/career';
	let name = '';
	let email = '';
	let num = '';
	let location = '';
	let dept = '';
	let prgram = '';
	let message = '';
	let files: any;
	let locationDropdown = [
		{ id: 1, text: `Dhaka` },
		{ id: 2, text: `Sylhet` },
		{ id: 3, text: `Remote` }
	];
	let deptDropdown = [
		{ id: 1, text: `Web Development` },
		{ id: 2, text: `Software Development` },
		{ id: 3, text: `Software services` },
		{ id: 4, text: `Product testing` },
		{ id: 5, text: `Business Development` },
		{ id: 6, text: `Marketing` },
		{ id: 7, text: `Sales` },
		{ id: 8, text: `Creative` },
		{ id: 9, text: `Content Creator` },
		{ id: 10, text: `Vocal Artist` },
		{ id: 11, text: `Campus Ambassador` }
	];
	let prgramDropdown = [
		{ id: 1, text: `Permanent` },
		{ id: 2, text: `Trainee` },
		{ id: 3, text: `Intern` }
	];
	let locationPlaceholder = 'Select your location you wish to work';
	let deptPlaceholder = 'Select department you wish to work';
	let prgramPlaceholder = 'Select employment role you want to join';
	const handleSubmit = async () => {
		try {
			const formEl = document.forms.namedItem('form');
			let formData = new FormData(formEl);
			const data = await career(formData);
			successText.set(data.detail);
			goto('/success');
		} catch (err) {
			alert(err);
		}
	};
	const { header, header2, header3, p1, p2, p4, p5, mail } = bn();
	const { headerEn, header2En, header3En, p1En, p2En, p4En, p5En, mailEn } = en();
</script>

<section class="mt-3 lg:mt-6">
	<div class="container mx-auto w-[90%] sm:w-[100%]">
		<div>
			<h1 class="text-2xl font-bold text-center border-b pb-1 lg:text-5xl lg:pb-5">
				{#if $language.lang === 'bn'}
					{header}
				{:else}
					{headerEn}
				{/if}
			</h1>
			<div class="mt-3 lg:mt-5 md:text-center">
				<h2 class="text-lg font-semibold text-center lg:text-3xl">
					{#if $language.lang === 'bn'}
						{header}
					{:else}
						{headerEn}
					{/if}
				</h2>
				<p class="my-3">
					{#if $language.lang === 'bn'}
						{p1}
					{:else}
						{p1En}
					{/if}
				</p>
				<p>
					{#if $language.lang === 'bn'}
						{p2}
					{:else}
						{p2En}
					{/if}
				</p>
			</div>
			<div class="mt-5 lg:mt-8">
				<h2 class="text-xl text-center lg:text-3xl">
					{#if $language.lang === 'bn'}
						{header3}
					{:else}
						{header3En}
					{/if}
				</h2>
				<p class="text-center mb-3">
					{#if $language.lang === 'bn'}
						{p4}
					{:else}
						{p4En}
					{/if}
				</p>
				<div
					class="px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] rounded-md max-w-[800px] mx-auto"
				>
					<form enctype="multipart/form-data" on:submit|preventDefault={handleSubmit} name="form">
						<input
							type="text"
							class="mt-1 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							placeholder="Name"
							bind:value={name}
							name="name"
							required
						/>
						<input
							type="email"
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							placeholder="Email"
							bind:value={email}
							name="email"
							required
						/>
						<input
							type="tel"
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							placeholder="Mobile Number"
							bind:value={num}
							name="phone"
							required
						/>
						<select
							bind:value={location}
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							required
							name="job_location"
						>
							{#if locationPlaceholder}
								<option class="hack-disabled" value="" disabled selected
									>{locationPlaceholder}</option
								>
							{/if}
							{#each locationDropdown as locations}
								<option value={locations.text}>
									{locations.text}
								</option>
							{/each}
						</select>
						<select
							bind:value={dept}
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							required
							name="department"
						>
							{#if deptPlaceholder}
								<option class="hack-disabled" value="" disabled selected>{deptPlaceholder}</option>
							{/if}
							{#each deptDropdown as depts}
								<option value={depts.text}>
									{depts.text}
								</option>
							{/each}
						</select>
						<select
							bind:value={prgram}
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							required
							name="program"
						>
							{#if prgramPlaceholder}
								<option class="hack-disabled" value="" disabled selected>{prgramPlaceholder}</option
								>
							{/if}
							{#each prgramDropdown as prgrams}
								<option value={prgrams.text}>
									{prgrams.text}
								</option>
							{/each}
						</select>
						<textarea
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							placeholder="Why you want to join Boikontho?"
							bind:value={message}
							name="message"
							required
						/>
						<label for="cv" class="mt-2 block">Choose your CV</label>
						<input id="cv" bind:files type="file" name="cv" />
						<button
							type="submit"
							class="mt-3 px-3 py-2 text-[#fff] bg-btnColor border shadow-sm border-[#e9e7e7] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							>Send</button
						>
					</form>
				</div>
			</div>
			<div class="text-center mt-5 lg:mt-8">
				<p class="text-lg lg:text-xl">
					{#if $language.lang === 'bn'}
						{p5}
					{:else}
						{p5En}
					{/if}
				</p>
				<h3 class="font-semibold text-xl mt-2 lg:text-2xl">
					{#if $language.lang === 'bn'}
						{mail}
					{:else}
						{mailEn}
					{/if}
				</h3>
			</div>
		</div>
	</div>
</section>

<style>
	select:required:invalid {
		color: #9e9e9e;
	}
	select,
	option {
		color: #000;
	}
</style>
