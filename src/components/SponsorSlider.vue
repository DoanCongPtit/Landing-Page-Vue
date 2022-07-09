<template>
  <div class="bg">
    <div class="container main-slide">
      <Splide
        :options="{
          type: 'loop',
          perPage: 4,
          arrows: false,
          pagination: false,
        }"
      >
        <SplideSlide>
          <img
            src="https://thepixelcurve.com/html/edubin/images/patnar-logo/p-1.png"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://thepixelcurve.com/html/edubin/images/patnar-logo/p-2.png"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://thepixelcurve.com/html/edubin/images/patnar-logo/p-3.png"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://thepixelcurve.com/html/edubin/images/patnar-logo/p-4.png"
            alt=""
          />
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
export default {
  components: {
    Splide,
    SplideSlide,
  },
};
</script>

<style scoped>
.bg {
  margin-top: 150px;
  height: 300px;
  background-color: #edf0f2;
}
.main-slide{
  padding-top: 30px;
}
</style>