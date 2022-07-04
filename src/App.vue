<template>
  <TopHeader />
  <FixedMenu />
  <PresentCarousel />
  <SubSlide/>
</template>

<script>
import TopHeader from "./components/TopHeader.vue";
import FixedMenu from "./components/FixedMenu.vue";
import PresentCarousel from "./components/PresentCarousel.vue"
import SubSlide from "./components/SubSlide.vue"

export default {
  name: "App",
  components: {
    TopHeader,
    FixedMenu,
    PresentCarousel,
    SubSlide
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
