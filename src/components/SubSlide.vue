<template>
  <div class="sub-slide">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <h2>Best platform to learn everything</h2>
        </div>
        <div class="col-8 slide">
          <Splide
            :options="{
              type: 'loop',
              perPage: 3,
              focus: 'center',
              gap: 0,
              pagination: false
            }"
          >
            <SplideSlide>
              <img src="@/assets/sub-slide-1.png" alt="Sample 1" />
            </SplideSlide>
            <SplideSlide>
              <img src="@/assets/sub-slide-2.png" alt="Sample 2" />
            </SplideSlide>
            <SplideSlide>
              <img src="@/assets/sub-slide-3.png" alt="Sample 3" />
            </SplideSlide>
          </Splide>
        </div>
      </div>
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
.sub-slide {
  width: 90%;
  height: 330px;
  margin: 0 auto;
  border-radius: 1px solid red;
  background-color: #07294d;
  border-radius: 10px;
  z-index: 5;
  position: relative;
  margin-top: -150px;
}
h2 {
  font-size: 36px;
  color: white;
  padding: 0 50px;
  font-weight: 700;
  margin: 80px 0;
}

.slide{
  margin: 80px 0;
}

:deep(.splide__arrow--prev){
    left: -60px;
}
</style>