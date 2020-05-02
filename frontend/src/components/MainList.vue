<template>
  <ul class="main-list">
    <Item
      v-for="item in items"
      :id="item.id"
      :key="item.id"
      :title="item.title"
      :photo="item.photo"
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
        photo: 'cake0.jpg',
        city: 'Челябинск',
      },
      {
        id: 'a2',
        title: 'Пашка Тортов',
        photo: 'cake1.jpg',
        city: 'Сантьяго',
      },
      {
        id: 'a3',
        title: 'Инна Тортина',
        photo: 'cake2.jpg',
        city: 'Кременкуль',
      },
      {
        id: 'a4',
        photo: 'cake3.webp',
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
