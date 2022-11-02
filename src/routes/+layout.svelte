<script>
  import Footer from "./Footer.svelte";
import Header from "./Header.svelte";
  import "./styles.css";
</script>

<div class="app max-w-[1500px] mx-auto">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>
