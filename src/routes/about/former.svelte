<script context="module">
	export function preload({ params, query }) {
    return this.fetch(`about.json?former`).then(r => r.json()).then(data => {
      return data;
    });
	}
</script>

<script>
  import Photograph from '../../components/Photograph.svelte';
  export let companyMembers;

  const title = "Former Company Members";
</script>

<style>
.gallery {
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 2rem;
}

</style>

<svelte:head>
  <title>Jerboa Dance - {title}</title>
</svelte:head>

<h1>{title}</h1>

<section class="gallery">
  {#each companyMembers as companyMember}
    <article>
      <h2>{companyMember.name}</h2>
      <a rel='prefetch' href="about/{companyMember.id}">
        <Photograph 
          src="company/{companyMember.id}.jpg" 
          alt="Photograph of {companyMember.name}"
          {...companyMember.photoCredit}
          />
      </a>
    </article>
  {/each}
</section>