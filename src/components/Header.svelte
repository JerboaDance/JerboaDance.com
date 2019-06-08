<script>
  import Navigation from './Navigation.svelte'
</script>

<style>
  * {
    padding: 0;
   	margin: 0;
  }

  header {
   text-align: center;
  }

  .title {
    padding: 1em 0em;
  }

  .title a {
    text-decoration: none;
    color: #333;
  }

  .title h1 {
    font-size: 3em;
    font-family: "Oswald";
    font-weight: bold;
  }

  .title h2 {
    font-family: "Open Sans";
    font-size: 1em;
  }
</style>

<header>
  <div class="title">
    <a href="index.html">
      <h1>JERBOA DANCE</h1>
      <h2>MODERN. ATHLETIC. POWERFUL.</h2>
    </a>
  </div>
  <Navigation />
</header>