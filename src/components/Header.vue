<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
</script>

<template>
   <header>
    <div id="header-main">
      <div id="logo-container">
        <img alt="Logo" class="logo" src="../assets/images/Logo-White@4x.png"/>
      </div>
      <div id="header-text">
        <h1>GAMES THAT DEFY EXPECTATION</h1>
        <p>An international award-winning studio that creates games with a focus on innovative interaction, visual polish and a whallop of board-game inspired design.</p>
        <h1>GAME DEV FOR HIRE</h1>
        <p>We excel at the seasoning!</p>
      </div>
    </div>
    <div id="header-crumbs">
      <a>PROJECTS</a>
      <span>/</span>
      <a>CONTACT</a>
    
    </div>
    <div id="header-nav">
      <div class="header-line" />
      <div id="header-nav-center">
        <img alt="Cube" src="../assets/images/cube@4x.png" width="50"/>
        <img alt="Arrow" src="../assets/images/arrow@4x.png" width="50"/>
      </div>
      <div class="header-line" />
    </div>
  </header>
</template>

<style scoped>

header {
  width: 100%;
  background-image: linear-gradient(var(--color-header-main), var(--color-header-main), var(--color-header-main), var(--color-header-sec));
  line-height: 1.5;
  padding-top: 80px;
}

#header-main
{
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo {
  max-width: var(--header-content-width);
  widows: auto;
  height: auto;
  right: var(--header-center-offset);
}


#header-text
{
  height: 100%;
  width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

#header-text h1
{
  font-family: museo-sans, sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: xx-large;
  color: var(--color-header-text-main);
}

#header-text p:nth-child(2)
{
  margin-bottom: 100px;
}

#header-text p
{
  color: var(--color-header-text);
  font-family: museo-sans, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: x-large;
}


#header-crumbs
{
    height: 0px;
    visibility: hidden;
}

#header-nav
{
  widows: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header-line
{
  height: 1px;
  flex-grow: 1;
  background-color: var(--color-header-line);
}

#header-nav-center
{
  width:  calc(2* var(--header-center-offset));
}

#header-nav-center img
{
  display: block;
  margin: auto;
}



@media (min-width: 1200px) {
header
{
  padding-top: 150px;
}

#header-main
{
    flex-direction: row;
    height: 700px;
}

#header-text
{
    
  margin-left: var(--header-center-offset);
}

.logo {
  
  position: absolute;
  top: 100px;
}

#logo-container
{
  height: 100%;
  width: 50%;
  position: relative;
}

#header-crumbs
{
    margin: auto;
    height: 100px;
    display: flex;
    visibility: visible;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}

#header-crumbs a
{
  display: block;
  color: var(--color-header-text);
  font-family: museo-sans, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: medium;
}

#header-crumbs a:nth-child(1)
{
  text-align: right;
}

#header-crumbs a:nth-child(2)
{
  text-align: left;
}

#header-crumbs span
{
  color: var(--color-header-text);
  display: block;
  width: 100px;
  text-align: center;
}


}
</style>
