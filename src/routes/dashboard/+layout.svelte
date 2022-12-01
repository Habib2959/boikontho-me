<script>
import Sidenav from "./Sidenav.svelte";
</script>

<main class="grid grid-cols-7 md:grid-cols-5">
    <div class="relative z-0 min-h-screen mx-2 md:block">
      <Sidenav />
    </div>
    <div class="col-span-6 md:col-span-4 mt-20">
      <div class="px-4">
        <div class="min-h-screen">
          <slot />
        </div>
      </div>
    </div>
  </main>