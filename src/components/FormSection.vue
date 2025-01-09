<template>
  <div class="form-section">
    <ContentTitle :title="title" />
    <ResumeInputArea v-model="inputValue" :placeholder="placeholder" />
    <ErrorMessage :errorMessage="errorMessage" />
    <SupplementMessage :supplementMessage="supplementMessage" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  errorMessage: {
    type: String,
    default: '',
  },
  supplementMessage: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const inputValue = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});
</script>

<style scoped>
.form-section {
  margin-bottom: 20px;
  width: 100%;
}
</style>
