<script setup lang="ts">
import ItemContainer from "./ItemContainer.vue";
import { ref } from "vue";
const activeButton = ref("Overview");
const navs = [
  "Overview",
  "Buy / Sell",
  "Wallets",
  "Bundles",
  "Reporting",
  "Community",
];
</script>
<template>
  <ItemContainer
    ><h1>
      <div class="logo"></div>
      Payte
    </h1>
    <button v-for="nav in navs" :class="nav === activeButton ? 'active' : ''">
      <h1>
        <div :class="`navIcon ${nav.split(' ').join('')}`"></div>
        {{ nav }}
      </h1>
      <div class="notification" v-if="nav === `Overview`">9+</div>
    </button>
  </ItemContainer>
</template>
<style lang="scss" scoped>
@use "../assets/base";
.container {
  flex-direction: column;
  border-bottom: 1px solid base.$colorBasic;
}

h1 {
  display: flex;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  margin-top: 40px;
  margin-bottom: 0;

  .logo {
    width: 38px;
    height: 24px;

    background-repeat: no-repeat;
    background-position: center;
    margin-right: 16px;
  }

  .navIcon {
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 12px;
  }
  .Overview {
    background-image: url(../assets/overview.svg);
  }
  .Buy\/Sell {
    background-image: url(../assets/buysell.svg);
  }
  .Wallets {
    background-image: url(../assets/wallet.svg);
  }
  .Bundles {
    background-image: url(../assets/bundles.svg);
  }
  .Reporting {
    background-image: url(../assets/reporting.svg);
  }
  .Community {
    background-image: url(../assets/community.svg);
  }
}
button {
  height: 44px;
  background-color: transparent;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 12px;

  padding-left: 14px;
  align-items: center;

  color: base.$colorInactive;

  display: flex;
  h1 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
  }
  .notification {
    width: 23px;
    height: 17px;
    border-radius: 30px;
    margin-left: auto;
    color: white;
    background-color: base.$colorDepreciate;
    font-weight: 700;
    font-size: 10px;
    line-height: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
button:last-of-type {
  margin-bottom: 24px;
}
button.active {
  height: 44px;
  margin-top: 63px;
  background-color: #ffffff;

  border: 1px solid base.$colorBasic;

  h1 {
    color: base.$colorFont;
    font-weight: 600;
  }
}
</style>
