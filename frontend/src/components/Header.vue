<template>
  <header class="header">
    <img
      class="logo"
      src="img/logo.svg"
      alt=""
    >
    <h1 class="title">
      {{ title }}
    </h1>
    <Search />
  </header>
</template>

<script>
import Search from '@/components/Search.vue';

export default {
  name: 'Header',
  components: {
    Search,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
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

.logo {
  height: 72px;
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
