<script>
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    /* Styles for all menu items */
    .menu :global(li) {
        list-style: none;
    }

    .menu :global(a) {
        text-transform: uppercase; 
        color: #DDD;
        text-decoration: none;
    }

    .menu :global(li:hover > a) {
        color: black;
    }
    
    /* Main menu layout */
    .menu {
        padding: 1em;
    }

    .menu :global(li) {
        display: inline-block;
        padding: 0 0.7em;
        position: relative;
        white-space: nowrap;
    }

    /* Submenu layout */
    .menu :global(.submenu) {
        text-align: left;
        position: absolute;
        z-index: 10;
        padding: 1em 1em;
        margin: 0em -1em;
        background-color: #7e1f2f;
    }
    
    .menu :global(.submenu li) {
        display: block;
        padding: .3em 0em;
    }
</style>

<nav>
    <ul class="menu">
        <slot />
    </ul>
</nav>