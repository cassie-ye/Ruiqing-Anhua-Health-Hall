<template>
  <div>
    <HeaderBlack></HeaderBlack>
    <HeaderSearch></HeaderSearch>
    <HeaderCate></HeaderCate>
    <p>layout</p>
    <RouterView></RouterView>
  </div>
</template>

<script>
import HeaderCate from "./components/HeaderCate.vue";
export default {
  name: "Layout",
  components: {
    HeaderCate,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>