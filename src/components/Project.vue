<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  steam: {
    type: String,
    required: false
  },
  right: {
    type: Boolean,
    required: false
  }
})



</script>

<template>
    <div class="step">
        <div class="project">
        <div class="project-line-decoration">
            <img alt="Cube-dark" src="../assets/images/cube_dark@4x.png" class="cube step"/>
            <div class="project-line"></div>
        </div>
        <div class="project-content">
            <h2 class="step"> {{ title.toUpperCase() }}</h2>
            <img :alt=title :src="`src/assets/images/${img}`" />
            <slot class="step"></slot>
            <p v-if="steam" id="steam-link"><iframe  frameborder="0" height="190" :src="steam" width="730"></iframe></p>
        </div>
        
        </div>

        <div v-if="steam" id="steam-link-mobile-container">
            <p v-if="steam" id="steam-link-mobile"><iframe  frameborder="0" height="190" src="https://store.steampowered.com/widget/1162700/" width="615"></iframe></p>
        </div>

        </div>
    
</template>


<style scoped>

.cube
{
  transition: all 0.5s ease-out;
  transform: rotate(-90deg);
}

.cube.on-enter
{
 transform: rotate(0deg);
}

h2
{
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-out;
}

h2.on-enter
{
  opacity: 1;
  transform: translateY(0px);
}

slot
{
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-out;
}
slot.on-enter
{
  opacity: 1;
  transform: translateY(0px);
}

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

.project-line-decoration:nth-child(1)
{
    margin-left: 50px;
}

.project-line-decoration:nth-child(3)
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

.project:nth-child(3)
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