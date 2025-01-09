<template>
  <div class="container">
    <Steps :currentStep="4" />
    <ContentTitle title="職務経歴生成結果" />
    <div v-if="pending" class="spinner"></div>
    <div v-else>
      <GeneratorTextArea v-model:generateText="generateText" />
    </div>
  </div>

  <div class="button-container">
    <div v-if="message" class="message-bubble">
      <p>{{ message }}</p>
    </div>
    <button @click="copyToClipboard" class="copy-btn">
      クリップボードにコピーする
    </button>
    <ARPSButton @click="returnClick" buttonName="初めからやり直す" />
  </div>
  <ARPSFooter />
</template>

<script setup lang="ts">
const generatorTextArea = ref('');
const message = ref('');

let stepAnswer = getGeneratorResumeSessionStorageItem();

const { $api } = useNuxtApp();
const fetchGeneratorResumeAPI = async () => {
  const keywords = stepAnswer.step3.keyword;
  keywords.push(stepAnswer.step3.freeword);
  const GeneratorResumeAPI = $api.ai_resume.generator_resume;
  return await GeneratorResumeAPI.$post({
    body: {
      jobExperience: stepAnswer.step1,
      jobExperienceDetails: '',
      product: stepAnswer.step2,
      keywords: keywords,
    },
  });
};

const { data, pending } = useLazyAsyncData(fetchGeneratorResumeAPI);

// 生成されたテキストの整形
const generateText = computed(
  () =>
    `${data.value?.jobTitle ?? ''}
＜職務内容＞
${data.value?.jobDescription ?? ''}
＜成果・実績＞
${data.value?.achievements ?? ''}`
);

// コンポーネントがマウントされたら、テキストエリアにデータをセット
watchEffect(() => {
  if (!pending.value && data.value) {
    generatorTextArea.value = generateText.value;
  }
});

const copyToClipboard = async () => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(generatorTextArea.value);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = generatorTextArea.value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    message.value = 'クリップボードにコピーしました！';
  } catch (error) {
    console.error('Clipboard error:', error);
    message.value = 'コピーに失敗しました。';
  }
};

const returnClick = () => {
  navigateTo(`/generator-resume/step-1`);
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
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

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}

.copy-btn,
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

.copy-btn {
  margin-bottom: 20px;
}

.back-btn {
  margin-bottom: 30px;
}

.copy-btn {
  background-color: #282828;
  color: #fff;
}

.copy-btn:hover {
  background-color: #6f6f6f;
}

.back-btn {
  background-color: #e6e6e6;
}

.back-btn:hover {
  background-color: #ccc;
}

/* 吹き出し風メッセージ */
.message-bubble {
  background-color: #a2d9f775;
  font-weight: 600;
  color: #343434;
  padding: 10px 20px;
  position: relative;
  max-width: 300px;
  text-align: center;
  margin-bottom: 20px;
}

.message-bubble:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #a2d9f775;
}

/* レスポンシブ */
@media (max-width: 768px) {
  .container {
    padding: 0 10px; /* Add padding for small screens */
  }
}
</style>
