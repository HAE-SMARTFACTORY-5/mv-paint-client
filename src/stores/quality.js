import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

import { API_BASE_URL } from '@/config/config';

export const useQualityStore = defineStore('quality', () => {
  const qualityList = ref([
    {
      date: '2024-03-15 10:01',
      sn: 111111,
      line: 'P01',
      process: '10A',
      result: 'PASS',
    },

    {
      date: '2024-03-14 10:02',
      sn: 222222,
      line: 'P01',
      process: '10A',
      result: 'PASS',
    },

    {
      date: '2024-03-13 10:03',
      sn: 333333,
      line: 'P01',
      process: '10A',
      result: 'NG',
    },
  ]);

  const fetchQualityList = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/papercups`);
      qualityList.value = response.data.map((item) => ({
        date: new Date(item.createdAt).toLocaleString(),
        sn: item.papercupId,
        line: 'P01',
        process: '10A',
        result: item.errorStatus ? 'NG' : 'PASS',
      }));
    } catch (error) {
      console.error('품질 데이터 조회 실패:', error);
    }
  };

  return {
    qualityList,
    fetchQualityList,
  };
});
