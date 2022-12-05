<script lang="ts">
	import { career } from '$lib/apis/public/career';
	import { successText } from '../../../store';
	import { goto } from '$app/navigation';
	let name = '';
	let email = '';
	let num = '';
	let location = '';
	let dept = '';
	let prgram = '';
	let message = '';
	let files;
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
		{ id: 8, text: `Creative` }
	];
	let prgramDropdown = [
		{ id: 1, text: `Permanent` },
		{ id: 2, text: `Trainee` },
		{ id: 3, text: `Intern` }
	];
	let locationPlaceholder = 'Select your location you wish to work';
	let deptPlaceholder = 'Select department you wish to work';
	let prgramPlaceholder = 'Select department you wish to work';
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
</script>

<section class="mt-3 lg:mt-6">
	<div class="container mx-auto w-[90%] sm:w-[100%]">
		<div>
			<h1 class="text-2xl font-bold text-center border-b pb-1 lg:text-5xl lg:pb-5">
				Join Our Family
			</h1>
			<div class="mt-3 lg:mt-5 md:text-center">
				<h2 class="text-lg font-semibold text-center lg:text-3xl">WE DON’T BITE!</h2>
				<p class="my-3">
					Hi there! We are just another human who are in love with their work & has a proven record
					of helping our people grow.
				</p>
				<p>
					We promise you, our 1st conversation will REALLY help you even if we don’t work together.
					So please send your CV or Say a hi…
				</p>
			</div>
			<div class="mt-5 lg:mt-8">
				<h2 class="text-xl text-center lg:text-3xl">Drop Your Resume Here</h2>
				<p class="text-center mb-3">We’ll reach you soon...</p>
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
						/>
						<input
							type="email"
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							placeholder="Email"
							bind:value={email}
							name="email"
						/>
						<input
							type="tel"
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							placeholder="Mobile Number"
							bind:value={num}
							name="phone"
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
							placeholder="Message"
							bind:value={message}
							name="message"
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
					If you think you fit in with our culture and our requirements then please send a short
					email to
				</p>
				<h3 class="font-semibold text-xl mt-2 lg:text-2xl">hr@boikontho.com</h3>
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
