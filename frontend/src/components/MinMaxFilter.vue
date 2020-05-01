<template>
  <label class="filter">
    <input
      type="range"
      class="filter-input"
      :list="title"
    >

    <datalist :id="title">
      <option
        :value="min"
        :label="min"
      />
      <option value="10" />
      <option
        :value="max"
        :label="max"
      />
    </datalist>
  </label>
</template>

<script>
export default {
  name: 'MinMaxFilter',
  props: {
    title: {
      type: String,
      default: null,
    },
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
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
