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
            pagination: false,
            breakpoints: {
                450: {
                  perPage: 1,
                  arrows: false
                },
              },
          }"
        >
          <SplideSlide v-for="course in items" :key="course.id">
            <CourseCard :course="course"/>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import axios from "axios";
import CourseCard from "./CourseCard.vue";

export default {
    components: {
    Splide,
    SplideSlide,
    CourseCard
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get("https://60d4611a61160900173cb070.mockapi.io/courses");
        this.items = response.data;
        console.log("/////////////");
        console.log(JSON.stringify(this.items));
        console.log("/////////////");
      } catch (err) {
        console.log(err);
      }
    },
  }
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
.container {
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
.main-slide {
  margin-top: 50px;
}
:deep(.splide__arrow--next) {
  position: relative;
  float: right;
  bottom: 50px;
  left: -70px;
  border-radius: unset;
  border-radius: 5px;
}
:deep(.splide__arrow--prev) {
  position: relative;
  float: right;
  bottom: 50px;
  left: -150px;
  border-radius: unset;
  border-radius: 5px;
}
:deep(.splide__arrow:hover) {
  background-color: yellow;
}
:deep(.splide__arrow:hover) {
  background-color: yellow;
}
@media only screen and (max-width: 450px) {
  .container{
    padding-top: 50px;
    margin-left: 20px;
  }
}
</style>