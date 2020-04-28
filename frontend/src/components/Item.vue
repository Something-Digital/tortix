<template>
  <li class="item">
    <h3 class="title">{{ title }}</h3>
    <img class="photo" :src="`img/${photo}`" alt="">
    <p class="city">{{ city }}</p>
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'Безымянный тортодел',
    },
    photo: {
      type: String,
      default: 'item-default-photo.jpg',
    },
    city: {
      type: String,
      default: 'Москва',
    },
  },
};
</script>

<style scoped>
.item {
  margin: 0 auto;
  padding: var(--common-padding);
}
</style>
