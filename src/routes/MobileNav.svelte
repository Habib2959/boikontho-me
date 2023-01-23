<script>
  import book from '$lib/images/books.svg';
  import profile from '$lib/images/profile.svg';
  import home from '$lib/images/home.svg';
	import { userAuthenticated } from '../store';
</script>

<section class="bg-[#fff] fixed bottom-0 left-0 right-0 h-[50px] z-10 sm:hidden shadow-lg" class:hidden = {$userAuthenticated === false}>
 <div class="container mx-auto h-full">
  <div class="flex justify-around items-center h-full">
    <a href="/" class="flex flex-col justify-center items-center mt-2 gap-y-0.5 cursor-pointer">
      <img src={home} alt="home" width="20">
      <p>Home</p>
    </a>
    <a href="/books" class="flex flex-col justify-center items-center mt-2 gap-y-0.5 cursor-pointer">
      <img src={book} alt="book" width="20">
      <p>Books</p>
    </a>
    <a href="/profile" class="flex flex-col justify-center items-center mt-2 gap-y-0.5 cursor-pointer">
      <img src={profile} alt="profile" width="20">
      <p>Profile</p>
    </a>
  </div>
 </div>
</section>