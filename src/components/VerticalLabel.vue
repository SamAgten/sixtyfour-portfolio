<script setup>
defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="label-container">
        <h1> {{ label.toUpperCase() }}</h1>
    </div>
</template>

 
<style scoped>
.label-container
{
    width: 150px;
}

.label-container h1
{
    background-color: var(--color-header-main);
    text-orientation: upright;
    writing-mode: vertical-lr;
    color: var(--color-header-text-main);
    margin: 0 auto;
}
</style>