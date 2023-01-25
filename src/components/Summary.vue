<script setup lang="ts">
import Chart from "./Chart.vue";
import DashHeader from "./DashHeader.vue";

//Wallet Summary Data-------------------
const thisMonthData = [
  { day: 1, count: 0 },
  { day: 4, count: 5 },
  { day: 7, count: 11 },
  { day: 11, count: 12 },
  { day: 15, count: 16 },
  { day: 19, count: 21 },
  { day: 24, count: 19 },
  { day: 26, count: 16 },
  { day: 28, count: 20 },
  { day: 30, count: 25 },
];
const lastMonthData = [
  { day: 1, count: 0 },
  { day: 4, count: 10 },
  { day: 7, count: 15 },
  { day: 11, count: 11 },
  { day: 15, count: 10 },
  { day: 19, count: 8 },
  { day: 24, count: 8 },
  { day: 26, count: 9 },
  { day: 28, count: 9.5 },
  { day: 30, count: 10 },
];
//--------------------------------
const data = {
  labels: thisMonthData.map((row) => `${row.day} May`),
  datasets: [
    {
      label: "This Month",
      data: thisMonthData.map((row) => row.count),
      borderColor: "#7445fb",
      borderWidth: 2,
      fill: "origin",
    },
    {
      label: "Last Month",
      data: lastMonthData.map((row) => row.count),
      borderColor: "#85858530",
      borderDash: [5, 2],
      borderWidth: 2,
    },
  ],
};
</script>
<template>
  <DashHeader>Summary</DashHeader>
  <Chart
    id="bigChart"
    gradientColor1="#7445FB29"
    gradientColor2="#7445FB00"
    :gradientStops="[5, 200]"
    :simpleGraph="false"
    :data="data"
    :max="30"
  ></Chart>
</template>
