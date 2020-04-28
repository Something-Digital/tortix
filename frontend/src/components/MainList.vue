<template>
  <ul class="main-list">
    <Item
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :city="item.city"
    />
  </ul>
</template>

<script>
import Item from '@/components/Item.vue';

export default {
  name: 'MainList',
  components: {
    Item,
  },
  data: () => ({
    items: [
      {
        id: 'a1',
        title: 'John Doe',
        // photo: '',
        city: 'Челябинск',
      },
      {
        id: 'a2',
        title: 'Пашка Тортов',
        // photo: '',
        city: 'Сантьяго',
      },
      {
        id: 'a3',
        title: 'Инна Тортина',
        // photo: '',
        city: 'Кременкуль',
      },
      {
        id: 'a4',
      },
    ],
  }),
};
</script>

<style scoped>
.main-list {
  list-style-type: none;

  display: flex;
  flex-wrap: wrap;

  margin: 0;
  padding: 0;
}
</style>
