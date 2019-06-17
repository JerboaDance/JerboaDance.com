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

  :root {
    --accent-color-1: #7e1f2f;
    --background-color-1: #555555;
    --text-color-1: #BBBBBB;
    --link-color-1: #DDDDDD;
    --link-color-1-hover: #000000;
  }

  :global(html){
    height: 100%;
    background-color: var(--background-color-1);
  }

  :global(body){
    padding: 0;
    margin: 0;
    height: 100%;
    color: var(--text-color-1);
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