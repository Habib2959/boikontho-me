<script lang="ts">
    import {page} from '$app/stores';
    
</script>


    <aside class="z-1 fixed xl:text-14px text-base leading-21px fixed top-[10%] h-screen w-[inherit] md:w-[inherit] lg:w-[inherit]">
        <div class="bg-[#354895]  py-6 px-4 rounded-[20px] shadow sd">
            <ul>
                <li class="flex mb-2">
                    <a href="/dashboard/home" class:active = {$page.routeId === "dashboard/home"} class="group flex items-center justify-start cursor-pointer  rounded-13px
                 text-white hover:text-pink-500 transition-all duration-300 px-4 xl:px-4 py-4"><i class="fa-solid fa-gauge inline md:mr-2"></i><span class="hidden md:inline">Home</span></a>
                </li>
                <li class="flex mb-2">
                    <a href="/dashboard/classes" class:active = {$page.routeId === "dashboard/classes"} class="group flex items-center justify-start cursor-pointer  rounded-13px
                 text-white hover:text-pink-500 transition-all duration-300 px-4 xl:px-4 py-4"><i class="fa-solid fa-globe inline md:mr-2"></i><span class="hidden md:inline">Classes</span></a>
                </li>
                <li class="flex mb-2">
                    <a href="/dashboard/courses" class:active = {$page.routeId === "dashboard/courses"} class="group flex items-center justify-start cursor-pointer  rounded-13px
                 text-white hover:text-pink-500 transition-all duration-300 px-4 xl:px-4 py-4"><i class="fa-solid fa-globe inline md:mr-2"></i><span class="hidden md:inline">All Courses</span></a>
                </li>
                <li class="flex">
                    <a href="/dashboard/profile" class:active = {$page.routeId === "dashboard/profile"} class="group flex items-center justify-start cursor-pointer  rounded-13px
                 text-white hover:text-pink-500 transition-all duration-300 px-4 xl:px-4 py-4"><i class="fa-solid fa-globe inline md:mr-2"></i><span class="hidden md:inline">Profile</span></a>
                </li>
            </ul>
        </div>
    
    </aside>

<style>
    .active{
        background-color: rgb(236 72 153);
        color: #fff;
        width: 100%;
        border-radius: 10px;
    }
</style>