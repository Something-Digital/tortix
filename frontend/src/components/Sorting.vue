<template>
  <section class="sorting">
    <label
      v-for="item in items"
      :key="item.id"
      class="sort-type"
      :class="{ active: item.isActive }"
      @click="itemClicked(item.id)"
    >
      <input
        id=""
        type="checkbox"
        name="price"
        :disabled="!item.isActive"
        class="sort-type__input"
      >
      <div class="sort-type__label">{{ item.title }}</div>
      <img
        src="img/svg/sort-24px.svg"
        alt=""
        class="sort-type__icon"
      >
    </label>
  </section>
</template>

<script>
export default {
  name: 'Sorting',
  data: () => ({
    items: [
      {
        id: 1, title: 'Цена', isActive: true, ascending: true,
      },
      {
        id: 2, title: 'Рейтинг', isActive: false, ascending: true,
      },
      {
        id: 3, title: 'Фамилия', isActive: false, ascending: true,
      },
    ],
  }),
  methods: {
    itemClicked(id) {
      this.items.find((item) => item.isActive === true).isActive = false;
      this.items.find((item) => item.id === id).isActive = true;
    },
  },
};
</script>

<style scoped>
.sorting {
  display: flex;
  justify-content: center;
}
.sort-type {
  display: flex;
  cursor: pointer;
  padding: 0 var(--element-padding);
  opacity: .5;
}
.sort-type:not(:first-of-type) {
  margin-left: var(--common-padding);
}
.sort-type__input {
  display: none;
}
.sort-type__label {
  height: var(--main-icon-size);
  line-height: var(--main-icon-size);
}
.sort-type__icon {
  width: var(--main-icon-size);
  height: var(--main-icon-size);
  display: block;
}
.active {
  opacity: 1;
}
</style>
