<template>
  <div class="content">
    <div class="input-area">
      <input
        type="text"
        id="customInput"
        :value="modelValue"
        @input="updateValue"
        :placeholder="placeholder"
        :maxlength="maxlength"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  maxlength: {
    type: String,
    default: '50',
  },
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<style scoped>
.input-area {
  margin: -5px auto 20px;
  max-width: 40vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.input-area label {
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
  color: #333;
}

.input-area input[type='text'] {
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  border: 2px solid #b3c7db;
  font-size: 16px;
}

.content {
  margin: 20px 0 20px;
  text-align: center;
  width: 100%;
}

.supplement {
  font-size: 0.9rem;
  color: #4f4e4e;
  text-align: left;
  width: 100%;
  max-width: 40vw;
  margin: 0 auto 8px auto;
}

.error-message {
  display: flex;
  color: red;
  font-size: 0.9rem;
  margin-top: -8px;
  margin-bottom: 8px;
}

/* レスポンシブ */
@media screen and (max-width: 640px) {
  .input-area {
    max-width: 90%;
  }

  .input-area input[type='text'] {
    font-size: 16px;
    padding: 12px;
  }
}
</style>
