<script context="module">
	export function preload({ params, query }) {
        return this.fetch(`about/dancers.json`).then(r => r.json()).then(data => {
            return data;
        });
	}
</script>

<script>
    import Bio from '../../components/Bio.svelte';
    export let companyMembers;
    const title = "Dancers";
</script>

<style>
    .gallery {
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 2rem;
    }

    /* TODO media queries to dynamically resize the grid */
</style>

<svelte:head>
    <title>Jerboa Dance - {title}</title>
</svelte:head>

<main>
    <h1>{title}</h1>

    <section class="gallery">
      {#each companyMembers as companyMember}
          <article>
              <Bio person={companyMember} />
          </article>
      {/each}    
    </section>

    <a href="about/former">Former Company Members</a>

</main>