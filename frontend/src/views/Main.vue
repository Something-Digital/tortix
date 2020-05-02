<template>
  <div class="main">
    <Filters />
    <Content />
  </div>
</template>

<script>
import Filters from '@/components/Filters.vue';
import Content from '@/components/Content.vue';

export default {
  components: {
    Filters,
    Content,
  },
};
</script>

<style scoped>
.main {

}
@media screen and (min-width: 900px) {
  .main {
    flex: 1;
    display: flex;
  }
}
</style>
