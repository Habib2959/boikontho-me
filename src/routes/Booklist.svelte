<script lang="ts">
	import { language } from '../store';
	export let books: any;
	let imgPreurl = 'https://banana.hackules.com/';

	let bnHeader = 'আমাদের বইসমূহ';
	let enHeader = 'Explore our collection';
	
</script>

<section>
	<div class="container mx-auto">
		<h1 class="text-2xl font-semibold text-center mb-4">
			{$language.lang === 'bn' ? bnHeader : enHeader}
		</h1>
		<div class="flex justify-center flex-wrap">	
				{#each books as book}
					<a href = {`/book/${book.book_id}`} class="hack-grid-col m-5">
						<div class="bookitems-card">
							<div class="hack-book-img">
								<img src={`${imgPreurl}${book.thumbnail}`} alt="cover" class="h-[150px] w-full" />
							</div>
							
						</div>
						<div class="p-1">
								<h3 class="text-base font-medium whitespace-nowrap overflow-hidden text-ellipsis">
									{$language.lang === 'bn' ? book.name : book.name}
								</h3>
								<p class="text-sm text-subtitleColor font-medium">
									{$language.lang === 'bn' ? book.author : book.author}
								</p>
						</div>
					</a>
				{/each}

		</div>
	</div>
</section>

<style>
	.hack-grid-col{
		width: 145px;
	}
	.hack-book-img {
		position: relative;
		overflow: hidden;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		transition: box-shadow 0.3s linear;
	}
	.hack-book-img::before,
	.hack-book-img::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		background: #fff;
		border: 1px solid #d9d9d9;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		display: block;
		top: 0;
		z-index: 0;
	}
	.hack-book-img::before {
		left: -2px;
	}
	.hack-book-img::after {
		left: -5px;
	}
	.hack-book-img:hover {
		box-shadow: 0 2px 4px 0 rgb(0 0 0 / 25%), 0 9px 20px 0 rgb(0 0 0 / 45%);
	}
	.hack-book-img img {
		width: inherit;
		height: inherit;
		-webkit-transform-origin: 0 50%;
		transform-origin: 0 50%;
		-webkit-transform: rotateY(0);
		transform: rotateY(0);
		transition: all 0.45s ease;
		-o-object-fit: scale-down;
		object-fit: contain;
		background: #fff;
		width: 100%;
		height: 190px;
		z-index: 1;
		position: relative;
	}
	.hack-book-img:hover img {
		-webkit-transform: rotateY(-25deg);
		transform: rotateY(-25deg);
		box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.2);
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}
</style>
