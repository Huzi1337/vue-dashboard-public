<script setup lang="ts">
import TripleDots from "./TripleDots.vue";
</script>

<template>
  <div class="user">
    <div class="userPhoto" />
    <div class="info">
      <h1>Marc Webber</h1>
      <h1><span>marc@riot.com</span></h1>
    </div>
    <TripleDots class="dots" />
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/base";

.user {
  display: flex;
  margin-top: auto;
  margin-bottom: 24px;
  .userPhoto {
    width: 40px;
    height: 40px;
    background-image: url(../assets/userPhoto.png);
    background-repeat: no-repeat;
    margin-right: 16px;
    margin-left: -8px;
  }
  .info {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    h1 {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 14px;
      color: base.$colorFont;
      margin: 0;
      margin-top: 3px;
      span {
        color: base.$colorInactive;
        font-weight: 400;
      }
    }
  }
}
</style>
