<script setup lang="ts">
import Chart from "./Chart.vue";
import useSWRV from "swrv";
import { controllers } from "chart.js";

const URL = "BLANK";
const KEY = "BLANK";

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
  <template v-if="(errorInfo && !dataInfo) || (errorQuote && !dataQuote)">
    <div class="container">Failed to load</div>
  </template>
  <template v-else-if="!dataInfo || !dataQuote">
    <div class="container">Loading...</div>
  </template>
  <template v-else-if="dataInfo && dataQuote">
    <div v-for="currency in Object.keys(dataInfo.data)" class="container">
      <div class="currency section">
        <div class="logoWrapper">
          <img :src="dataInfo.data[currency][0].logo" />
        </div>
        <h1>
          {{ dataInfo.data[currency][0].symbol }} <br />
          <span>{{ dataInfo.data[currency][0].name }}</span>
        </h1>
      </div>
      <div class="section column price">
        <h1>Price</h1>
        <h1>
          <span
            >${{ dataQuote.data[currency][0].quote.USD.price.toFixed(2) }}</span
          >
        </h1>
      </div>
      <div class="section">
        <h1>
          Change <br />
          <span
            :class="`iconHolder ${
              dataQuote.data[currency][0].quote.USD.percent_change_24h > 0
                ? 'increase'
                : 'decrease'
            }`"
            >{{
              `${
                dataQuote.data[currency][0].quote.USD.percent_change_24h > 0
                  ? "+"
                  : "-"
              } ${Math.abs(
                dataQuote.data[currency][0].quote.USD.percent_change_24h
              ).toFixed(2)}`
            }}
            <div
              :class="`alignIcon ${
                dataQuote.data[currency][0].quote.USD.percent_change_24h >= 0
                  ? 'valueIncrease'
                  : 'valueDecrease'
              }`"
            />
          </span>
        </h1>
      </div>
      <div class="section">
        <div class="chart">
          <Chart
            :id="`smallChart${currency}`"
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
      <div class="lastSection section">
        <button>Buy</button>
        <button class="altbtn">Sell</button>
      </div>
    </div>
  </template>
</template>

<style lang="scss" scoped>
@use "../assets/base";
h1 {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: base.$colorInactive;

  span {
    color: base.$colorFont;
    font-weight: 600;
  }
}
.lastSection {
  margin-left: 7vw;
  justify-self: end;
}
.chart {
  width: 110px;
  height: 35px;
}
.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 100%;

  justify-content: space-between;
  align-items: center;

  height: 80px;
  background: #ffffff;
  border: 1px solid base.$colorBasic;
  border-radius: 8px;
  margin-top: 8px;
}
.price {
  justify-self: start;
}

.iconHolder {
  display: flex;
}

.alignIcon {
  margin-left: 7px;
  margin-top: 2px;
  background-size: cover;
}

.column {
  flex-direction: column;
}
.section {
  min-width: 68px;
  height: 35px;

  display: flex;
  h1 {
    margin: 0;
  }

  button {
    width: 55px;
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
.section:nth-of-type(2) {
  align-self: center;
}

.container:nth-of-type(1) {
  margin-top: 32px;
}
.currency {
  display: flex;

  .logoWrapper {
    display: flex;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 45px;
    border: 1px solid base.$colorBasic;
    margin-right: 8px;
    margin-top: -0.5vh;
    img {
      width: 32px;
      height: 32px;
      margin: 8px;
    }
  }
}

.increase {
  color: base.$colorAppreciate;
}
.decrease {
  color: base.$colorDepreciate;
}
</style>
