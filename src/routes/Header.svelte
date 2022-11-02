<script lang="ts">
    import logo from '$lib/images/Hackules.png'
    let y: number;
</script>
<svelte:window bind:scrollY={y}/>
<header class="py-4 fixed top-0 left-0 right-0 bg-[#fff] transition-all duration-300" class:scrolled ={y>0}>
    <img class = "mx-auto w-[200px]" src={logo} alt ="logo" />
</header>

<style>
    .scrolled{
        border-bottom-left-radius: 15px ;
        border-bottom-right-radius: 15px;
       background-color: rgba(255, 255, 255, .8);
       padding: 10px 0px;
       transition: background-color .3s ease-in,
       padding .2s ease-in;
    }
    .scrolled img{
        width: 150px;
    }
</style>