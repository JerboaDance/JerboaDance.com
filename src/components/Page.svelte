<script>
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'
  export let title;
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
    margin: 0 auto;
    height: 100%;
    max-width: 900px;
    background-color: white;
    display: flex;
    flex-direction: column;
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
  <title>Jerboa Dance{title ? ` - ${title}` : ''}</title>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans|Oswald&display=swap" rel="stylesheet">
</svelte:head>

<Header class="header"/>
<main class="wrapper">
  <div class="content">
   <slot />
  </div>
</main>
<Footer class="footer"/>