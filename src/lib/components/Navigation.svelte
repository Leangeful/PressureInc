<script>
	import { base } from '$app/paths';
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function itemClicked() {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4 bg-surface-500/5 h-full">
	<ul>
		<li>
			<a class="btn btn-sm variant-ghost-surface" href="{base}/" on:click={itemClicked}> Home </a>
		</li>
		<li>
			<a class="btn btn-sm variant-ghost-surface" href="{base}/upgrades" on:click={itemClicked}>
				Upgrades
			</a>
		</li>
	</ul>
</nav>
