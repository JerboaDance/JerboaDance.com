<script>
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    nav {
        text-align: center;
        width: 100%;
        background-color: #a553ba;
    }

    /* Styles for all menu items */
    :global(.menu li) {
        list-style: none;
    }

    :global(.menu a) {
        text-transform: uppercase; 
        color: #DDD;
        text-decoration: none;
    }

    :global(.menu li:hover > a) {
        color: black;
    }
    
    /* Main menu layout */
    .menu {
        padding: 1em;
    }

    :global(.menu > li) {
        display: inline-block;
        padding: 0 0.7em;
        position: relative;
        white-space: nowrap;
    }

    /* Submenu layout */
    :global(.menu .submenu) {
        text-align: left;
        position: absolute;
        z-index: 10;
        padding: 1em 1em;
        margin: 0em -1em;
        background-color: #a553ba;
    }

    :global(.menu .submenu li) {
        display: block;
        padding: .3em 0em;
    }
</style>

<nav>
    <ul class="menu">
        <slot />
    </ul>
</nav>