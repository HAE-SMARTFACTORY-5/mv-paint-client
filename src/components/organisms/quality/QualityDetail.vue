<template>
  <div class="quality-detail">
    <div
      v-if="qualityDetailStore.qualityData"
      class="quality-detail__container"
    >
      <div class="quality-detail__image">
        <img
          :src="qualityDetailStore.qualityData.imageUrl"
          alt="품질 검사 이미지"
          class="quality-detail__image-content"
        />
      </div>
      <div class="quality-detail__info">
        <div class="quality-detail__info-item">
          <span class="quality-detail__label">라인:</span>
          <span class="quality-detail__value">{{
            qualityDetailStore.qualityData.line
          }}</span>
        </div>

        <div class="quality-detail__info-item">
          <span class="quality-detail__label">공정:</span>
          <span class="quality-detail__value">{{
            qualityDetailStore.qualityData.process
          }}</span>
        </div>

        <div class="quality-detail__info-item">
          <span class="quality-detail__label">ID:</span>
          <span class="quality-detail__value">{{
            qualityDetailStore.qualityData.papercupId
          }}</span>
        </div>
        <div class="quality-detail__info-item">
          <span class="quality-detail__label">검사 결과:</span>
          <span
            class="quality-detail__value"
            :class="{
              'quality-detail__value--error':
                qualityDetailStore.qualityData.errorStatus,
            }"
          >
            {{ qualityDetailStore.qualityData.errorStatus ? '불량' : '정상' }}
          </span>
        </div>
        <div
          v-if="qualityDetailStore.qualityData.errorStatus"
          class="quality-detail__info-item"
        >
          <span class="quality-detail__label">에러 유형:</span>
          <div class="quality-detail__error-list">
            <span
              v-for="(error, index) in qualityDetailStore.qualityData.errorType"
              :key="index"
              class="quality-detail__error-tag"
            >
              {{ error }}
            </span>
          </div>
        </div>
        <div class="quality-detail__info-item">
          <span class="quality-detail__label">검사 시간:</span>
          <span class="quality-detail__value">
            {{ formatDate(qualityDetailStore.qualityData.createdAt) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useQualityDetailStore } from '@/stores/qualityDetail';

const qualityDetailStore = useQualityDetailStore();

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleString('ko-KR');
};
</script>

<style lang="scss" scoped>
.quality-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
  }

  &__image {
    flex: 1;
    min-width: 300px;
    min-height: 400px;
    max-width: 300px;
    max-height: 400px;

    &-content {
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 80px;
    }
  }

  &__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__info-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  &__label {
    font-weight: bold;
    min-width: 100px;
  }

  &__value {
    &--error {
      color: #ff4444;
      font-weight: bold;
    }
  }

  &__error-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__error-tag {
    background-color: #ffe0e0;
    color: #242424;
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 14px;
  }
}
</style>
