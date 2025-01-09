<template>
  <div :class="['step', { active: isSelected }]">
    <div class="circle">{{ number }}</div>
    <div class="label">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  number: number;
  label: string;
  isSelected: boolean;
}

const props = defineProps<Props>();
</script>

<style scoped>
.step {
  text-align: center;
  margin: 0 15px;
}
.circle {
  margin: 10px auto;
  background-color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:  #9F9FA1;
  font-weight: bold;
  border: 1px solid;
  border-color: #9F9FA1;
}

.step.active .circle {
  color:  #ffffff;
  font-weight: 900;
  background-color: rgba(31, 171, 233, 0.9);
}

.label {
  font-weight: 900;
  margin-top: 5px;
  font-size: 0.875rem;
  color: #333;
}

/* レスポンシブ */
@media screen and (max-width: 640px) {
  .step {
  margin: 0 5px;
}
  .circle {
  margin: 10px auto;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
}
</style>
