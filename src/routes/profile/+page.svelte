<script lang="ts">
	import { goto } from '$app/navigation';
	import { baseUrl } from '$lib/apis/baseUrl';
	import avatar from '$lib/images/avatar.svg';
	import { language, loginRole, successbtnLink, successBtnText, successText } from '../../store';
	let first_name = '';
	let mobile = '';
	let dob = '';
	let detail_address = '';
	let image: any;
	let files: any;
	let disabledEmail = '';
	let fileInput: HTMLInputElement;
	const handleSubmit = async () => {
		const token = localStorage.getItem('token');
		const paresedToken = JSON.parse(token);
		const formEl = document.forms.namedItem('form');
		let formData = new FormData(formEl);
		if ($loginRole === 'reader') {
			try {
				const readerUpdate = await fetch(`${baseUrl}/profile/`, {
					method: 'PUT',
					headers: { Authorization: `Token ${paresedToken}` },
					body: formData
				});
				successText.set('Profile updated successfully');
				successBtnText.set('Go to home');
				successbtnLink.set('/');
				goto('/success');
			} catch (err) {
				alert(err);
			}
		} else if ($loginRole === 'creator') {
			try {
				const creatorUpdate = await fetch(`${baseUrl}/creator-profile/`, {
					method: 'PUT',
					headers: { Authorization: `Token ${paresedToken}` },
					body: formData
				});
				successText.set('Profile updated successfully');
				successBtnText.set('Go to home');
				successbtnLink.set('/');
				goto('/success');
			} catch (err) {
				alert(err);
			}
		}
	};
	const getimage = (img: any) => {
		let reader = new FileReader();
		reader.readAsDataURL(img);
		reader.onload = (e) => {
			image = e.target?.result;
		};
	};
</script>

<section class="flex items-center justify-center mt-[80px] 2xl:min-h-[80vh]">
	<div class="container mx-auto w-[90%] lg:w-[100%]">
		<div class="text-center max-w-[800px] mx-auto">
			<h2 class="text-3xl my-3 font-bold text-btnColor">
				{$language.lang === 'bn' ? 'প্রোফাইল আপডেট' : 'Update your Profile'}
			</h2>
		</div>
		<div
			class="px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] rounded-md max-w-[800px] mx-auto"
		>
			<form on:submit|preventDefault={handleSubmit} name="form">
				<div class="text-center my-2">
					{#if image}
						<img
							src={image}
							class="w-[100px] h-[100px] rounded-full mx-auto object-cover"
							alt="avatar"
						/>
					{:else}
						<img src={avatar} class="w-[100px] mx-auto" alt="avatar" />
					{/if}
					<input
						class="hidden"
						id="file-to-upload"
						type="file"
						bind:files
						bind:this={fileInput}
						on:change={() => getimage(files[0])}
						name="profile_photo"
					/>
					<button class="upload-btn px-2 my-2" on:click|preventDefault={() => fileInput.click()}
						>Upload</button
					>
				</div>

				<input
					required
					type="text"
					class="mt-1 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn' ? 'নাম' : 'Name'}
					bind:value={first_name}
					name="first_name"
				/>
				<input
					disabled
					required
					type="email"
					class="mt-1 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7]  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn' ? 'ইমেইল' : 'Email'}
					bind:value={disabledEmail}
				/>
				<input
					required
					type="number"
					class="mt-1 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7]  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn' ? 'মোবাইল' : 'Mobile'}
					bind:value={mobile}
					maxlength="11"
					name="mobile"
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
						name="date_of_birth"
					/>
				</div>
				<textarea
					required
					class="mt-2 px-3 py-2 bg-white border shadow-sm border-[#e9e7e7] focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					placeholder={$language.lang === 'bn' ? 'ঠিকানা' : 'Address'}
					bind:value={detail_address}
					name="detail_address"
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
	.upload-btn {
		background-color: #f43131;
		color: white;
		font-weight: 500;
		border: 1px solid #f43131;
		transition: 0.3s;
		border-radius: 0.375rem;
	}

	.upload-btn:hover {
		background-color: transparent;
		color: #f43131;
	}
</style>
