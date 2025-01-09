<template>
  <div class="instruction" v-html="formattedTitle"></div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
const formattedTitle = props.title.replace(/\n/g, '<br>');
</script>

<style scoped>
.instruction {
  font-size: 1.5rem;
  text-align: center;
}

@media screen and (max-width: 640px) {
  .content-title-wrapper {
    max-width: 90%;
  }
}
</style>
