<script setup lang="ts">
import TripleDots from "./TripleDots.vue";
</script>

<template>
  <div class="header">
    <h1><slot>Header Name</slot></h1>
    <TripleDots />
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  h1 {
    margin-top: 0;
    margin-bottom: 40px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
}
</style>
