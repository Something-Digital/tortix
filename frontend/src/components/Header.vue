<template>
  <header class="header">
    <img src="img/logo.jpg" alt="">
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
  color: var(--main-title-color);
}
</style>
