<template>
  <p class="supplement-message">{{ supplementMessage }}</p>
</template>

<script setup lang="ts">
defineProps({
  supplementMessage: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
.supplement-message {
  font-size: 0.9rem;
  color: #888;
  text-align: left;
  width: 100%;
  max-width: 40vw;
  margin: 0 auto 8px auto;
}

@media screen and (max-width: 640px) {
  .supplement-message {
    max-width: 90%;
  }
}
</style>
