<script setup>
import Header from './components/Header.vue'
import ProjectList from './components/ProjectList.vue'
import ContactForm from './components/ContactForm.vue';
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
