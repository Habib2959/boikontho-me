<script lang="ts">
	import logo from '$lib/images/double_logo.svg';
	import ill1 from '$lib/images/Illustration 1.svg';
</script>

<section class="hack-bg">
	<div class="hack-logo-div">
		<img src={logo} alt="man" class="mx-auto" />
		<!-- <h2>উঠতি উদ্যোক্তাদের প্ল্যাটফর্ম</h2> -->
	</div>
	<div class="hack-rocket-div">
		<img src={ill1} alt="man" class="mx-auto" />
	</div>
</section>

<style>
	/* @font-face {
		font-family: 'Li Alinur Bihongo Unicode';
		src: url('../../../assets/fonts/Unicode/Li Alinur Bihongo Unicode.ttf');
	} */
	.hack-bg {
		background-image: linear-gradient(270deg, #b989d3 -4.7%, #f9f0c9 65.56%);
		background: linear-gradient(270deg, #b989d3 -4.7%, #f9f0c9 65.56%);
		border-radius: 0px 70px 70px 0px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	.hack-logo-div {
		text-align: center;
	}
	/* .hack-logo-div h2 {
		font-family: 'Li Alinur Bihongo Unicode';
		font-size: 36px;
		font-weight: 400;
	} */
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
