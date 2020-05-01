<template>
  <label
    v-if="items && items.length > 0"
    class="filter"
  >
    <div
      v-if="title"
      class="title"
    >{{ title }}</div>
    <input :list="title">
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

</style>
