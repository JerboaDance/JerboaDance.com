<script>
	import { fade } from 'svelte/transition';
    export let showModal = false;
    export function show() { showModal = true; }
    export function hide() { showModal = false; }

    function handleBackgroundClick(event) {
        showModal = false;
    }

</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    .modalBackground {
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1000;
        display: block;
        position: fixed; /* Stay in place */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>

{#if showModal}
<div class="modalBackground" transition:fade on:click={handleBackgroundClick}>
    <slot />
</div>
{/if}


