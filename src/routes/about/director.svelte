<script context="module">
	export function preload({ params, query }) {
        return this.fetch(`about/director.json`).then(r => r.json()).then(data => {
            return data;
        });
	}
</script>

<script>
    import Photograph from '../../components/Photograph.svelte';

    export let jaimeWaliczek;

    const alt = "Photo of Jaime Waliczek, Artistic Director";
    const title = "Artistic Director";
</script>

<svelte:head>
    <title>Jerboa Dance - {title}</title>
</svelte:head>

<main>
    <h1>{title}</h1>

    <h3>{jaimeWaliczek.name}</h3>
    <Photograph {alt} photograph={jaimeWaliczek.headshot} />
    {@html jaimeWaliczek.bio}
</main>