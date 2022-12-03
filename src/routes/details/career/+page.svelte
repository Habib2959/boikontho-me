<script>
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
	const handleSubmit = () => {
		console.log(name, email, num, location, dept, prgram, message, files);
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
					class="px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-md max-w-[800px] mx-auto"
				>
					<form on:submit|preventDefault={handleSubmit}>
						<input
							type="text"
							class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							placeholder="Name"
							bind:value={name}
						/>
						<input
							type="email"
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							placeholder="Email"
							bind:value={email}
						/>
						<input
							type="tel"
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							placeholder="Mobile Number"
							bind:value={num}
						/>
						<select
							bind:value={location}
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
						>
							{#if locationPlaceholder}
								<option value="" disabled selected>{locationPlaceholder}</option>
							{/if}
							{#each locationDropdown as locations}
								<option value={locations.text}>
									{locations.text}
								</option>
							{/each}
						</select>
						<select
							bind:value={dept}
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
						>
							{#if deptPlaceholder}
								<option value="" disabled selected>{deptPlaceholder}</option>
							{/if}
							{#each deptDropdown as depts}
								<option value={depts.text}>
									{depts.text}
								</option>
							{/each}
						</select>
						<select
							bind:value={prgram}
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
						>
							{#if prgramPlaceholder}
								<option value="" disabled selected>{prgramPlaceholder}</option>
							{/if}
							{#each prgramDropdown as prgrams}
								<option value={prgrams.text}>
									{prgrams.text}
								</option>
							{/each}
						</select>
						<textarea
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							placeholder="Message"
							bind:value={message}
						/>
						<input bind:files type="file" class="mt-2" />
						<button
							type="submit"
							class="mt-3 px-3 py-2 text-[#fff] bg-btnColor border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
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
