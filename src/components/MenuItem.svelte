<script>
    export let uri;
    export let text;
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    a {
        text-transform: uppercase; 
    }
</style>

<li>
    <a rel="prefetch" href={uri}>{text}</a>
</li>