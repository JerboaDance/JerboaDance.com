<script context="module">
	export function preload({ params, query }) {
    return this.fetch(`performances.json`).then(r => r.json()).then(data => {
      return data;
    });
	}
</script>

<script>
  export let performances;
  const title = "Performances";
</script>

<style>
</style>

<svelte:head>
  <title>Jerboa Dance - {title}</title>
</svelte:head>

<h1>{title}</h1>
  {#each performances as performance}
    <article>
      <a rel="prefetch" href='performances/{performance.id}'>{@html performance.name}</a>
    </article>
  {/each}

