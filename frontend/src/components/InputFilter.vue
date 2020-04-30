<template>
  <label
    v-if="value && values.length > 0"
    class="filter"
  >
    <div
      v-if="title"
      class="title"
    >{{ title }}</div>
    <input
      list="ice-cream-flavors"
      name="ice-cream-choice"
    >
    <datalist id="ice-cream-flavors">
      <option
        v-for="value in values"
        :key="value"
        :value="value"
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
    values: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style scoped>

</style>
