<template>
  <div class="container">
    <slot>Content</slot>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/base";
.container {
  width: 100%;
  height: 100%;

  display: flex;
  position: relative;

  background-color: base.$dashBoardColor;
}
</style>
