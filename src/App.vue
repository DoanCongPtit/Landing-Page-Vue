<template>
  <TopHeader />
  <FixedMenu />
</template>

<script>
import TopHeader from "./components/TopHeader.vue";
import FixedMenu from "./components/FixedMenu.vue";

export default {
  name: "App",
  components: {
    TopHeader,
    FixedMenu,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>
