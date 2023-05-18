<script setup>
import Header from './components/Header.vue'
import ProjectList from './components/ProjectList.vue'
import ContactForm from './components/ContactForm.vue'
import scrollama from 'scrollama';
import { onBeforeUnmount, onMounted } from 'vue';

const scroller = scrollama();

onMounted(() => {
  console.log("mounted");

  scroller
  .setup({
    step: '.step',
    offset: 0.6,
  })
  .onStepEnter((response) => {
    console.log(response.direction);
    if(response.direction == 'down')
    {
      console.log('add: ' + response.element.className);
      response.element.classList.add('on-enter');

    }
  })
  .onStepExit((response) => 
  {  
    if(response.direction == 'up')
    {
      console.log('remove: ' + response.element);
      response.element.classList.remove('on-enter');
    }
  });
});

onBeforeUnmount(() => {
  scroller.destroy();
})

</script>

<template>
  <div>
  <Header />
    
  
  <main>
      <ProjectList></ProjectList>
      <ContactForm />
  </main>
  <footer>
    <h3>Sixtyfour</h3>
    <p>Sam Agten</p>
    <p>sam.agten@gmail.com</p>
    <p>BE0736.929.388</p>
    <p id="copyright">Copyright © Sam Agten 2023. All rights reserved.</p>
  </footer>
</div>
</template>

<style scoped>

main
{
  width: 100%;
  margin: auto;
}

.box
{
  width: 100px;
  height: 100px;
}

footer
{
  height: 300px;
  width: 100%;
  background-image: linear-gradient(var(--color-header-sec), var(--color-header-main));
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  color: var(--color-footer-text);
}

footer h3 
{
  color: var(--color-header-text-main)
}

#copyright
{ 
  color: var(--color-footer-copyright);
  margin-top: 50px
}


@media (min-width: 1200px) 
{
  main 
  {
    width: calc(var(--header-center-offset) * 2 + var(--header-content-width) * 2);
  }
}

</style>
