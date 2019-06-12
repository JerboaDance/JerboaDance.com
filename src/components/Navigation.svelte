<script>
  import { slide } from 'svelte/transition';
  import { activeWork } from '../data/_works.js';


  import Menu from './Menu.svelte';
  import Submenu from './SubMenu.svelte';
  import MenuItem from './MenuItem.svelte';
</script>

<Menu>
  <Submenu uri="about" text="About">
    <MenuItem uri="about" text="Company" />
    <MenuItem uri="about/dancers" text="Dancers"/>
    <MenuItem uri="about/director" text="Artistic Director" />
    <MenuItem uri="about/auditions" text="Auditions"/>
    <MenuItem uri="about/contact" text="Contact" />
  </Submenu>

  {#if activeWork}
    <Submenu uri="works" text="Works">
      <MenuItem uri="works/{activeWork.id}" text="Upcoming shows" />
      <!-- 2018/2019 Season? -->
      <MenuItem uri="works" text="All shows" />
      <!-- Festivals? -->
    </Submenu>

    <MenuItem uri="works/{activeWork.id}" text="Tickets" />
  {:else}
    <MenuItem uri="works" text="Works" />
  {/if}

  <Submenu uri="book" text="Book">
    <MenuItem uri="book/event" text="Private events" />
    <MenuItem uri="book/choreography" text="Custom choreography" />
    <MenuItem uri="book/lesson" text="Private lesson"/>
  </Submenu>

  <MenuItem uri="support" text="Support" />
  <!-- Contact page? -->
</Menu>