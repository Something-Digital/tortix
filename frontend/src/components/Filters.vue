<template>
  <aside class="filters">
    <h3>Фильтры:</h3>
    <InputFilter
      title="Город"
      :items="['Челябинск', 'Москва', 'Санкт-Петербург', 'Кременкуль']"
    />
    <InputFilter
      title="Тип торта"
      :items="['Вкусный', 'Невкусный']"
    />
    <InputFilter
      title="Доставка"
      :items="['Самовывоз', 'До двери', 'Забрать на почте']"
    />
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
