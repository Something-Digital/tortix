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
    <MinMaxFilter
      title="Цена за кг"
      :min="10"
      :max="5000"
    />
  </aside>
</template>

<script>
import InputFilter from '@/components/InputFilter.vue';
import MinMaxFilter from '@/components/MinMaxFilter.vue';

export default {
  name: 'Filters',
  components: {
    InputFilter,
    MinMaxFilter,
  },
};
</script>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 var(--common-padding) var(--common-padding) 0;
  background: var(--gray-background);
}
@media screen and (min-width: 900px) {
  .filters {
    display: block;
  }
}
</style>
