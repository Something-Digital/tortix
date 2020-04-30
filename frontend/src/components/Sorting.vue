<template>
  <section class="sorting">
    <label
      v-for="item in items"
      :key="item.id"
      class="sort-type"
      :class="{ active: item.isActive }"
      @click="itemClicked($event, item)"
    >
      <input
        v-model="item.descending"
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
        :class="{ descending: item.descending }"
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
        id: 1, title: 'Цена', isActive: true, descending: false,
      },
      {
        id: 2, title: 'Рейтинг', isActive: false, descending: false,
      },
      {
        id: 3, title: 'Фамилия', isActive: false, descending: false,
      },
    ],
  }),
  methods: {
    itemClicked(e, item) {
      if (item.isActive) return;
      e.preventDefault();
      // eslint-disable-next-line no-param-reassign
      this.items.forEach((el) => { el.isActive = false; });
      // eslint-disable-next-line no-param-reassign
      item.isActive = true;
    },
  },
};
</script>

<style scoped>
.sorting {
  --font-size: calc(var(--main-icon-size) - var(--common-padding));
  display: flex;
  justify-content: center;
}
.sort-type {
  display: flex;
  cursor: pointer;
  padding: 0 var(--element-padding);
  opacity: .5;
  user-select: none;
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
  font-size: var(--font-size);
}
.sort-type__icon {
  width: var(--main-icon-size);
  height: var(--main-icon-size);
  display: block;
  transition: .15s;
}
.active {
  opacity: 1;
}
.descending {
  transform: scaleY(-1);
}
</style>
