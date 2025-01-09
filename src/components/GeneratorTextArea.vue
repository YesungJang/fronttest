<template>
  <textarea class="result" :value="generateText" @input="handleInput">{{
    generateText
  }}</textarea>
</template>

<script setup lang="ts">
interface Props {
  generateText: string;
}

const emit = defineEmits(['update:generateText']);
const props = defineProps<Props>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement; // キャスト
  emit('update:generateText', target.value);
};
</script>

<style scoped>
.result {
  width: 40vw;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  line-height: 1.5;
  resize: none;
  background-color: #f9f9f9;
  color: #333;
  margin-top: 20px;
}

/* レスポンシブ */
@media screen and (max-width: 640px) {
  .result {
    width: 80vw;
  }
}
</style>
