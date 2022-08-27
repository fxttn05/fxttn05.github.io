<script setup>
    import Wonderful from '../components/Wonderful.vue';
    import Dental from '../components/Dental.vue';
    import Sarpras from '../components/Sarpras.vue';
    import Web1 from '../components/Web1.vue';
    import Web2 from '../components/Web2.vue';
    import Ecommerce from '../components/Ecommerce.vue';
</script>

<template>
    <div class="personal">
        <div class="project-experience">
            <h3>Project Experience</h3>
            <hr class="title1">

            <div class="projectexperience">

                <h4>Bootstrap</h4>
                <div class="bootstrap">
                    <div class="cardn wonderful">
                        <Wonderful />
                        <h5>Wonderful Indonesia Website</h5>
                    </div>
                    <div class="cardn dental">
                        <Dental />
                        <h5>Dental Care Landing Page Website</h5>
                    </div>
                </div>

                <h4>PHP</h4>
                <div class="php">
                    <div class="cardn sarpras">
                        <Sarpras />
                        <h5>Website Sarpras Sekolah</h5>
                    </div>

                </div>

                <h4>Laravel</h4>
                <div class="laravel">
                    <div class="cardn agenda">
                        <Web1 />
                        <h5>Website Agenda Guru</h5>
                    </div>
                    <div class="cardn sarpras">
                        <Web2 />
                        <h5>Website Sapras Sekolah</h5>
                    </div>
                </div>

                <h4>Wordpress</h4>
                <div class="laravel">
                    <div class="cardn agenda">
                        <Ecommerce />
                        <h5>E-Commerce Website use Wordpress</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    /* card */

    .cardn {
        background-color: #393e46;
        backdrop-filter: blur(1px);
        border-radius: 10px;
        padding: 5px;
    }

    .personal {
        line-height: 0.5rem;
        padding: 25vh 10vw 5vh 10vw;
    }

    /* isi */

    .profile,
    .bootstrap,
    .php,
    .laravel,
    .education,
    .language {
        margin-bottom: 30px;
    }

    .judul1{
        text-align: left;
        margin: -10;
    }
    
    .judul2{
        text-align: left;
    }

    .personal h3 {
        color: #3b8bd6;
        margin-left: 50px;
    }

    .personal h4 {
        margin-top: 20px;
        margin-left: 50px;
    }

    .education h5 {
        text-align: left;
    }
    
    .education h6 {
        text-align: left;
    }

    .projectexperience h5 {
        text-align: center;
        margin-top: 20px;
    }

    .projectexperience h6 {
        margin-left: 50px;
    }

    .language h6 {
        margin-left: 50px;
    }

    .profile h6 {
        margin-left: 50px;

    }

    /* flex setting */

    .bootstrap {
        display: flex;
        gap: 10vh;
        margin: 2vw 10vh;
        justify-content: space-evenly;
    }

    .php {
        display: flex;
        gap: 10vh;
        margin: 2vw 10vh;
        justify-content: space-evenly;
    }

    .laravel {
        display: flex;
        gap: 10vh;
        margin: 2vw 10vh;
        justify-content: space-evenly;
    }

    .sekolah1 {
        display: flex;
        gap: 5vh;
        padding: 5vh 2vw;
    }
</style>