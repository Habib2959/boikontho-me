<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/double_logo.svg';
	import gplay from '$lib/images/google-play.svg';
	import app from '$lib/images/app-store.svg';
</script>

<footer
	class="hack-footer mt-4"
	class:hidden={$page?.routeId?.includes('login') ||
		$page?.routeId?.includes('register') ||
		$page?.routeId?.includes('otp')}
>
	<div class="hack-container">
		<div class="hack-footer-bg">
			<div class="hack-footer-top">
				<div class="hack-left">
					<img src={logo} alt="logo" width="50%" class="hack-footer-logo" />
					<ul>
						<li>Silver Book Technologies Bangladesh Limited</li>
						<li>
							<i class="fa-solid fa-location-dot mr-3 text-btnColor" />101 Shukrabad, Dhaka - 1212,
							Bangladesh
						</li>
						<li><i class="fa-solid fa-phone mr-3 text-btnColor" />+8809666745745</li>
						<li><i class="fa-solid fa-envelope mr-3 text-btnColor" />support@pickaboo.com</li>
					</ul>
				</div>
				<div class="hack-about">
					<h3>Quick Links</h3>
					<ul>
						<li><a href="/details/about-us"> About Us</a></li>
						<li>
							<a href="/publish">Publish on Boikontho</a>
						</li>
						<li><a href="/details/career">Careers</a></li>
						<li><a href="/csr">CSR</a></li>
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
					<p>
						© 2022 Boikontho.com | <a href="/details/terms-of-use">Terms of Use</a> |
						<a href="/details/privacy-policy">Privacy Policy</a>
						| <a href="/details/faq">FAQ</a>
					</p>
				</div>
				<div>
					<div class="hack-footer-icon-wrapper">
						<div class="hack-title">Follow us</div>
						<div class="hack-icon">
							<a href="https://www.linkedin.com/company/boikontho"
								><i class="fa-brands fa-linkedin" /></a
							>
							<a href="https://www.facebook.com/BoiKonthoOfficial" class="ml-3"
								><i class="fa-brands fa-square-facebook" /></a
							>
							<a href="https://www.instagram.com/boikonthobd" class="ml-3"
								><i class="fa-brands fa-instagram" /></a
							>
							<a href="https://www.youtube.com/channel/UCz9OyAvi3dhlNZaDRs2SPOQ" class="ml-3"
								><i class="fa-brands fa-youtube" /></a
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
		padding-top: 7rem;
		padding-right: 3rem;
		padding-left: 3rem;
		background-image: url(../lib/images/footerbg.svg);
		background-repeat: no-repeat;
		background-size: cover;
	}
	.hack-footer-top {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px 40px;
	}
	.hack-footer-logo {
		margin-bottom: 40px;
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
	.hack-footer-bottom p {
		line-height: 20px;
	}
	.hack-divider {
		height: 1px;
		background-color: #002f4c;
		margin: 20px 40px;
	}
	.fa-brands {
		transition: 0.3s;
	}
	.fa-linkedin:hover {
		color: #0e76a8;
	}
	.fa-square-facebook:hover {
		color: #1877f2;
	}
	.fa-instagram:hover {
		color: #8a3ab9;
	}
	.hack-download-img {
		width: 150px;
	}
	.fa-youtube {
		transition: 0.3s;
	}
	.fa-youtube:hover {
		color: #ff0000;
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
			padding: 30px 0;
		}
		.hack-footer-bg {
			background-image: none;
			padding-top: 1rem;
			padding-right: 1rem;
			padding-left: 1rem;
		}
		.hack-footer {
			background-color: #f5f5f5;
		}
		.hack-icon {
			font-size: 22px;
		}
		.hack-download-img {
			width: 150px;
		}
		.hack-footer-logo {
			margin-bottom: 30px;
		}
		.hack-footer-bg {
			padding-right: 0;
			padding-left: 0;
		}
	}
	@media (max-width: 768px) {
		.hack-title {
			font-weight: 700;
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
	}
	@media (max-width: 600px) {
		.hack-icon {
			font-size: 16px;
			column-gap: 5px;
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
		}
		.hack-left {
			flex: 0 0 100%;
		}
		.hack-about {
			flex: 0 0 100%;
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
	}
</style>
