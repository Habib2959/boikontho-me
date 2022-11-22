<script lang="ts">
	import { page } from '$app/stores';
</script>

<footer
	class="py-2 bg-slate-200"
	class:hidden={$page?.routeId?.includes('login') ||
		$page?.routeId?.includes('register') ||
		$page?.routeId?.includes('otp')}
>
	<div class="text-center">
		<p class="text-xs">&#169; All rights reserved 2022 Boikontho</p>
	</div>
</footer>
