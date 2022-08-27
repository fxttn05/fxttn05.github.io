<script>
    export default {
        name: "Menu",
    };
</script>

<template>
    <div class="header">
        <div class="logo">
            <h1>Fattan Hibrizi</h1>
        </div>
        <div class="menu">
            <a href="/" class="floatingMenu">
                <p>Home</p>
            </a>

            <a href="/about" class="floatingMenu">
                <p>About</p>
            </a>

            <a href="/project" class="floatingMenu">
                <p>Project</p>
            </a>

        </div>
    </div>
</template>

<style>

.header{
    position: fixed;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 60vw;
    margin: 30px 20vw 0 20vw;
    gap: 30px;
    background-color: rgba(201, 201, 201, 0.461);
    backdrop-filter: blur(10px);
    border-radius: 5px;

}

.header:hover{
    cursor: pointer;
    
}

    .logo h1{
        font-size: 30px;
        align-items: center;
        color: white;
        padding: 10px 0 0 0;
    }
    .menu {
        display: flex;
        flex-direction: row;
        gap: 30px;
        text-align: center;
        justify-content: center;
        padding: 0 50px;
    }

    .menu a {
        font-size: 20px;
        padding: 5px 15px;
	    color: whitesmoke;
	    position: relative;
        padding: 10px 0 0 0;
    }

    .menu a:hover{
        color: floralwhite;

        
    }



    
</style>