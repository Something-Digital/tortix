<template>
  <li class="item">
    <h3 class="title">
      {{ title }}
    </h3>
    <div class="photo-wrapper">
      <img
        class="photo"
        :src="`img/${photo}`"
        alt=""
      >
    </div>
    <p class="city">
      {{ city }}
    </p>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: var(--common-padding);
  width: 275px;
  height: 300px;
}
.photo-wrapper {
  width: 275px;
  height: 183px;
  position: relative;
}
.photo {
  max-width: 100%;
  max-height: 100%;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
