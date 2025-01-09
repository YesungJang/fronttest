<template>
  <header class="header">
    <div class="header-logo">
      <img alt="cdc logo" />
    </div>
    <div class="header-right">
      <button class="menu-toggle" @click="toggleMenu">
        <span :class="{ 'accordion-icon': true, opened: isMenuOpen }">{{
          isMenuOpen ? 'ー' : '＋'
        }}</span>
        ご利用上の注意
      </button>
      <div v-if="isMenuOpen" class="dropdown-menu">
        <ul>
          <li>
            本機能では、お客様の入力情報はデータベースに保存されません。入力された情報は、ChatGPTのAPIとのやり取りにのみ使用され、外部に保存されることも、個人を特定するために利用されることもありません。また、個人情報（氏名、住所、電話番号、メールアドレスなど）を収集・利用することもございません。
          </li>
          <li>
            本機能では個人情報利用することはございませんが、念のためフリーワード欄に個人情報を入力しないようご注意願います。ただし、万が一、個人情報が入力されたとしても、ウェブブラウザのタブが開かれている間だけ保持され、タブを閉じるとそのデータは自動的に削除され残ることはございません。
          </li>
          <li>
            サービス改善のために利用状況を計測することがありますが、計測データはあくまで匿名で収集され、個人の特定には使用されません。
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.header {
  background: #ededed;
  padding: 5px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
}

.header-logo {
  margin: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-right {
  position: absolute;
  right: 10px;
}

.header img {
  content: url('@/assets/images/3S_logo.png');
  width: 400px;
  height: 30px;
  margin: 10px;
}

.menu-toggle {
  background: #f74e34;
  font-size: small;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.dropdown-menu {
  position: absolute;
  top: 65px;
  right: 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px;
  padding: 10px;
}

.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-menu li {
  font-size: small;
  margin: 10px 5px;
}

/* レスポンシブ */
@media screen and (max-width: 640px) {
  .dropdown-menu {
    width: 350px;
    padding: 10px;
  }
  .header img {
    content: url('@/assets/images/3S_logo_sp.png');
    width: 70px;
    height: 70px;
    margin: auto;
  }
}
</style>
