<template>
  <div>
    <TopHeader />
    <FixedMenu />
    <PresentCarousel />
    <SubSlide />
    <AboutUs />
    <ApplyTable />
    <OurCourses />
    <OurFacilities />
    <FeaturedTeacher />
    <PublicationList />
    <QuoteCard/>
    <LatestNews/>
    <SponsorSlider/>
    <MainFooter/>
    <a @click="scrollTop" v-show="visible" class="bottom-right scroll-btn">
      <img src="@/assets/scroll.png" alt=""
    /></a>
  </div>
</template>

<script>
import TopHeader from "../components/TopHeader.vue";
import FixedMenu from "../components/FixedMenu.vue";
import PresentCarousel from "../components/PresentCarousel.vue";
import SubSlide from "../components/SubSlide.vue";
import AboutUs from "../components/AboutUs.vue";
import ApplyTable from "../components/ApplyTable.vue";
import OurCourses from "../components/OurCourses.vue";
import OurFacilities from "../components/OurFacilities.vue";
import FeaturedTeacher from "../components/FeaturedTeacher.vue";
import PublicationList from "../components/PublicationList.vue";
import QuoteCard from "../components/QuoteCard.vue"
import LatestNews from "../components/LatestNews.vue"
import SponsorSlider from "../components/SponsorSlider.vue"
import MainFooter from "../components/MainFooter.vue"

export default {
  name: "MainPage",
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
    PublicationList,
    QuoteCard,
    LatestNews,
    SponsorSlider,
    MainFooter
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, 0);
      }, 500);
    },
    scrollListener: function () {
      this.visible = window.scrollY > 150;
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeUnmount: function () {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.scroll-btn{
  z-index: 1000;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  border-radius: 8px;
  padding: 10px;
  width: 40px;
  height: 40px;
  line-height: 35px;
  background-color: #ffc600;
}
.scroll-btn img{
  margin-bottom: 15px;
}
@media only screen and (max-width: 450px) {
  .scroll-btn{
    right: 210px;
  }
}
</style>
