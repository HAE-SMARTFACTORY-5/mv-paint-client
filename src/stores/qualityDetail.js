import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { API_BASE_URL } from '@/config/config';

export const useQualityDetailStore = defineStore('qualityDetail', () => {
  const qualityData = ref(null);
  const selectedPapercupId = ref(null);

  const fetchQualityDetail = async (papercupId) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/papercups/detail/${papercupId}`,
      );
      qualityData.value = {
        ...response.data,
        line: response.data.line || 'P01', // 기본값 설정
        process: response.data.process || '10A', // 기본값 설정
      };
    } catch (error) {
      console.error('품질 상세 정보를 가져오는데 실패했습니다:', error);
    }
  };

  const setSelectedPapercupId = (id) => {
    selectedPapercupId.value = id;
  };

  return {
    qualityData,
    selectedPapercupId,
    fetchQualityDetail,
    setSelectedPapercupId,
  };
});
