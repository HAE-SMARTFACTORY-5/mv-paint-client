<template>
  <DefaultTemplate>
    <div class="main-container col">
      <section class="table-section col-6">
        <span class="card-title">품질 검사 내역</span>
        <Card>
          <QualityList />
        </Card>
      </section>
      <section class="detail-section col-6">
        <span class="card-title">품질 검사 상세 내역</span>
        <Card>
          <QualityDetail />
        </Card>
      </section>
    </div>
  </DefaultTemplate>
</template>

<script setup>
import DefaultTemplate from '@components/templates/DefaultTemplate.vue';
import Card from '@components/molecules/Card.vue';
import QualityList from '@components/organisms/quality/QualityList.vue';
import QualityDetail from '@components/organisms/quality/QualityDetial.vue';
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  gap: 10px;
  min-height: 100%;
}

.table-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-title {
  font-family: 'Noto Sans KR';
  font-size: 1.5rem;
  font-weight: 600;
  color: $color-black-700;
  margin-inline: 10px;
}
</style>
