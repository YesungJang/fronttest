<template>
  <h1 class="page-title">AI職務経歴自動生成（β版）</h1>
  <div class="steps">
    <StepSection :number="1" label="経験職種" :isSelected="currentStep === 1" />
    <StepSection :number="2" label="キーワード" :isSelected="currentStep === 2" />
    <StepSection :number="3" label="内容確認" :isSelected="currentStep === 3" />
    <StepSection :number="4" label="自動生成" :isSelected="currentStep === 4" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  currentStep: number;
}

const props = defineProps<Props>();
</script>

<style scoped>
.page-title {
  text-align: center;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 15px 0 20px;
}

.steps {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* モバイル時に2段落に分けるため */
  margin-bottom: 20px;
  gap: 10px; /* 各ステップの間隔 */
}

/* レスポンシブ */
@media screen and (max-width: 640px) {
  .steps {
    gap: 5px; /* モバイル用の間隔 */
  }
  .steps > * {
    margin-bottom: 5px;
  }
}
</style>
