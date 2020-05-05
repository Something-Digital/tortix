<template>
  <div id="app">
    <Header title="Заказать торт" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Main',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
@import url('vars.css');
body {
  margin: 0;
}
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-text-color);

  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
