<script setup>
    import Personal from '../components/Personal.vue';
    import profile from '../components/profile.vue';
    import Wonderful from '../components/Wonderful.vue';
    import Dental from '../components/Dental.vue';
    import Sarpras from '../components/Sarpras.vue';
    import Web1 from '../components/Web1.vue';
    import Web2 from '../components/Web2.vue';
    import LogoTB from '../components/LogoTB.vue';
    import LogoBento from '../components/LogoBento.vue';
    import Ecommerce from '../components/Ecommerce.vue';
</script>

<template>
    <div>
        <div class="atas">
            <profile />
            <Personal />
        </div>

        <div class="personal">

            <div class="profile">
                <h3>About Me</h3>
                <hr class="title1">
                <h6>My name is Mohammad Fattan Hibrizi. My nickname is Fattan. I'm from Depok city, West Java. I am a
                    fresh graduate from SMK (Vocational High School) Taruna Bhakti Depok. Interested to working in the
                    IT field for the position of Web Developer with several programming language skills </h6>
            </div>

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

            <div class="education">
                <h3>Education</h3>
                <hr class="title1">
                <div class="pendidikan">
                    <div class="cardn sekolah1">
                        <div class="pict">
                            <LogoTB />
                        </div>
                        <div class="desc">
                            <h5 class="judul1">SMK Taruna Bhakti</h5>
                            <h6 class="judul2">Computer Engineering</h6>
                            <p>2020 - Now</p>
                        </div>
                    </div>

                    <div class="cardn sekolah1">
                        <div class="pict">
                            <LogoBento />
                        </div>
                        <div class="desc">
                            <h5 class="judul1">SMP Negeri 3 Depok</h5>
                            <h6 class="judul2">Regular</h6>
                            <p>2017 - 2020</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="language">
                <h3>Language</h3>
                <hr class="title1">
                <h6>Indonesia</h6>
                <h6>English</h6>
            </div>
        </div>
    </div>

</template>

<style>
    /* header */
    .atas {
        line-height: 1.5;
        max-height: 100vh;
        gap: 10vh;
        background: linear-gradient(#393e46, #181818);
        padding: 20vh 20vw 15vh 20vw;
    }


    @media (min-width: 1024px) {
        .atas {
            display: flex;
            place-items: center;
            /* padding-right: calc(var(--section-gap) / 10); */

        }
    }

    /* card */

    .cardn {
        background-color: #393e46;
        backdrop-filter: blur(1px);
        border-radius: 10px;
        padding: 5px;
    }

    /* isi */

    .title1 {
        width: 10vw;
        border-style: inset;
        border-width: 2px;
        border-color: #3b8bd6;
        margin: 20px;
        margin-left: 50px;

    }

    .personal {
        line-height: 0.5rem;
        padding: 15vh 10vw 5vh 10vw;
    }


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

    .pendidikan {
        display: flex;
        gap: 10vh;
        margin: 2vw 10vh;
        justify-content: space-evenly;
    }

    /* .projectexperience {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    } */

</style> 