<template>
  <aside class="filters">
    <h3>Фильтры:</h3>
    <p>Город</p>
    <p>Тип торта</p>
    <p>Доставка</p>
  </aside>
</template>

<script>
export default {
  name: 'Filters',
};
</script>

<style scoped>
.filters {
  padding: var(--common-padding);

  min-width: 240px;
  background: #ccc;
}
</style>
