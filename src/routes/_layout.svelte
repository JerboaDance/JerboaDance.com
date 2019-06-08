<script>
  import Header from '../components/Header.svelte';
  import Navigation from '../components/Navigation.svelte';
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
  }

  :global(#sapper) {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0 auto;
    height: 100%;
    max-width: 900px;
    background-color: white;
  }

  .wrapper {
    flex: 1 0 auto;
  }

  .content {
    padding: 4em;
  }

  :global(footer) {
    flex-shrink: 0;
  }

</style>

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans|Oswald&display=swap" rel="stylesheet">
</svelte:head>

<Header class="header"/>
<Navigation />
<main class="wrapper">
  <div class="content">
    <div class="contentHeaderImage" />
    <slot />
  </div>
</main>
<Footer class="footer"/>