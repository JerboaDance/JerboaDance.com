<script>
  import { slide } from 'svelte/transition';
  import { performanceList, activePerformance } from '../data/performances.js';

  let showPerformancesSubmenu = false;
  function handleMouseenterPerformanceSubmenu() { showPerformancesSubmenu = true; }
  function handleMouseleavePerformanceSubmenu() { showPerformancesSubmenu = false; }

</script>

<style>
  * {
    padding: 0;
    margin: 0;
    background-color: #a553ba;
  }

  nav {
    text-align: center;
    width: 100%;
  }

  li {
    list-style: none;
  }

  a {
    color: #DDD;
    text-decoration: none;
  }

  li:hover > a {
    color: black;
  }

  /* Horizontal main menu */
  .menu {
    padding: 1em;
  }

  .menu > li {
    display: inline-block;
    padding: 0 0.7em;
    position: relative;
    white-space: nowrap;
  }

  /* Vertical submenu */
  .submenu > ul{
    text-align: left;
    position: absolute;
    z-index: 10;
    padding: 1em 1em;
    margin: 0em -1em;
  }

  .submenu li {
    display: block;
    padding: .3em 0em;
  }
</style>

<nav>
  <ul class="menu">
    <li><a href="index.html">HOME</a></li>
    <li><a href="about.html">ABOUT</a></li>
    <li
      class="submenu" 
      on:mouseenter={handleMouseenterPerformanceSubmenu}
      on:mouseleave={handleMouseleavePerformanceSubmenu}
      >
      <a href="performances.html">PERFORMANCES</a>
      {#if showPerformancesSubmenu}
        <ul transition:slide>
          {#each performanceList as performance}
            <li><a href="{performance.id}.html">{@html performance.name}</a></li>
          {/each}
        </ul>
      {/if}
    </li>
    <li>
      {#if activePerformance}
        <a href="{activePerformance.id}.html">{@html activePerformance.name}</a>
      {:else}
        <a href="donations.html">DONATIONS</a>
      {/if}
    </li>
  </ul>
</nav>