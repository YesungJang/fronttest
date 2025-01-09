<template>
  <div class="container">
    <Steps :currentStep="1" />
    <ContentTitle title="経験職種を1つ教えてください" />
    <OptionWords :jobNames="jobNames" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 本来ならばAPIでマスタの値を取得し配列にぶち込む必要あり
const jobNames = ref([
  'エンジニア',
  'プロジェクトマネージャー',
  'ITコンサルタント',
]);
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
</style>
