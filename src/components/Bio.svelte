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

    .inlineContent {
        cursor: pointer;
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
        left: 20%;
        top: 25%;
        width: 60%;
        height: 50%;
        padding: 2em;
        display: grid;
        grid-gap: 1em;
        align-items: center;
    }

    .modalContent * {
        min-height: 0;
        max-height: 100%;        
    }

    .modalPhotograph {
        object-fit: contain;
        width: 100%;
        display: inline-block;
        grid-column: 1 / span 1;
        grid-row: 1 / span 2;
    }

    .modalTitle {
        grid-column: 2 / span 1;
        grid-row: 1 / span 1;
        align-self: end;
    }

    .modalBio {
        overflow-y: auto;
        grid-row: 2 / span 1;
        align-self: start;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }

    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

</style>

<div class="inlineContent" on:click={handleClick}>
    <h3>{person.name}</h3>
    <Photograph {src} {alt} {...person.photoCredit} />
</div>

{#if !detailsHidden}
<div class="modalBackground" on:click={handleClick}>
    <div class="modalContent">
        <img class="modalPhotograph" {src} {alt}/>
        <h2 class="modalTitle">{person.name}</h2>
        <div class="modalBio">{@html person.bio}</div>
    </div>
</div>
{/if}


