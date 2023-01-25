<script setup lang="ts">
import ItemContainer from "./components/ItemContainer.vue";
import Header from "./components/MainHeader.vue";
import CurrentBalance from "./components/CurrentBalance.vue";
import Summary from "./components/Summary.vue";
import Tabs from "./components/Tabs.vue";
import SideNavVue from "./components/SideNav.vue";
import Favorites from "./components/Favorites.vue";
</script>

<template>
  <div class="sideMenu">
    <SideNavVue />
    <Favorites />
  </div>

  <main>
    <Header></Header>
    <div class="contentContainer" id="contentContainer">
      <div class="shadow"></div>
      <ItemContainer class="currentBalance">
        <CurrentBalance />
      </ItemContainer>
      <ItemContainer class="summary">
        <Summary />
      </ItemContainer>
      <ItemContainer class="tabs">
        <Tabs />
      </ItemContainer>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "./assets/base";
.shadow {
  position: absolute;
  width: 100%;
  height: 130px;
  bottom: 0;
  background: linear-gradient(180deg, #ffffff00 0%, #ffffff 100%);
  z-index: 100;
  margin-right: 100px;
}

.sideMenu {
  display: flex;
  flex-direction: column;
  .container {
    max-height: 50%;
  }
}

main {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 49px;
  padding-right: 2vw;
  overflow: hidden;
  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  .contentContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max(335px) 1fr;
    gap: 32px;
    justify-items: stretch;
    flex: 1;
    overflow: auto;

    .currentBalance {
      min-width: 355px;
    }
    .tabs {
      grid-column: 1/3;
      grid-row: 2;
    }
    .container {
      border-radius: 16px;
      flex-direction: column;
    }
  }
}

@media (max-width: 1220px) {
  main {
    display: flex;
    flex-direction: column;
    padding-top: 49px;
    overflow: hidden;
    .contentContainer {
      grid-template-columns: 1fr;
      grid-template-rows: max(335px) 1fr 1fr;
      padding-bottom: 16px;
      .tabs {
        grid-column: 1;
        grid-row: 2;
        padding-bottom: 16px;
      }
    }
  }
}
@media (max-width: 1058px) {
  .sideMenu {
    display: none;
  }

  main {
    padding-left: 2vh;
  }
  .summary {
    padding-bottom: 30px;
  }
}
</style>
