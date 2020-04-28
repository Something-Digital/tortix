<template>
  <header class="header">
    <h1 class="title">{{ title }}</h1>
    <div class="search">Search</div>
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
h1 {
  margin: 40px 0 0;
}
</style>
