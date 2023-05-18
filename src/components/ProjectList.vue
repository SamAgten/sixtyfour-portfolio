<script setup>
import VerticalLabel from './VerticalLabel.vue'
import Project from './Project.vue';
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })

function stepEnterHandler({element, index, direction})
{
    console.log('Hello ' + direction);
}
</script>

<template>
    <div id="project-container">
        <VerticalLabel :label="'Projects'" />
        <div style="width:100%">
            <Project :title="'Midnight Protocol'" :img="'MidnightProtocol.jpg'" :steam="'https://store.steampowered.com/widget/1162700/'">
                <p>Hack into servers, beat security and steal encrypted data in a world where your identity is just another network address.</p>
                <p>Midnight Protocol is a tactical narrative-driven RPG in a future coming to grips with unprecedented digital challenges. Make your way through an engaging story with the help of an accessible command-line interface and a host of hacking software.</p>
                <p>Midnight Protocol is a co-production between <a>LuGus Studios</a> and Sixtyfour in support by publisher <a>Iceberg Interactive.</a></p>
            </Project>
            <Project :title="'Stip'" :img="'Stip2.png'">
                <p class="step">Stip is an upcoming puzzle horror game.</p>
                <p class="step">Stip is a fun and relaxing puzzle game. Solve puzzels, by searching for the next number in the sequence. Nothing is wrong here. Ignore that buzzing in your ear and that itch behind your eyes. All you need to do is find the next number. Everything is going to be fine.</p>
                <p class="step">Stip is currently in development.</p>
            </Project>
        </div>
    </div>    

</template>

 
<style scoped>
#project-container
{
    display: flex;
    height: 100%;
    width: 100%;
    margin-top:100px;
    position: relative;
}
</style>