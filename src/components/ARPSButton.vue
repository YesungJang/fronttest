<template>
  <button :class="['custom-button', buttonClass]" @click="$emit('handleNext')">
    {{ buttonName }}
  </button>
</template>

<script setup>
const props = defineProps({
  buttonName: { type: String },
});

const buttonClass = computed(() => {
  return ['次へ', 'この内容で生成する'].includes(props.buttonName)
    ? 'next-btn'
    : 'back-btn';
});
</script>

<style scoped>
.next-btn,
.back-btn {
  width: 250px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.next-btn {
  margin-bottom: 20px;
}

.back-btn {
  margin-bottom: 30px;
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
