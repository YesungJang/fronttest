<template>
  <button :class="buttonClass" @click="handleClick">{{ buttonText }}</button>
</template>

<script setup lang="ts">
import { navigateTo } from '#app';
interface Props {
  buttonText: string;
  value: string;
}

const props = defineProps<Props>();
const buttonClass = computed(() => {
  return props.buttonText === '次へ' ? 'next-btn' : 'back-btn';
});

const handleClick = () => {
  console.log(props.value);
  props.buttonText === '次へ'
    ? navigateTo(`./step-4?selectedOption=${props.value}`)
    : navigateTo(`./step-2?selectedOption=${props.value}`);
};
</script>

<style scoped>
.next-btn,
.back-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 30px;
  transition: background-color 0.3s ease;
}

.next-btn {
  background-color: #4a90e2;
  color: #fff;
}

.next-btn:hover {
  background-color: #357abd;
}

.back-btn {
  background-color: #e6e6e6;
}

.back-btn:hover {
  background-color: #ccc;
}
</style>
