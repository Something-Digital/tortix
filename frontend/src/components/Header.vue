<template>
  <header class="header">
    <img class="logo" src="img/logo.jpg" alt="">
    <h1 class="title">{{ title }}</h1>
    <div class="search">Найти</div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: var(--common-padding);
  background: var(--main-background-color);
}

.title {
  font-family: 'Amatic SC', cursive;
  font-size: 72px;
  line-height: 72px;
  text-transform: uppercase;
  color: var(--main-title-color);
  margin: 0;
}
</style>
