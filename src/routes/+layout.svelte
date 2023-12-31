<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Drawer, initializeStores } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	import BarLead from '$lib/components/BarLead.svelte';

	initializeStores();
</script>

<Drawer>
	<Navigation />
</Drawer>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<BarLead />
			</svelte:fragment>
			<svelte:fragment slot="trail"></svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!--SideBar-->
	<svelte:fragment slot="sidebarLeft">
		<div id="sidebar-left" class="hidden lg:block w-64 h-full bg-surface-900 border-primary-50/5">
			<Navigation />
		</div>
	</svelte:fragment>

	<!-- Page Route Content -->

	<slot />
</AppShell>
