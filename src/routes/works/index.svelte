<script context="module">
	export function preload({ params, query }) {
    return this.fetch(`works.json`).then(r => r.json()).then(data => {
      return data;
    });
	}
</script>

<script>
  export let works;
  const title = "Works";
</script>

<style>
</style>

<svelte:head>
  <title>Jerboa Dance - {title}</title>
</svelte:head>

<main>

    <h1>{title}</h1>

    {#each works as work}
        <article>
            <a rel="prefetch" href='works/{work.id}'>{@html work.name}</a>
        </article>
    {/each}

</main>

