<template>
  <div class="container">
    <Steps :currentStep="2" />
    <ContentTitle
      title="Q3.あなたの経験内容にマッチするキーワードを選択してください"
    />
    <p class="description">
      フリーワードは1つ、キーワードは5つまで選択できます。
    </p>
    <div v-if="pending" class="spinner"></div>

    <div v-else>
      <OptionWords
        :optionNames="selectKeyword"
        @selectOption="toggleSelection"
        :selectedItems="selectedItems"
      />
      <ResumeInputArea
        v-model="freeWordText"
        placeholder="選択肢以外のキーワードを入力"
      />
      <SupplementMessage
        supplementMessage="例: マーケティング／チーム管理／顧客管理　など"
      />
      <ErrorMessage :errorMessage="errorMessage" />
      <div class="button-container">
        <ARPSButton @click="handleNext" buttonName="次へ" />
        <ARPSButton @click="handleBack" buttonName="戻る" />
      </div>
    </div>
  </div>
  <ARPSFooter />
</template>

<script setup lang="ts">
// keywordのMAX件数
const MAX_SELECTIONS = 5;
const freeWordText = ref('');

const selectedItems = ref<string[]>([]);
let stepAnswer = getGeneratorResumeSessionStorageItem();

const { $api } = useNuxtApp();
const fetchGetMatchKeywordAPI = async () => {
  const getMatchKeywordAPI = $api.ai_resume.match_keywords;
  return await getMatchKeywordAPI.$post({
    body: {
      jobExperience: stepAnswer.step1,
      jobExperienceDetails: stepAnswer.step2,
    },
  });
};

// useLazyAsyncDataでAPIデータ取得とローディング状態を管理
const { data, pending } = await useLazyAsyncData(fetchGetMatchKeywordAPI);
const selectKeyword = computed(() => data.value?.keywords ?? []);

const toggleSelection = (item: string) => {
  if (selectedItems.value.includes(item)) {
    selectedItems.value = selectedItems.value.filter((i) => i !== item);
  } else if (selectedItems.value.length < MAX_SELECTIONS) {
    selectedItems.value.push(item);
  }
};

const errorMessage = ref('');

const handleBack = () => {
  errorMessage.value = '';
  navigateTo(`/generator-resume/step-1`);
};

const handleNext = () => {
  if (!freeWordText.value && selectedItems.value.length === 0) {
    errorMessage.value =
      'フリーワードまたはキーワードを1つ以上選択してください。';
    return;
  }
  errorMessage.value = '';

  let stepAnswer = getGeneratorResumeSessionStorageItem();
  stepAnswer = {
    step1: stepAnswer.step1,
    step2: stepAnswer.step2,
    step3: { freeword: freeWordText.value, keyword: selectedItems.value },
  };
  setGeneratorResumeSessionStorageItem(stepAnswer);
  navigateTo(`/generator-resume/step-3`);
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 8px;
}

.supplement {
  font-size: 0.9rem;
  color: #000000;
  text-align: center;
  margin-bottom: 8px;
}

.spinner {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #4a90e2;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.error-message {
  color: red;
  font-size: 0.9rem;
  margin-top: 8px;
  margin-bottom: 8px;
  text-align: center;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

/* レスポンシブ */
@media screen and (max-width: 640px) {
  .description {
    max-width: 90%;
  }
}
</style>
