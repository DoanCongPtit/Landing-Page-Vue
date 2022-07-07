<template>
  <TopHeader />
  <FixedMenu />
  <PresentCarousel />
  <SubSlide/>
  <AboutUs/>
  <ApplyTable/>
  <OurCourses/>
  <OurFacilities/>
  <FeaturedTeacher/>
  <PublicationList/>
</template>

<script>
import TopHeader from "./components/TopHeader.vue";
import FixedMenu from "./components/FixedMenu.vue";
import PresentCarousel from "./components/PresentCarousel.vue"
import SubSlide from "./components/SubSlide.vue"
import AboutUs from "./components/AboutUs.vue"
import ApplyTable from "./components/ApplyTable.vue"
import OurCourses from "./components/OurCourses.vue"
import OurFacilities from "./components/OurFacilities.vue"
import FeaturedTeacher from "./components/FeaturedTeacher.vue"
import PublicationList from "./components/PublicationList.vue"

export default {
  name: "App",
  components: {
    TopHeader,
    FixedMenu,
    PresentCarousel,
    SubSlide,
    AboutUs,
    ApplyTable,
    OurCourses,
    OurFacilities,
    FeaturedTeacher,
    PublicationList
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
