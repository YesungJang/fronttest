<template>
  <div class="error-message">
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  errorMessage: {
    type: String,
    default: '',
  },
});
</script>

<style scoped lang="scss">
.error-message {
  display: flex;
  color: red;
  font-size: 0.9rem;
  margin-top: -8px;
  margin-bottom: 8px;
  justify-content: center;
}
</style>
