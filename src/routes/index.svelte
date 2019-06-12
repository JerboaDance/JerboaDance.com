<script>
    function handleLoad() {
        let mainVideo = document.getElementById("mainVideo");
        mainVideo.muted = true;
        mainVideo.play();
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }
    
    .media {
        width: 100%;
        object-fit: cover;
    }

    .aboutSection {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1em 2em;
        padding: 2em 0em;
    }
</style>

<svelte:window on:load={handleLoad} />

<svelte:head>
    <title>Jerboa Dance</title>
</svelte:head>

<main>
    <section class="media">
        <video id="mainVideo" class="media">
            <source src="CabaretTrailer.mp4" type="video/mp4" autoplay muted loop/>
        </video>
    </section>

    <section class="narrowSection">
        <h1>What is Jerboa Dance about</h1>
        <div class="aboutSection">
            <h2>Something</h2>
            <h2>More something</h2>
            <h2>Extra something</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Blandit aliquam etiam erat velit. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Scelerisque viverra mauris in aliquam sem fringilla. Quisque sagittis purus sit amet. Quis varius quam quisque id diam. Eget aliquet nibh praesent tristique. Magna eget est lorem ipsum. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. </p>
            <p>Sit amet est placerat in egestas erat imperdiet sed euismod. Enim diam vulputate ut pharetra sit amet. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Convallis convallis tellus id interdum velit. Diam vel quam elementum pulvinar etiam non quam. Augue mauris augue neque gravida. Vitae tempus quam pellentesque nec nam aliquam. Aliquam faucibus purus in massa tempor. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. In hendrerit gravida rutrum quisque non tellus. Ultrices gravida dictum fusce ut placerat orci. Elementum integer enim neque volutpat ac tincidunt vitae semper. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Neque aliquam vestibulum morbi blandit. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor.</p>
            <p>Tellus id interdum velit laoreet id donec ultrices tincidunt. Est placerat in egestas erat imperdiet sed. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Tellus integer feugiat scelerisque varius morbi. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Suspendisse potenti nullam ac tortor. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Morbi non arcu risus quis varius quam. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Fermentum dui faucibus in ornare quam viverra. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Congue quisque egestas diam in arcu cursus euismod. Gravida dictum fusce ut placerat. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Ante in nibh mauris cursus mattis molestie a. Auctor augue mauris augue neque gravida.</p>
        </div>
    </section>

    <section class="media">
        <img class="media" src="works/AnimalNature/header.jpg" alt="Photograph of company members dancing" />
    </section>
</main>