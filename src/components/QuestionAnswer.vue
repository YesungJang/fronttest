<template>
  <div class="content">
    <div class="question">{{ questionTitle }}</div>
    <div class="answers">
      <label v-if="answerText" class="answer">{{ answerText }}</label>
      <label v-for="(item, index) in answerList" :key="index" class="answer">
        {{ item }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  questionTitle: string;
  answerText?: string;
  answerList?: string[];
}

const props = defineProps<Props>();
</script>

<style scoped>
.question {
  font-size: 1rem;
  margin: 20px 15px 10px;
  font-weight: bold;
}

.answers {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 30vw;
}

.answer {
  font-weight: bold;
  background-color: #ffdc00;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 5px;
  font-size: 1rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
.content {
  text-align: center;
  width: 100%;
}

/* レスポンシブ */
@media screen and (max-width: 640px) {
  .answers {
  margin: 0 15px;
}
}

</style>
