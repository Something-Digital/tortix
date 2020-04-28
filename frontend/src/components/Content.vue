<template>
  <main class="content">
    <Sorting />
    <MainList />
  </main>
</template>

<script>
import Sorting from '@/components/Sorting.vue';
import MainList from '@/components/MainList.vue';

export default {
  name: 'Content',
  components: {
    Sorting,
    MainList,
  },
};
</script>

<style scoped>
.content {
  padding: var(--common-padding);
  width: 100%;
}
</style>
