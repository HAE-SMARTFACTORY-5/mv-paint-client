import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { API_BASE_URL } from '@/config/config';

export const useStatisticsStore = defineStore('statistics', () => {
  const statistics = ref({
    totalCount: 0,
    normalCount: 0,
    errorCount: 0,
  });

  const fetchStatistics = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/papercups/statistics`);
      statistics.value = response.data;
    } catch (error) {
      console.error('통계 데이터 조회 실패:', error);
    }
  };

  return {
    statistics,
    fetchStatistics,
  };
});
