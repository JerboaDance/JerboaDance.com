<script>
  import { slide } from 'svelte/transition';
  import { activePerformance } from '../data/_performances.js';


  import Menu from './Menu.svelte';
  import Submenu from './SubMenu.svelte';
  import MenuItem from './MenuItem.svelte';
</script>

<Menu>
  <MenuItem uri="." text="Home" />
  <Submenu uri="about" text="About">
    <MenuItem uri="about" text="Company" />
    <MenuItem uri="about/dancers" text="Dancers"/>
    <MenuItem uri="about/director" text="Artistic Director" />
    <!-- Auditions? -->
    <!-- Contact page? -->
  </Submenu>

  {#if activePerformance}
    <Submenu uri="works" text="Works">
      <MenuItem uri="works/{activePerformance.id}" text="Upcoming show" />
      <!-- 2018/2019 Season? -->
      <MenuItem uri="works" text="All shows" />
      <!-- Festivals? -->
    </Submenu>

    <MenuItem uri="works/{activePerformance.id}" text="Tickets" />
  {:else}
    <MenuItem uri="works" text="Works" />
  {/if}

  <MenuItem uri="donate" text="Support" />
  <!-- Contact page? -->
</Menu>