<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`performances/${params.id}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { performance: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let performance;
</script>

<style>
</style>

<svelte:head>
	<title>Jerboa Dance - {performance.name}</title>
</svelte:head>

<h1>{@html performance.name}</h1>

<div class='content'>
	{@html performance.description}
</div>