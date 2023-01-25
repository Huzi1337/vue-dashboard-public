<script setup lang="ts">
import DashHeader from "./DashHeader.vue";
import ItemContainer from "./ItemContainer.vue";
import UserFooter from "./UserFooter.vue";
import useSWRV from "swrv";
import Chart from "./Chart.vue";
const URL = "BLANK";
const KEY = "BLANK";
const FAV = ["BTC", "ADA"];

const fetcherInfo = (arg: string) =>
  fetch(arg, {
    headers: {
      "X-KEY": KEY,
      "X-TYPE": "INFO",
    },
  }).then((res) => res.json());
const fetcherQuote = (arg: string) =>
  fetch(arg, {
    headers: {
      "X-KEY": KEY,
      "X-TYPE": "QUOTE",
    },
  }).then((res) => res.json());
const { data: dataInfo, error: errorInfo } = useSWRV(
  `https://${URL}`,
  fetcherInfo,
  { revalidateOnFocus: false }
);
const { data: dataQuote, error: errorQuote } = useSWRV(
  `https://${URL}}`,
  fetcherQuote,
  { revalidateOnFocus: false }
);
</script>

<template>
  <ItemContainer>
    <DashHeader><span id="favHeader">Favorites</span> </DashHeader>
    <template v-if="(errorInfo && !dataInfo) || (errorQuote && !dataQuote)">
      <div>Failed to load</div>
    </template>
    <template v-else-if="!dataInfo || !dataQuote">
      <div>Loading...</div>
    </template>
    <template v-else-if="dataInfo && dataQuote">
      <div v-for="currency in FAV" class="currency">
        <div class="logoWrapper">
          <img :src="dataInfo.data[currency][0].logo" />
        </div>
        <div class="nameWrapper">
          <h1>
            {{ dataInfo.data[currency][0].symbol }}
          </h1>
          <h1>
            <span>{{ dataInfo.data[currency][0].name }}</span>
          </h1>
        </div>
        <div class="chart">
          <Chart
            :id="`favChart${currency}`"
            :data="dataQuote.dataSets[currency]"
            :gradientColor1="
              dataQuote.data[currency][0].quote.USD.percent_change_24h >= 0
                ? '#2DC78F14'
                : '#EA4D4D14'
            "
            :gradientColor2="
              dataQuote.data[currency][0].quote.USD.percent_change_24h >= 0
                ? '#2DC78F00'
                : '#EA4D4D00'
            "
            :gradientStops="[30, 100]"
            :simple-graph="true"
            :max="'none'"
          ></Chart>
        </div>
      </div>
    </template>
    <UserFooter></UserFooter>
  </ItemContainer>
</template>
<style lang="scss" scoped>
@use "../assets/base";
.container {
  flex-direction: column;
}
.nameWrapper {
  display: flex;
  flex-direction: column;
  margin-top: 7.5px;
  margin-left: 12px;
  margin-right: auto;
}
.chart {
  width: 64px;
}
.currency {
  width: calc(100% - 64px);
  display: flex;
  max-height: 32px;
  margin-bottom: 24px;
  padding-right: 24px;
  h1 {
    color: base.$colorInactive;
    font-weight: 400;
    font-size: 12px;
    line-height: 5px;
    margin: 0;
    margin-bottom: 10px;
  }
  span {
    font-weight: 600;
    color: base.$colorFont;
  }
}
.logoWrapper {
  display: flex;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 45px;
  border: 1px solid base.$colorBasic;
  background-color: #fafafa;

  img {
    width: 20px;
    height: 20px;
    margin: 6px;
  }
}
.header {
  margin-top: 14px;
  margin-left: 24px;
  h1 {
    color: base.$colorInactive;
    font-weight: 600;
    font-size: 14px;
  }
}
#favHeader {
  position: absolute;
  top: 24px;
  font-size: 14px;
  font-weight: 600;
  font-size: 14px;
  line-height: 0px;

  color: #9896a1;
}
</style>
