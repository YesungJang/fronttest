<template>
  <div class="container">
    <Steps :currentStep="1" />
    <FormSection
      title="Q1.経験職種を教えてください"
      v-model="jobExperience"
      placeholder="50文字以内で入力"
      :errorMessage="jobExperienceError"
      supplementMessage="例：法人営業／一般事務／システムエンジニア など"
    />
    <FormSection
      title="Q2.扱っていた商材・サービスを教えてください"
      v-model="productText"
      placeholder="50文字以内で入力"
      :errorMessage="productTextError"
      supplementMessage="例: 不動産／会計ソフト／開発ツール　など"
    />
    <ARPSButton @click="handleNext" buttonName="次へ" />
  </div>
  <ARPSFooter />
</template>

<script setup lang="ts">
const jobExperience = ref('');
const productText = ref('');
const jobExperienceError = ref('');
const productTextError = ref('');

const handleNext = () => {
  if (!jobExperience.value)
    jobExperienceError.value = '経験職種を入力してください。';
  if (!productText.value)
    productTextError.value = '扱っていた商材・サービスを入力してください。';

  if (!jobExperience.value || !productText.value) return;

  let stepAnswer = getGeneratorResumeSessionStorageItem();
  stepAnswer = {
    step1: jobExperience.value,
    step2: productText.value,
    step3: stepAnswer.step3,
  };
  setGeneratorResumeSessionStorageItem(stepAnswer);
  navigateTo(`/generator-resume/step-2`);
};
</script>

<style scoped>
.container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
}

/* レスポンシブ */
@media screen and (max-width: 640px) {
  .content-title-wrapper {
    max-width: 90%;
  }
  .supplement {
    max-width: 90%;
  }
}
</style>
