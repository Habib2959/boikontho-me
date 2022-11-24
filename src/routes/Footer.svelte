<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/double_logo.svg';
</script>

<footer
	class="hack-footer mt-4"
	class:hidden={$page?.routeId?.includes('login') ||
		$page?.routeId?.includes('register') ||
		$page?.routeId?.includes('otp')}
>
	<div class="hack-container">
		<div class="hack-footer-bg">
			<svg
				width="1100"
				height="357"
				viewBox="0 0 1100 357"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M337.968 0H40C17.9086 0 0 17.9086 0 40V357H1100V112.5C1100 90.4086 1082.09 72.5 1060 72.5H410.468C390.448 72.5 374.218 56.2703 374.218 36.25C374.218 16.2297 357.989 0 337.968 0Z"
					fill="#F5F5F5"
				/>
			</svg>
		</div>
		<div class="hack-footer-top">
			<div class="hack-left">
				<img src={logo} alt="logo" width="50%" />
			</div>
			<div class="hack-right">
				<div class="hack-footer-nav">
					<ul>
						<li>Home</li>
						<li>price</li>
						<li>price</li>
						<li>price</li>
					</ul>
					<ul>
						<li>Home</li>
						<li>price</li>
						<li>price</li>
						<li>price</li>
					</ul>
				</div>
				<div class="hack-footer-icon-wrapper">
					<div class="hack-title">Follow us</div>
					<div class="hack-icon">
						<i class="fa-brands fa-linkedin" />
						<i class="fa-brands fa-square-facebook" />
						<i class="fa-brands fa-instagram" />
						<i class="fa-brands fa-twitter" />
					</div>
				</div>
			</div>
		</div>
		<div class="hack-divider" />
		<div class="hack-footer-bottom">
			<p>© All rights reserved 2022 Boikontho</p>
		</div>
	</div>
</footer>

<style>
	.hack-container {
		max-width: 1100px;
		padding-top: 8.2rem;
		padding-right: 5rem;
		padding-left: 5rem;
		position: relative;
		margin: 0px auto;
	}
	.hack-footer-bg {
		position: absolute;
		left: 0;
		top: auto;
		right: 0;
		bottom: 0;
		height: 100%;
		display: flex;
		justify-content: center;
		z-index: -1;
	}
	.hack-footer-top {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 0px 40px;
	}
	.hack-right {
		display: flex;
		width: 60%;
		justify-content: space-between;
	}
	.hack-left {
		display: flex;
		width: 40%;
	}
	.hack-footer-nav {
		display: flex;
	}
	ul {
		padding: 0;
		margin: 0;
	}
	li {
		list-style: none;
	}
	.hack-footer-nav {
		display: flex;
		width: 70%;
		justify-content: space-around;
	}
	.hack-footer-icon-wrapper {
		width: 30%;
	}
	.hack-icon {
		display: flex;
		font-size: 30px;
		justify-content: space-between;
	}
	.hack-footer-bottom {
		padding: 0px 40px;
	}
	.hack-footer-bottom p {
		width: 50%;
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
	.fa-twitter:hover {
		color: #00acee;
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
			max-width: 900px;
			padding-right: 0;
			padding-left: 0;
		}
		.hack-footer-bottom p {
			width: 80%;
			line-height: 20px;
		}
	}
	@media (max-width: 992px) {
		.hack-container {
			width: 100%;
			padding: 30px 0;
		}
		.hack-footer-bg {
			display: none;
		}
		.hack-footer {
			background-color: #f5f5f5;
		}
		.hack-icon {
			font-size: 22px;
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
	}
</style>
