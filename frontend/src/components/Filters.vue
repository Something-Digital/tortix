<template>
  <aside class="filters">
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: calc(2*var(--common-padding)) var(--common-padding);
  background: var(--gray-background);
}
@media screen and (min-width: 900px) {
  .filters {
    display: block;
  }
}
</style>
