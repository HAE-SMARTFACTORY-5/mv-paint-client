<template>
  <div class="table-container">
    <el-table
      :data="qualityStore.qualityList"
      border
      style="width: 100%"
      :header-cell-class-name="'table-header'"
      @row-click="handleRowClick"
      height="280"
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
          <el-tag :type="row.result === 'PASS' ? 'success' : 'danger'">
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

const qualityStore = useQualityStore();
const selectedUser = ref(null);

const handleRowClick = (row) => {
  selectedUser.value = row;
};

onMounted(() => {
  qualityStore.fetchQualityList();
});
</script>

<style scoped>
.table-container {
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.selected-info {
  margin-top: 20px;
  padding: 15px;
  background: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.el-table {
  margin-bottom: 20px;
}

/* Result tag styling */
.el-tag {
  width: 60px;
  text-align: center;
}
:deep(.table-header) {
  font-weight: 700;
}
</style>
