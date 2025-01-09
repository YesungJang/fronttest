<template>
  <div class="options">
    <OptionWord
      v-for="optionName in optionNames"
      :key="optionName"
      :optionName="optionName"
      :selectedItems="selectedItems"
      @handleClick="handleClick(optionName)"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  optionNames?: string[];
  selectedItems: string[];
}

const props = defineProps<Props>();
const emit = defineEmits(['selectOption']);

const handleClick = (optionName: string) => {
  emit('selectOption', optionName);
};
</script>

<style scoped>
.options {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 30vw;
}
/* レスポンシブ */
@media screen and (max-width: 640px) {
  .options {
  margin: 0 15px;
}
}
</style>
