<script setup lang="ts">
import { ref } from "vue";

const searchInput = ref("");
const active = ref(false);
const toggle = () => {
  active.value = !active.value;
};
const onClickAway = () => {
  active.value = false;
};

const actions = ["Action 1", "Action 2", "Action 3"];
</script>

<template>
  <header>
    <div v-if="searchInput === ''" class="searchIcon" />
    <input v-model="searchInput" placeholder="        Search" />
    <button class="notif"><div class="pending"></div></button>
    <button @click="toggle" v-click-away="onClickAway" class="hamburger">
      <div class="dropdownMenu" v-if="active">
        <button class="dropdownItem" v-for="action in actions">
          {{ action }}
        </button>
      </div>
    </button>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/base";

header {
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 32px;

  .searchIcon {
    position: absolute;
    width: 16px;
    height: 16px;
    left: 0;
    margin: 16px 0 16px 18px;
    background-image: url(../assets/search.svg);
    background-repeat: no-repeat;
    z-index: 1000;
  }

  input {
    margin-right: auto;
    padding: 12px 18px;
    font-family: inherit;
    min-width: 230px;
  }

  button {
    width: 48px;
    height: 48px;

    margin-left: 16px;
    background-repeat: no-repeat;
    background-position: center;
  }

  button,
  input {
    position: relative;
    border-radius: 8px;
    background-color: base.$dashBoardColor;
  }
  .notif {
    background-image: url(../assets/notification.svg);
  }
  .hamburger {
    background-image: url(../assets/hamburger.svg);
    position: relative;
  }
  .pending {
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: base.$colorDepreciate;
    border: 2px solid #ffffff;
    border-radius: 45px;
    right: 0;
    top: 0;
    margin-right: -3px;
    margin-top: -3px;
  }
  .dropdownItem {
    font-family: "SF Pro Display";
    font-weight: 300;
    list-style: none;
    font-size: 16px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #ffffff;
    min-height: 30px;
  }

  .dropdownItem:hover {
    background-color: base.$colorHighlight;
    color: white;
  }
  .dropdownMenu {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 110px;
    animation: growDown 300ms ease-in-out forwards;
    transform-origin: top center;
    margin-top: 25px;
    right: 0;
    border: 1px solid #ebebf3;
    line-height: 30px;
    z-index: 1000;
    filter: drop-shadow(2px 2px 10px #ebebf3);
    button {
      margin: 0;
      width: 100%;
      border-radius: 0;
    }
  }
}
@keyframes growDown {
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
