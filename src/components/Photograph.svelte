<script>
import { fade } from 'svelte/transition';
import Hoverable from './Hoverable.svelte';
export let alt;
export let photograph;

let photoCredit = null;

$: photographer = photograph.photographer;
$: copyright = photograph.copyright;
$: src = photograph.uri;
$: if (photographer && photographer.name) { photoCredit = `Photo Credit: ${photographer.name}`;}

function stopLinkPropagation(event) {
  event.stopPropagation();
  return false;
}
</script>

<style>
  * {
    padding: 0;
   	margin: 0;
  }

  .imageWrapper {
    width: 100%;
    height: 100%;
  }

  .imageWrapper img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>

<Hoverable let:hovering={hovering}>
  <figure class="imageWrapper">
    <img {src} {alt} />
    {#if photoCredit && hovering}
      <figcaption transition:fade>

        {#if photographer.website}
          <a href={photographer.website} target="_blank" on:click={stopLinkPropagation}>
            {photoCredit}
          </a>
        {:else}
          <span>{photoCredit}</span>
        {/if}

        {#if copyright}
          <span>. {copyright}.</span>
        {/if} 

      </figcaption>
    {/if}
  </figure>
</Hoverable>