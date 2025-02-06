<template>
  <DefaultTemplate>
    <div class="quality">
      <section class="quality__section quality__section--left">
        <div class="quality__graph">
          <span class="quality__title">품질 검사 결과</span>
          <div class="quality__card-wrapper">
            <Card>
              <QualityGraph />
            </Card>
          </div>
        </div>
        <div class="quality__table">
          <span class="quality__title">품질 검사 내역</span>
          <div class="quality__card-wrapper">
            <Card>
              <QualityList />
            </Card>
          </div>
        </div>
      </section>
      <section class="quality__section quality__section--right">
        <span class="quality__title">품질 검사 상세 내역</span>
        <div class="quality__card-wrapper">
          <Card>
            <QualityDetail />
          </Card>
        </div>
      </section>
    </div>
  </DefaultTemplate>
</template>

<script setup>
import DefaultTemplate from '@components/templates/DefaultTemplate.vue';
import Card from '@components/molecules/Card.vue';
import QualityList from '@components/organisms/quality/QualityList.vue';
import QualityGraph from '@components/organisms/quality/QualityGraph.vue';
import QualityDetail from '@components/organisms/quality/QualityDetial.vue';
</script>

<style lang="scss" scoped>
.quality {
  display: flex;
  gap: 10px;
  min-height: 100%;
  width: 100%;

  &__section {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &--left {
      width: 50%;
    }

    &--right {
      width: 50%;
    }
  }

  &__graph {
    display: flex;
    flex-direction: column;
    height: 50%;
    gap: 10px;
  }

  &__table {
    display: flex;
    flex-direction: column;
    height: 50%;
    gap: 10px;
  }

  &__title {
    font-family: 'Noto Sans KR';
    font-size: 1.5rem;
    font-weight: 600;
    color: $color-black-700;
    margin-inline: 10px;
  }

  &__card-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
}
</style>
