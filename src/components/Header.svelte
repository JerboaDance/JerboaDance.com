<script>
    import Navigation from '../components/Navigation.svelte';
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    .headerCommon {
        text-align: center;
        width: 100%;
        padding-top: 1em;

    }

    .headerMask {
        visibility: hidden;
    }

    .header {
        position: fixed;
        z-index: 50;
        /* TODO figure out how tom make the transition only apply to this property
          because right now it looks weird when the page resizes */
        background-image: linear-gradient(to bottom right, #7e1f2f, #00000000);
        transition: 1.5s;
    }

    .header:hover {
      background-color: #7e1f2f;
      transition: .2s;
    }

    .title {
        display: inline;
        font-size: 3em;
        font-family: "Oswald";
        font-weight: bold;
    }

    .title a {
        text-decoration: none;
        color: #DDD;
    }
    .headerCommon > :global(nav) {
        display: inline-block;
    }
</style>

<div class="headerMask headerCommon">
    <h1 class="title"><a href=".">JERBOA DANCE</a></h1>
    <Navigation />
</div>
<header class="header headerCommon">
    <h1 class="title"><a href=".">JERBOA DANCE</a></h1>
    <Navigation />
</header>