<template>
  <div class="chart-container">
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStatisticsStore } from '@/stores/statistics';

const statisticsStore = useStatisticsStore();
const chartRef = ref(null);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: false,
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
            'rgba(75, 192, 192, 0.5)', // 전체
            'rgba(54, 162, 235, 0.5)', // 정상
            'rgba(255, 99, 132, 0.5)', // 불량
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
