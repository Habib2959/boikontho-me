<script lang="ts">
	import logo from '$lib/images/logo.svg';
	import ill4 from '$lib/images/Illustration 4.svg';
</script>

<section class="hack-bg">
	<div class="hack-logo-div">
		<a href="/"><img src={logo} alt="man" class="mx-auto max-w-[45%]" /></a>
		
		<h2>দেশের সর্ববৃহৎ অডিওবুক ও ই-বুকের সম্ভার</h2>
	</div>
	<div class="hack-rocket-div">
		<img src={ill4} alt="man" class="mx-auto max-w-[75%]" />
	</div>
</section>

<style>
	@font-face {
		font-family: 'Li Alinur Bihongo Unicode';
		src: url('../assets/fonts/Unicode/Li Alinur Bihongo Unicode.ttf');
		font-display: swap;
	}
	.hack-bg {
		background-image: linear-gradient(270deg, #b8c6db -4.7%, #f5f7fa 65.56%);
		background: linear-gradient(270deg, #b8c6db -4.7%, #f5f7fa 65.56%);
		border-radius: 0px 70px 70px 0px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	.hack-logo-div {
		text-align: center;
	}
	.hack-logo-div h2 {
		font-family: 'Li Alinur Bihongo Unicode';
		font-size: 36px;
		font-weight: 400;
		margin-top: 20px;
	}
	.hack-rocket-div {
		text-align: right;
		padding-right: 50px;
	}
	img {
		-webkit-user-drag: none;
		user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}
</style>
