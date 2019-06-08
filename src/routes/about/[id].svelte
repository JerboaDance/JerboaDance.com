<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`about/${params.id}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { companyMember: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
  import Photograph from '../../components/Photograph.svelte';
  export let companyMember;
</script>

<svelte:head>
  <title>Jerboa Dance - {companyMember.name}</title>
</svelte:head>

<h1>{companyMember.name}</h1>
<Photograph 
	src="company/{companyMember.id}.jpg" 
	alt="Photograph of {companyMember.name}"
	{...companyMember.photoCredit}
	/>
<article class="bio">
  {@html companyMember.bio}
</article>