<template>
  <div class="card">
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
  background-color: $color-white-000;
  border-radius: 8px;
  min-height: 100%;
  min-width: 100%;

  &-body {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
}
</style>
