<script setup>
import VerticalLabel from './VerticalLabel.vue'
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
</script>

<template>
    <div id="project-container">
        <VerticalLabel :label="'Projects'" />
        <div style="width:100%">
            <div class="project">
                <div class="project-line-decoration">
                    <img alt="Cube-dark" src="../assets/images/cube_dark@4x.png"/>
                    <div class="project-line"></div>
                </div>
                <div class="project-content">
                    <h2>MIDNIGHT PROTOCOL</h2>
                    <img alt="Midnight Protocol" src="../assets/images/MidnightProtocol.jpg"/>
                    <p class="one-column">Hack into servers, beat security and steal encrypted data in a world where your identity is just another network address.</p>
                    <p class="one-column">Midnight Protocol is a tactical narrative-driven RPG in a future coming to grips with unprecedented digital challenges. Make your way through an engaging story with the help of an accessible command-line interface and a host of hacking software.</p>
                    <p>Midnight Protocol is a co-production between <a>LuGus Studios</a> and Sixtyfour in support by publisher <a>Iceberg Interactive.</a></p>
                    <p id="steam-link"><iframe  frameborder="0" height="190" src="https://store.steampowered.com/widget/1162700/" width="730"></iframe></p>
                </div>
                
            </div>

            <div id="steam-link-mobile-container">
                <p id="steam-link-mobile"><iframe  frameborder="0" height="190" src="https://store.steampowered.com/widget/1162700/" width="615"></iframe></p>
            </div>

            <div class="project">
                
                <div class="project-content">
                    <h2>STIP</h2>
                    <img alt="Stip" src="../assets/images/Stip2.png"/>
                    <p class="one-column">Stip is an upcoming puzzle horror game.</p>
                    <p class="one-column">Stip is a fun and relaxing puzzle game. Solve puzzels, by searching for the next number in the sequence. Nothing is wrong here. Ignore that buzzing in your ear and that itch behind your eyes. All you need to do is find the next number. Everything is going to be fine.</p>
                    <p>Stip is currently in development.</p>
                </div>
                <div class="project-line-decoration">
                    <img alt="Cube-dark" src="../assets/images/cube_dark@4x.png"/>
                    <div class="project-line"></div>
                </div>
            </div>

        </div>
    </div>    

</template>

 
<style scoped>

.project
{
    display: flex;
    margin-right: 50px;
    margin-bottom: 150px;
}

.project-line-decoration
{
    margin-top: 10px;
    width: var(--cube-size);
    display: flex;
    flex-direction: column;
}

.project-line-decoration:nth-child(odd)
{
    margin-left: 50px;
}

.project-line-decoration:nth-child(even)
{
    margin-right: 50px;
}

.project-line-decoration img
{
    width: var(--cube-size);
}

.project-line
{
    margin: 0 auto;
    width: 1px;
    flex-grow: 1;
    background-color: black;
}

.project-content
{
    margin-left: 50px;
    margin-right:50px;
    flex-grow: 1;
    position: relative;
}

.project-content p
{
    margin: 20px
}



.project-content img
{
    width: 100%;
    -webkit-mask-image: url('../assets/images/mask@4x.png');
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;

    mask-image: url('../assets/images/mask@4x.png');
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: 100%;
    z-index: -1;
}

.project:nth-child(even) .project-content img
{
    left: -75px;

}

.project:nth-child(even)
{
    text-align: right;
}

.project:nth-child(even) .project-content
{
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-left: 0px;
    margin-right: 50px;
}


#project-container
{
    display: flex;
    height: 100%;
    width: 100%;
    margin-top:100px;
    position: relative;
}


#steam-link
{
    margin-top: 50px;
    margin-bottom: 0px;
    display: none;
}
#steam-link-mobile-container
{
    display: none;    
}

@media (min-width: 700px) {
    #steam-link-mobile-container
    {
        display: block;
        margin-top: -110px;
        margin-bottom: 50px;
        margin-left: 70px;
        display: flex;

    }
}

@media (min-width: 900px) {
    #steam-link
    {
        display: block;
    }

    #steam-link-mobile-container
    {
        display: none;
    }
}

@media (min-width: 1200px) {
    

    .project-line-decoration:nth-child(odd)
    {
        margin-left: 0px;
    }

    .project-line-decoration:nth-child(even)
    {
        margin-right: 0px;
    }
    
}
</style>