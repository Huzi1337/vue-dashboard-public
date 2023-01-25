<script setup lang="ts">
import { reactive, computed, ref } from "vue";
import DashHeader from "./DashHeader.vue";

const state = reactive({
  currentBalance: 21432.23,
  vsLastMonth: 12,
});

const iconResize = ref("resizeIcon");

const hasProfit = computed(() => {
  return state.vsLastMonth >= 0 ? "valueIncreaseFilled" : "valueDecrease";
});

const currentBalanceFormat = computed(() => {
  return state.currentBalance
    .toString()
    .split("")
    .map((el, index) => (index === 1 ? el + " " : el))
    .join("");
});
</script>

<template>
  <DashHeader> Current Balance </DashHeader>

  <h1 class="q"><span>$</span>{{ currentBalanceFormat }}</h1>

  <h2>
    <div :class="[hasProfit, iconResize]"></div>
    {{ state.vsLastMonth }}% vs last month
  </h2>

  <div class="footer">
    <button>Quick Invest</button>
    <button class="altbtn">Show Report</button>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/base";
h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 56px;
  line-height: 56px;
  margin-bottom: 0;
  span {
    color: #9896a1;
    font-weight: 300;
  }
}
h2 {
  display: flex;
  margin-top: 20px;
  font-family: "SF Pro Display";
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: base.$colorAppreciate;
}

.footer {
  display: flex;
  margin-top: auto;
  margin-bottom: 32px;
  button {
    width: 109px;
    height: 40px;
    background-color: base.$colorHighlight;
    color: white;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    margin-right: 8px;
    border-radius: 4px;
  }
  .altbtn {
    width: 112px;
    color: base.$colorHighlight;
    background: base.$appBackground;
    border: 1px solid base.$colorBasic;
  }
  button:hover {
    background-color: hsl(255, 96%, 68%);
  }
  button.altbtn:hover {
    color: hsl(255, 100%, 72%);
    background-color: white;
  }
}
.resizeIcon {
  width: 22px;
  height: 22px;
}

@media screen and (min-width: 1220) {
  .q {
    font-size: 40px;
  }
}
</style>
