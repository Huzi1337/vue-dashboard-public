<script setup lang="ts">
import { ref } from "vue";

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
  <div class="dropdownWrapper">
    <button
      class="tripleDots"
      @click="toggle"
      v-click-away="onClickAway"
    ></button>
    <div class="dropdownMenu" v-if="active">
      <button class="dropdownItem" v-for="action in actions">
        {{ action }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/base";
.dropdownMenu {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 80px;
  transform: translate(-75%, -10%);

  border: 1px solid #ebebf3;
  line-height: 30px;
  z-index: 1000;
  filter: drop-shadow(2px 2px 10px #ebebf3);
}
.dropdownWrapper {
  position: relative;
}

.dropdownItem {
  font-family: "SF Pro Display";
  font-weight: 300;
  list-style: none;
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #ffffff;
  min-height: 30px;
}

.dropdownItem:hover {
  background-color: base.$colorHighlight;
  color: white;
}
</style>
