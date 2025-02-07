<template>
  <div class="chart-container">
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStatisticsStore } from '@/stores/statistics';
import Chart from 'chart.js/auto';

const statisticsStore = useStatisticsStore();
const chartRef = ref(null);
let chart = null;

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'right',
      labels: {
        generateLabels: (chart) => {
          const data = chart.data.datasets[0].data;
          return [
            {
              text: `전체: ${data[0]}`,
              fillStyle: 'rgba(75, 192, 192, 0.5)',
              strokeStyle: 'rgba(75, 192, 192, 1)',
              lineWidth: 1,
            },
            {
              text: `정상: ${data[1]}`,
              fillStyle: 'rgba(54, 162, 235, 0.5)',
              strokeStyle: 'rgba(54, 162, 235, 1)',
              lineWidth: 1,
            },
            {
              text: `불량: ${data[2]}`,
              fillStyle: 'rgba(255, 99, 132, 0.5)',
              strokeStyle: 'rgba(255, 99, 132, 1)',
              lineWidth: 1,
            },
          ];
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1,
      },
    },
  },
};

const createChart = () => {
  const ctx = chartRef.value.getContext('2d');
  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['전체', '정상', '불량'],
      datasets: [
        {
          data: [
            statisticsStore.statistics.totalCount,
            statisticsStore.statistics.normalCount,
            statisticsStore.statistics.errorCount,
          ],
          backgroundColor: [
            'rgba(75, 192, 192, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 99, 132, 0.5)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: chartOptions,
  });
};

onMounted(async () => {
  await statisticsStore.fetchStatistics();
  createChart();
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  min-height: 300px;
  padding: 10px;
}
</style>
