<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
	import gplay from '$lib/images/google-play.svg';
	import app from '$lib/images/app-store.svg';
	import location from '$lib/images/location.svg';
	import mail from '$lib/images/mail.svg';
	import phone from '$lib/images/phone.svg';
	import insta from '$lib/images/instagram.svg';
	import fb from '$lib/images/facebook.svg';
	import ln from '$lib/images/linkedin.svg';
	import yt from '$lib/images/youtube.svg';
	import twitter from '$lib/images/twitter.svg';
</script>

<footer
	class="hack-footer mt-4 md:mx-1"
	class:hidden={$page?.routeId?.includes('login') ||
		$page?.routeId?.includes('register') ||
		$page?.routeId?.includes('otp')}
>
	<div class="hack-container mx-auto">
		<div class="hack-footer-bg">
			<div class="hack-footer-top">
				<div class="hack-left">
					<img src={logo} alt="logo" width="40%" class="hack-footer-logo" />
					<ul>
						<li class="text-sm md:text-base">দেশের সর্ববৃহৎ অডিওবুক ও ই-বুকের সম্ভার</li>
						<li class="text-sm md:text-base">
							<img
								src={location}
								alt="location"
								class="w-[0.65rem] md:w-[.9rem] mr-3 inline-block hack-svg-color"
							/>
							101 Shukrabad, Dhaka - 1212, Bangladesh
						</li>
						<li class="text-sm md:text-base">
							<img
								src={phone}
								alt="location"
								class="w-[0.65rem] md:w-[.9rem] mr-3 inline-block hack-svg-color"
							/>+8801322666140
						</li>
						<li class="text-sm md:text-base">
							<img
								src={mail}
								alt="location"
								class="w-[0.65rem] md:w-[.9rem] mr-3 inline-block hack-svg-color"
							/>support@boikontho.com
						</li>
					</ul>
				</div>
				<div class="hack-about">
					<h3>Quick Links</h3>
					<ul>
						<li class="text-sm md:text-base">
							<a href="/details/about-us" class="hover:text-btnColor"> About Us</a>
						</li>
						<li class="text-sm md:text-base">
							<a href="/creator" class="hover:text-btnColor">Boikontho Creator Program</a>
						</li>
						<li class="text-sm md:text-base">
							<a href="/details/career" class="hover:text-btnColor">Career</a>
						</li>
						<li class="text-sm md:text-base">
							<a href="/details/contact-us" class="hover:text-btnColor">Contact us</a>
						</li>
					</ul>
				</div>
				<div>
					<h3>Download</h3>
					<a href="/">
						<img src={gplay} alt="logo" class="hack-download-img" />
					</a>
					<a href="/">
						<img src={app} alt="logo" class="hack-download-img mt-2" />
					</a>
				</div>
			</div>
			<div class="hack-divider" />
			<div class="hack-footer-bottom">
				<div>
					<p class="text-sm md:text-base">
						© 2022 Boikontho.com | <a href="/details/terms-of-use" class="hover:text-btnColor"
							>Terms of Use</a
						>
						|
						<a href="/details/privacy-policy" class="hover:text-btnColor">Privacy Policy</a>
						| <a href="/details/faq" class="hover:text-btnColor">FAQ</a>
					</p>
				</div>
				<div>
					<div class="hack-footer-icon-wrapper">
						<div class="hack-title mr-2">Follow us :</div>
						<div class="hack-icon">
							<a href="https://www.linkedin.com/company/boikontho"
								><img src={ln} alt="ln" class="w-[1.375rem] inline-block hack-svg-ln" /></a
							>
							<a href="https://www.facebook.com/BoiKonthoOfficial" class="ml-3"
								><img src={fb} alt="fb" class="w-[1.375rem] inline-block hack-svg-fb" /></a
							>
							<a href="https://www.instagram.com/boikonthobd" class="ml-3"
								><img src={insta} alt="insta" class="w-[1.375rem] inline-block hack-svg-insta" /></a
							>
							<a href="https://twitter.com/BoikonthoBD" class="ml-3"
								><img
									src={twitter}
									alt="yt"
									class="w-[1.375rem] inline-block hack-svg-twitter"
								/></a
							>
							<a href="https://www.youtube.com/channel/UCz9OyAvi3dhlNZaDRs2SPOQ" class="ml-3"
								><img src={yt} alt="yt" class="w-[1.375rem] inline-block hack-svg-yt" /></a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	.hack-container {
		max-width: 1400px;
		position: relative;
		margin: 0px auto;
	}
	.hack-footer-bg {
		padding-top: 4rem;
		padding-right: 3rem;
		padding-left: 3rem;
		background-image: url(../lib/images/footerbg.svg);
		background-repeat: no-repeat;
		background-size: cover;
	}
	.hack-svg-color {
		filter: invert(45%) sepia(65%) saturate(5584%) hue-rotate(339deg) brightness(100%)
			contrast(123%);
	}
	.hack-footer-top {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: 0px 40px;
	}
	.hack-footer-logo {
		margin-bottom: 10px;
	}

	ul {
		padding: 0;
		margin: 0;
	}
	li {
		list-style: none;
	}
	.hack-icon {
		display: flex;
		font-size: 30px;
	}
	.hack-footer-bottom {
		padding: 0px 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.hack-left ul li:nth-child(1) {
		margin-bottom: 20px;
	}
	.hack-footer-bottom p {
		line-height: 20px;
	}
	.hack-divider {
		height: 1px;
		background-color: #002f4c;
		margin: 20px 40px;
	}
	.hack-svg-ln,
	.hack-svg-fb,
	.hack-svg-yt,
	.hack-svg-insta,
	.hack-svg-twitter {
		transition: 0.3s;
		filter: brightness(0) saturate(100%) invert(0%) sepia(5%) saturate(5244%) hue-rotate(76deg)
			brightness(117%) contrast(91%);
	}
	.hack-svg-ln:hover {
		filter: brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(1414%) hue-rotate(175deg)
			brightness(97%) contrast(89%);
	}
	.hack-svg-fb:hover {
		filter: brightness(0) saturate(100%) invert(46%) sepia(97%) saturate(4147%) hue-rotate(201deg)
			brightness(96%) contrast(97%);
	}
	.hack-svg-insta:hover {
		filter: brightness(0) saturate(100%) invert(27%) sepia(59%) saturate(2541%) hue-rotate(262deg)
			brightness(86%) contrast(87%);
	}
	.hack-download-img {
		width: 150px;
	}
	.hack-svg-yt:hover {
		filter: brightness(0) saturate(100%) invert(16%) sepia(79%) saturate(7483%) hue-rotate(358deg)
			brightness(101%) contrast(110%);
	}
	.hack-svg-twitter:hover {
		filter: brightness(0) saturate(100%) invert(60%) sepia(52%) saturate(4882%) hue-rotate(176deg)
			brightness(100%) contrast(90%);
	}
	h3 {
		font-size: 20px;
		font-weight: 700;
	}
	/* .scnd {
		position: relative;
	}

	.navbar {
		position: absolute;
		top: 0px;
	} */
	.hack-footer-icon-wrapper {
		display: flex;
		align-items: center;
	}
	.hack-title {
		font-weight: 700;
	}
	@media (max-width: 1200px) {
		.hack-container {
			max-width: 1000px;
			padding-right: 0;
			padding-left: 0;
		}
		/* .hack-footer-bottom p {
			width: 80%;
			line-height: 20px;
		} */
	}
	@media (max-width: 992px) {
		.hack-container {
			width: 100%;
			padding: 30px 0px 0px 0px;
		}
		.hack-footer-bg {
			background-image: url(../lib/images/footerbg.svg);
			padding-top: 3rem;
			padding-right: 1rem;
			padding-left: 1rem;
		}
		/* .hack-footer {
			background-color: #f5f5f5;
		} */
		.hack-footer-top {
			align-items: baseline;
		}
		.hack-left ul li:nth-child(1) {
			margin-bottom: 20px;
		}
		.hack-icon {
			font-size: 22px;
		}
		.hack-download-img {
			width: 150px;
		}
		.hack-footer-logo {
			margin-bottom: 10px;
		}
		.hack-footer-bg {
			padding-right: 0;
			padding-left: 0;
		}
	}
	@media (max-width: 768px) {
		.hack-title {
			margin-top: 10px;
		}
		.hack-footer-top {
			flex-wrap: wrap;
		}
		h3 {
			margin-top: 20px;
		}
		.hack-download-img {
			max-width: 120px;
		}
		.hack-footer-icon-wrapper {
			align-items: baseline;
		}
		.hack-footer-bottom {
			align-items: baseline;
		}
		.hack-footer-bottom {
			flex-direction: column;
			align-items: flex-start;
		}
	}
	@media (max-width: 600px) {
		.hack-footer-bg {
			background-image: none;
			padding-top: 0;
		}
		.hack-footer {
			background-color: #f5f5f5;
		}
		.hack-footer {
			font-size: 12px;
		}
		.hack-footer-bottom p {
			width: 100%;
		}
		.hack-footer-logo {
			margin-bottom: 20px;
		}
		.hack-icon {
			column-gap: 0px;
			justify-content: center;
		}
		.hack-left {
			flex: 0 0 100%;
		}
		.hack-about {
			flex: 0 0 auto;
		}
		.hack-footer-bottom {
			flex-direction: column;
			align-items: flex-start;
		}
	}
	@media (max-width: 480px) {
		.hack-about {
			flex: 0 0 auto;
		}
		.hack-footer-top {
			padding: 0 20px;
		}
		.hack-footer-bottom {
			padding: 0 20px;
		}
		.hack-divider {
			margin: 20px 20px;
		}
		.hack-footer-logo {
			margin-bottom: 10px;
		}
	}
</style>
