<script setup>
    import Profile2 from '../components/Profile2.vue';
    import Personal2 from '../components/Personal2.vue';
</script>

<template>
    <div class="about">
        <Personal2 />
        <Profile2 />
    </div>
</template>

<style>
    /* header */
    .about {
        line-height: 1.5;
        max-height: 100vh;
        gap: 10vh;
        background: linear-gradient(#393e46, #181818);
        padding: 20vh 20vw 15vh 20vw;
    }


    @media (min-width: 1024px) {
        .about {
            display: flex;
            place-items: center;
            /* padding-right: calc(var(--section-gap) / 10); */

        }
    }
</style>