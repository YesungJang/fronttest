<template>
  <button
    class="option"
    :value="optionName"
    @click="$emit('handleClick', optionName)"
    :class="{ selected: selectedItems.includes(optionName) }"
  >
    {{ optionName }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  optionName: string;
  selectedItems: string[];
}

const props = defineProps<Props>();
</script>

<style scoped>
.option {
  background-color: #f0f4f8;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 5px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.option:hover {
  background-color: #d1e3f4;
}

button.selected {
  background-color: rgba(31, 171, 233, 0.9);
  color: #fff;
}

button.selected:hover {
  background-color: rgba(31, 171, 233, 0.7); 
}
</style>
