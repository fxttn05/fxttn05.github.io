<script>
     export default {
        name: "Footer",
    };
</script>

<template>
    <div class="footer">
        <h5>Mohammad Fattan Hibrizi</h5>
        <p>fattanhibrizi@gmail.com | +62 812 1352 1066</p>
        <hr>
        <div class="f-icon">

            <form action="mailto:fattanhibrizi@gmail.com">
                <button type="submit" class="btn btn-light">
                    <i class="fa-brands fa-google"></i>
                </button>
            </form>

            <form action="https://www.instagram.com/fattanhbrz_/">
                <button type="submit" class="btn btn-light">
                    <i class="fa-brands fa-instagram"></i>
                </button>
            </form>

            <form action="https://twitter.com/fattanhbrz">
                <button type="submit" class="btn btn-light">
                    <i class="fa-brands fa-twitter"></i>
                </button>
            </form>

            <form action="https://www.linkedin.com/in/fattan-h-91203b242/">
                <button type="submit" class="btn btn-light">
                    <i class="fa-brands fa-linkedin-in"></i>
                </button>
            </form>

            <form action="https://github.com/Fattan2005">
                <button type="submit" class="btn btn-light">
                    <i class="fa-brands fa-github"></i>
                </button>
            </form>

        </div>
        <hr>
    </div>
</template>


<style>
    .footer {
        background-color: #0062bd;
        text-align: center;
        color: white;
        padding-top: 15px;
        padding-bottom: 15px;
        line-height: 10px;
    }

    .footer hr {
        margin: 15px 100px;
    }

    .f-icon {
        display: flex;
        justify-content: center;
        gap: 15px;
        font-size: 20px;
    }

    .f-icon button{
        border-radius: 50%;
        width: 40px;
    }
</style>