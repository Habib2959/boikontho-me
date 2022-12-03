<script>
	let name = '';
	let email = '';
	let num = '';
	let message = '';
	const handleSubmit = () => {
		console.log(name, email, num, message);
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
						/>
						<input
							type="email"
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							placeholder="Email"
							bind:value={email}
						/>
						<input
							type="tel"
							class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							placeholder="Mobile Number"
							bind:value={num}
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
					<p><span>Email :</span><a href="/">support@boikontho.com</a></p>
					<p><span>Mobile :</span>01322666140</p>
					<h3 class="font-semibold text-xl mt-4 lg:text-2xl">FIND US ON</h3>
					<div>
						<a href="/" class="mr-2"
							><i class="fa-brands fa-facebook text-[#4F6AA3] text-[35px]" /></a
						>
						<a href="/" class="mr-2"
							><i class="fa-brands fa-linkedin text-[#1A85BD] text-[35px]" /></a
						>
						<a href="/"><i class="fa-brands fa-instagram text-[#E4457B] text-[35px]" /></a>
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
</style>
