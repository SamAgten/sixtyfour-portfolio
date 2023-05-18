<script setup>
import {ref} from 'vue';
// defineProps({
//   label: {
//     type: String,
//     required: true
//   }
// })


</script>

<template>
    <div>
        <div id="contact-header">
            <div class="contact-line" />
            <div id="contact-line-center">
                <img alt="Cube" src="../assets/images/cube_dark@4x.png"/>
            </div>
            <div class="contact-line" />
        </div>
        <div id ="contact-container">
            <div id="contact-form">
                <h2>GET IN TOUCH.</h2>
                <form>
                    <div class="form-group">
                        <input class="form-style" type="text" id="subject" name="subject" placeholder="Subject">
                    </div>
                    <div class="form-group">
                        <textarea class="form-style contact-message" type="text" id="messsage" name="message" placeholder="Your message."></textarea>
                    </div>
                
                    <input type="submit" class="btn" value="Submit">
                </form>
            </div>
        </div>
    </div>
</template>

 
<style scoped>

.form-style {
  padding: 13px 20px;
  padding-left: 55px;
  height: 48px;
  width: 100%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  color: #c4c3ca;
  background-color: var(--color-header-main);
  border: none;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
  margin-bottom: 10px;
  font-family: museo-sans, sans-serif;
    font-weight: 300;
  
}
.form-style:focus,
.form-style:active {
  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
}

.form-group{ 
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
}

.contact-message
{
    height: 150px;
}

#contact-form
{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

textarea
{
    resize: none;
}


#contact-header
{
  widows: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.contact-line
{
  height: 1px;
  flex-grow: 1;
  background-color: black;
}

#contact-line-center
{
  width:  150px;
}

#contact-line-center img
{
    display: block;
    margin: auto;
    width: var(--cube-size);
}

#contact-container
{
    display: flex;
    margin: 0px 50px 50px 50px;
    position: relative;
}

.btn{  
    margin-top: 20px;
  width: 100%;
  border-radius: 4px;
  height: 44px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  background-color: var(--color-contact-button);
  color: white;
}

::placeholder  {
  color: var(--color-placeholder);
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}

:focus::placeholder  {
  opacity: 0;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}

@media (min-width: 1200px) {
#contact-container
    {
        margin: 0px 0px 50px 0px;
    }
}

</style>