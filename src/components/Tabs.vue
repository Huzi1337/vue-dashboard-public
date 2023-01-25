<script setup lang="ts">
import { ref } from "vue";
import CurrencyBoard from "./CurrencyBoard.vue";

const tabActive = ref(1);
const tabNames = ["Summary", "Table", "Charts", "Reporting", "Analysis"];
</script>

<template>
  <div class="header">
    <button
      v-for="n in tabNames.length"
      :class="tabActive === n ? 'active' : ''"
      @click="tabActive = n"
    >
      {{ tabNames[n - 1] }}
    </button>
  </div>
  <div class="tabContent">
    <CurrencyBoard v-if="tabActive === 1"></CurrencyBoard>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/base";
button {
  height: 100%;
  font-family: "SF Pro Display";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  border-bottom: 4px solid transparent;
  padding: 0;
  margin-left: 24px;
  color: base.$colorInactive;
  background-color: transparent;
}
button:nth-of-type(1) {
  margin-left: 0px;
}
button.active {
  color: base.$colorFont;
  font-weight: 500;
  border-color: base.$colorHighlight;
}
.header {
  display: flex;
  min-height: 40px;
  width: calc(100% - 32px);
  margin-left: 32px;
  margin-top: 32px;
  border-bottom: 1px solid base.$colorBasic;
}
.tabContent {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: scroll;
}
.tabContent::-webkit-scrollbar {
  display: none;
}
</style>
