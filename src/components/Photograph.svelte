<script>
import { fade } from 'svelte/transition';
import Hoverable from './Hoverable.svelte';
export let src;
export let alt;
export let photographer;
export let copyright;
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

  details > summary::-webkit-details-marker {
    display:none;
  }
</style>

<Hoverable let:hovering={hovering}>
  <div class="imageWrapper">
    <img {src} {alt} />
  </div>
  {#if photographer && hovering}
    <details transition:fade>
      <summary>Photo Credit: {photographer}</summary>
      {#if copyright}
        <p>{copyright}</p>
      {/if} 
    </details>
  {/if}
</Hoverable>