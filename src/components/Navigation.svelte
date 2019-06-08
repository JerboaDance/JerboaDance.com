<script>
  import Hoverable from './Hoverable.svelte';
  import { slide } from 'svelte/transition';
  import { performanceData, activePerformance } from '../routes/performances/_performances.js';
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
  .submenu ul{
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
    <li><a href=".">HOME</a></li>
    <li><a href="about">ABOUT</a></li>
    <li class="submenu" >
      <Hoverable let:hovering={showPerformancesSubmenu}>
        <a href="performances">PERFORMANCES</a>
        {#if showPerformancesSubmenu}
          <ul transition:slide>
            {#each performanceData as performance}
              <li><a href="performances/{performance.id}">{@html performance.name}</a></li>
            {/each}
          </ul>
        {/if}
      </Hoverable>
    </li>
    <li>
      {#if activePerformance}
        <a href="performances/{activePerformance.id}">{@html activePerformance.name}</a>
      {:else}
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=7G65H8ZWEKR74" target="_blank" rel="nofollow">DONATE</a>
      {/if}
    </li>
  </ul>
</nav>