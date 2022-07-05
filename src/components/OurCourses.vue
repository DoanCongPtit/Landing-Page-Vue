<template>
  <div class="main-content">
    <div class="container">
      <h5 class="about-us">About us</h5>
      <div class="line"></div>
      <h2 class="main-title">Featured courses</h2>
      <div class="main-slide">
        <Splide
            :options="{
              type: 'loop',
              perPage: 3,
              focus: 'center',
              gap: 10,
              pagination: false
            }"
          >
            <SplideSlide>
              <CourseCard />
            </SplideSlide>
            <SplideSlide>
              <CourseCard />
            </SplideSlide>
            <SplideSlide>
              <CourseCard />
            </SplideSlide>
          </Splide>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import CourseCard from "./CourseCard.vue";

export default {
    components: {
    Splide,
    SplideSlide,
    CourseCard
  },
};
</script>

<style scoped>
.main-content {
  margin: 120px 0;
  background: #edf0f2;
}
.about-us {
  color: #07294d;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 18px;
}
.container{
    padding: 120px 0;
}
.line {
  width: 35px;
  height: 2px;
  background-color: yellow;
  bottom: 0;
  left: 0;
}
.main-title {
  font-size: 48px;
  color: black;
  padding-top: 10px;
  font-weight: 700;
}
.main-slide{
    margin-top: 50px;
}
:deep(.splide__arrow--next){
    position: relative;
    float: right;
    bottom: 50px;
    left: -70px;
    border-radius: unset;
    border-radius: 5px
}
:deep(.splide__arrow--prev){
    position: relative;
    float: right;
    bottom: 50px;
    left: -150px;
    border-radius: unset;
    border-radius: 5px
}
:deep(.splide__arrow:hover){
    background-color: yellow;
}
:deep(.splide__arrow:hover){
    background-color: yellow;
}

</style>