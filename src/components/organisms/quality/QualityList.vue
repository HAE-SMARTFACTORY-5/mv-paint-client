<template>
  <div class="quality-list">
    <el-table
      :data="qualityStore.qualityList"
      border
      class="quality-list__table"
      :header-cell-class-name="'quality-list__header'"
      @row-click="handleRowClick"
      height="310"
      :highlight-current-row="true"
    >
      <el-table-column prop="date" label="날짜" min-width="25%" sortable />
      <el-table-column prop="sn" label="S/N" min-width="20%" align="center" />
      <el-table-column
        prop="line"
        label="라인"
        min-width="20%"
        align="center"
      />
      <el-table-column
        prop="process"
        label="공정"
        min-width="20%"
        align="center"
      />
      <el-table-column
        prop="result"
        label="결과"
        min-width="20%"
        align="center"
      >
        <template #default="{ row }">
          <el-tag
            :type="row.result === 'PASS' ? 'success' : 'danger'"
            class="quality-list__result-tag"
          >
            {{ row.result }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useQualityStore } from '@/stores/quality';
import { useQualityDetailStore } from '@/stores/qualityDetail';

const qualityStore = useQualityStore();
const qualityDetailStore = useQualityDetailStore();

const handleRowClick = (row) => {
  qualityDetailStore.setSelectedPapercupId(row.sn);
  qualityDetailStore.fetchQualityDetail(row.sn);
};

onMounted(() => {
  qualityStore.fetchQualityList();
});
</script>

<style lang="scss" scoped>
.quality-list {
  width: 100%;
  height: 100%;
  padding: 10px;

  &__table {
    width: 100%;
  }

  &__header {
    font-weight: 700;
  }

  &__result-tag {
    width: 60px;
    text-align: center;
  }
}

:deep(.el-table__row.current-row) {
  background-color: #f5f7fa !important;
}

:deep(.table-header) {
  font-weight: 700;
}
</style>
