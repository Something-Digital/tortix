<template>
  <form class="search">
    <input
      class="search-input"
      type="search"
    >
    <button class="search-submit">
      <img
        src="img/svg/search-24px.svg"
        alt=""
      >
    </button>
  </form>
</template>

<script>
export default {
  name: 'Search',
};
</script>

<style scoped>
.search {
  --full-size: calc(var(--main-icon-size) + 2*var(--element-padding));
  --half-size: calc(var(--full-size) / 2);
  position: relative;
}
.search-input {
  height: var(--full-size);
  line-height: var(--full-size);
  padding:
    var(--element-padding)
    calc(var(--full-size) + var(--element-padding))
    var(--element-padding)
    var(--half-size);
  font-size: var(--font-size);
  border: 0;
  border-radius: var(--half-size);
  outline: transparent;
  color: var(--main-text-color);
}
.search-submit {
  width: var(--full-size);
  height: var(--full-size);
  padding: 0;
  border: 0;
  background: transparent;
  position: absolute;
  border-radius: var(--half-size);
  text-align: center;
  right: 0;
  top: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: .1s;
}
.search-submit:hover {
  background: var(--gray-background);
}
.search-submit > img {
  width: var(--main-icon-size);
  height: var(--main-icon-size);
  display: block;
  transition: .1s;
}
.search-submit:hover > img {
  width: calc(var(--main-icon-size) * 1.2);
  height: calc(var(--main-icon-size) * 1.2);
}
</style>
