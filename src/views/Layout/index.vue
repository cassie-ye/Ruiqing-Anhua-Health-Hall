<template>
  <div>
    <header-black></header-black>
    <p>layout</p>
    <RouterView></RouterView>
  </div>
</template>

<script>
import HeaderBlack from '@/components/HeaderBlack.vue';
export default {
  components: { HeaderBlack },};
</script>

<style>
</style>