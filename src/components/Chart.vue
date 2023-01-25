<script setup lang="ts">
import Chart from "chart.js/auto";
import { onMounted, defineProps } from "vue";

interface dataSet {
  label: string;
  data: [];
  borderColor: string;
  borderWidth: number;
  fill: string;
}

const props = defineProps<{
  id: string;
  gradientColor1: string;
  gradientColor2: string;
  simpleGraph: boolean;
  data: any | dataSet[];
  gradientStops: number[];
  max: string | number;
}>();

onMounted(() => {
  const ctx = document.getElementById(props.id) as HTMLCanvasElement;

  const gradientBg = ctx
    .getContext("2d")!
    .createLinearGradient(0, props.gradientStops[0], 0, props.gradientStops[1]);
  gradientBg.addColorStop(0.3, props.gradientColor1);
  gradientBg.addColorStop(0.8, props.gradientColor2);

  const myChart = new Chart(ctx, {
    type: "line",
    data: props.data,
    options: {
      responsive: true,

      elements: {
        line: {
          tension: 0.5,
          backgroundColor: gradientBg,
        },
        point: {
          pointStyle: "circle",
          radius: 0,
          hoverRadius: !props.simpleGraph ? 6 : 0,

          hoverBackgroundColor: "#fff",
          hoverBorderWidth: 3,
        },
      },
      hover: {
        mode: "nearest",
        intersect: false,
      },
      scales: {
        x: {
          display: false,
          ticks: { display: false },
          grid: {
            display: false,
          },
          border: {
            width: 0,
          },
        },
        y: {
          display: !props.simpleGraph,
          max: props.max,
          grid: {
            tickBorderDash: [0, 1],
          },
          border: {
            dash: [2, 5],
            width: 0,
          },
          ticks: {
            color: "#0000007A",
            callback: (value) => (value != 0 ? value + "k" : value),
            font: {
              size: 10,
              family: "SF Pro Display",
              weight: "400",
            },
          },
        },
      },
      plugins: {
        legend: {
          display: !props.simpleGraph,
          position: "bottom",
          align: "start",
          labels: {
            filter: (item) => {
              if (item.text != "Last Month") {
                item.fillStyle = "#7445fb";
              }
              return item.text != "Last Month";
            },
            useBorderRadius: true,
            borderRadius: 5,
            boxWidth: 10,
            boxHeight: 10,
            color: "#9896A1",
            font: {
              size: 12,
              family: "SF Pro Display",
            },
          },
        },
        tooltip: {
          filter: (context) => {
            return context.datasetIndex === 0;
          },
          displayColors: false,
          titleFont: { size: 12 },
          titleMarginBottom: 0,

          bodyFont: { family: "SF Pro Text", weight: "400", size: 12 },
          bodyColor: "#FAFAFA",
          callbacks: {
            label: (context) => {
              let lastMonth =
                context.chart.data.datasets[1].data[context.dataIndex];

              return (
                Number(context.formattedValue).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                }) + "k"
              );
            },
          },
        },
      },
    },
  });
  myChart;
});
</script>

<template>
  <div class="chartBox">
    <canvas :id="id"></canvas>
  </div>
</template>

<style lang="scss" scoped>
.chartBox {
  overflow: auto;
}
</style>
