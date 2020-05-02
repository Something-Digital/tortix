<template>
  <label
    v-if="items && items.length > 0"
    class="filter"
  >
    <input
      :list="title"
      :placeholder="title"
      class="filter-input"
    >
    <datalist :id="title">
      <option
        v-for="item in items"
        :key="item"
        :value="item"
      />
    </datalist>
  </label>
</template>

<script>
export default {
  name: 'InputFilter',
  props: {
    title: {
      type: String,
      default: null,
    },
    items: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style scoped>
.filter {
  --full-size: calc(var(--main-icon-size) + 2*var(--element-padding));
  --half-size: calc(var(--full-size) / 2);
  display: block;
  margin-top: var(--common-padding);
  margin-left: var(--common-padding);
}
@media screen and (min-width: 900px) {
  .filter {
    margin-top: var(--common-vertical-margin);
  }
}
.filter-input {
  height: var(--main-icon-size);
  line-height: var(--main-icon-size);
  padding:
    var(--element-padding)
    var(--element-padding)
    var(--element-padding)
    var(--half-size);
  font-size: var(--font-size);
  border: 0;
  border-radius: var(--half-size);
  outline: transparent;
  color: var(--main-text-color);
}
</style>
