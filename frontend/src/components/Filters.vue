<template>
  <aside class="filters">
    <h3>Фильтры:</h3>
    <InputFilter
      title="Город"
      :values="['Челябинск', 'Москва', 'Санкт-Петербург', 'Кременкуль']"
    />
    <p>Тип торта</p>
    <p>Доставка</p>
  </aside>
</template>

<script>
import InputFilter from '@/components/InputFilter.vue';

export default {
  name: 'Filters',
  components: {
    InputFilter,
  },
};
</script>

<style scoped>
.filters {
  padding: var(--common-padding);

  min-width: 240px;
  background: var(--gray-background);
}
</style>
