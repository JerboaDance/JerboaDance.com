<script context="module">
	export function preload({ params, query }) {
    return this.fetch(`about.json`).then(r => r.json()).then(data => {
      return data;
    });
	}
</script>

<script>
  import Bio from '../../components/Bio.svelte';
  export let companyMembers;
  export let jaimeWaliczek;
  const title = "The Company";
</script>

<style>
.gallery {
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;
}

.jaimeWaliczek {
  width: 50%;
}
</style>

<svelte:head>
  <title>Jerboa Dance - {title}</title>
</svelte:head>

<h1>{title}</h1>

<section>
  <p>
  Jerboa Dance is a Seattle-based 501(c)(3) non-profit performance dance company formed in 2003 by Christina Johnson, Anna Percival, and Jaime Waliczek. The company premiered its first works in June of that year and has since gone on to produce 5 successful full-length shows, two cabarets, and numerous guest performances.
  </p>

  <p>
  Christina’s and Jaime’s unique backgrounds and styles of dance provided Seattle audiences with an eclectic mix of choreography and dancing until Christina’s departure for New York in 2005. Jaime joined Christina in New York for the 2007 season before returning to Seattle to choreograph for several more years. Jerboa Dance had been on hiatus from 2012-2015, and is excited to be preparing the 2017 season after a successful return in 2016.
  </p>

  <p>
  Jerboa Dance strives to offer other local choreographers and dancers opportunities to show their works. Most of all, the company hopes to use their knowledge and passion for dance to educate and entertain the community.
  </p>
</section>

<section class="jaimeWaliczek">
  <Bio person={jaimeWaliczek} />
</section>

<section class="gallery">
  {#each companyMembers as companyMember}
    <article>
      <Bio person={companyMember} />
    </article>
  {/each}
</section>

<a href="about/former">Former Company Members</a>