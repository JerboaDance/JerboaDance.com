<script>
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  export let segment;
</script>

<style>
  * {
    padding: 0;
   	margin: 0;
  }

  :global(html){
    height: 100%;
    background-color: #555555;
  }

  :global(body){
    padding: 0;
    margin: 0;
    height: 100%;
    color: #BBB;
  }

  :global(#sapper) {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0 auto;
    min-height: 100%;
  }

  #wrapper {
    flex: 1 0 auto;
  }

  :global(main) .narrowSection {
    padding: 2em 4em;
  }

  :global(#sapper) > footer {
    flex-shrink: 0;
  }

</style>

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans|Oswald&display=swap" rel="stylesheet">
</svelte:head>

<Header/>
<div id="wrapper">
  <slot />
</div>
<Footer/>