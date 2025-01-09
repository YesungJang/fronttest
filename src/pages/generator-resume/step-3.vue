<template>
  <div class="container">
    <Steps :currentStep="3" />
    <ContentTitle title="この内容で生成します" />
    <QuestionAnswer
      questionTitle="Q1. 経験職種を教えてください"
      :answerText="stepAnswer.step1"
    />
    <QuestionAnswer
      questionTitle="Q2. 扱っていた商材・サービスを教えてください"
      :answerText="stepAnswer.step2"
    />
    <QuestionAnswer
      questionTitle="Q3. あなたの経験内容にマッチする内容を選択してください"
      :answerText="stepAnswer.step3.freeword"
      :answerList="stepAnswer.step3.keyword"
    />
    <div class="button-container">
      <ARPSButton @click="handleSubmit" buttonName="この内容で生成する" />
      <ARPSButton @click="handleBack" buttonName="戻る" />
    </div>
  </div>
  <ARPSFooter />
</template>

<script setup lang="ts">
const stepAnswer = getGeneratorResumeSessionStorageItem();

const handleSubmit = () => {
  navigateTo(`/generator-resume/step-4`);
};

const handleBack = () => {
  navigateTo(`/generator-resume/step-2`);
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
</style>
