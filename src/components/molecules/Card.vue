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
  min-height: 95%;
  padding: 10px;
}
</style>
