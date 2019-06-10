<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`works/${params.id}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { work: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
    import Photograph from '../../components/Photograph.svelte';
	export let work;
</script>

<style>
</style>

<svelte:head>
	<title>Jerboa Dance - {work.name}</title>
</svelte:head>

<Photograph photograph={work.headerPhotograph} alt="Header image for {work.name} details page" />

<main>
	<h1>{@html work.name}</h1>

	<div class='content'>
		{@html work.description}
	</div>
</main>