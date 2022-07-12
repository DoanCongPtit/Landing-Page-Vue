<template>
  <div class="sub-slide">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h2>Best platform to learn everything</h2>
        </div>
        <div class="col-md-8 slide">
          <Splide
            :options="{
              type: 'loop',
              perPage: 3,
              gap: 0,
              pagination: false,
              breakpoints: {
                450: {
                  perPage: 1,
                },
              },
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

.slide {
  margin: 80px 0;
}

:deep(.splide__arrow--prev) {
  left: -60px;
}
@media only screen and (max-width: 450px) {
  .sub-slide {
    margin-top: -80px;
  }
  .sub-slide h2 {
    font-size: 24px;
    margin: 40px 0;
  }
  .slide {
    margin: unset;
  }
  :deep(.splide__arrow--prev) {
    left: unset;
  }
  :deep(.is-active) {
    text-align: center;
  }
}
</style>