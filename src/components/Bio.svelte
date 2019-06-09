<script>
  import Photograph from './Photograph.svelte';
  
  export let person;
  export let detailsHidden = true;

  $:src = `company/${person.id}.jpg`;
  $:alt = `Photograph of ${person.name}`;
  
  function handleClick(event) {
    detailsHidden = !detailsHidden;
  }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    .modalBackground {
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1000;
        display: block;
        position: fixed; /* Stay in place */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .modalContent {
        background-color: white;
        z-index: 1001;
        position: fixed;
        left: 15%;
        top: 25%;
        width: 60%;
        height: 50%;
        padding: 2em;
        display: flex;
        flex-direction: row-reverse;
    }

    .modalPhotograph {
        object-fit: contain;
        width: auto;
        max-height: 100%;
    }

    .modalDescription {
        overflow-y: auto;
        height:100%;
        width: auto;
        min-width: 50%;
        padding: 1em;
    }

</style>

<div class="inlineContent" on:click={handleClick}>
    <Photograph {src} {alt} {...person.photoCredit} />
</div>

{#if !detailsHidden}
<div class="modalBackground" on:click={handleClick}>
    <div class="modalContent">
        <div class="modalDescription">
            <h2>{person.name}</h2>
            <p>{@html person.bio}</p>
        </div>
        <img {src} {alt} class="modalPhotograph"/>
    </div>
</div>
{/if}


