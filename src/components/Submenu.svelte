<script>
    import { slide } from 'svelte/transition';
    
    export let uri;
    export let text;
    
	let showSubmenu;

	function mouseEnter() { showSubmenu = true; }
	function mouseLeave() { showSubmenu = false; }
</script>

<li on:mouseleave={mouseLeave}>

    <div on:mouseenter={mouseEnter}>
        <a href={uri}>{text}</a>
    </div>

    {#if showSubmenu}
        <ul class="submenu" transition:slide>
            <slot />
        </ul>
    {/if}

</li>