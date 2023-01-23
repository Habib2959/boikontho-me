<script lang="ts">
  import type { PageData } from "./$types";
  export let data:PageData;
  	let imgPreurl = 'https://banana.hackules.com/';
  const {thumbnail, name, author,category, details} =  data.data;
</script>

{#if data}
  <section class="mt-[70px]">
    <div class="container mx-auto">
      <div class="grid w-[95%] mx-auto lg:w-full md:grid-cols-2 md:justify-between md:items-center md:gap-x-5">
        <div class="hack-book-img">
          <img src={`${imgPreurl}${thumbnail}`} alt="cover" />
        </div>
        <div class="mt-5">
          <h1 class="text-4xl font-semibold">{name}</h1>
          <p class="text-subtitleColor mt-3">Author: {author}</p>
          <div class="flex items-center mt-3">
            <p class="font-light">Catagory:</p>
            <p class="ml-4 py-1 px-2 bg-[#eaeaea] rounded-2xl">{category}</p>
          </div>
          <p class="mt-3">Description: {details}</p>
          <p class="text-3xl mt-4 text-btnColor">FREE</p>
          <a href="https://play.google.com/store/apps/details?id=com.boikontho.boikontho.app0" class="mt-4 inline-block bg-btnColor text-white px-2 py-1 rounded-md hover:bg-btnHoverColor transition-all md:text-lg md:px-3 md:py-2">Get the book</a>
        </div>
      </div>
    </div>
  </section>
  {:else}
  <p>Sorry you are searching a book which is not available</p>
{/if}

<style>
  	.hack-book-img {
		position: relative;
		overflow: hidden;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		transition: box-shadow 0.3s linear;
    max-width: max-content;
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
		max-height: 300px;
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