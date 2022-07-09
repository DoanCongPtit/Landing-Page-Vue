<template>
  <div class="main">
    <div class="overlay"></div>
    <div class="container content">
      <h5 class="tag">Testimonial</h5>
      <div class="line"></div>
      <h2 class="main-title">What they say</h2>
      <div class="slider">
        <Splide
          :options="{
            arrows: false,
          }"
        >
          <SplideSlide>
            <div class="container-fluid">
              <div class="row">
                <div class="col-6">
                  <div class="container quote-card">
                    <div class="row">
                      <div class="col-4 quote-img">
                        <img
                          src="https://thepixelcurve.com/html/edubin/images/testimonial/t-1.jpg"
                          alt=""
                        />
                        <div class="icon">
                          <img src="@/assets/quote.png" alt="" />
                        </div>
                      </div>
                      <div class="col-8">
                        <p>
                          Aliquetn sollicitudirem quibibendum auci elit cons
                          equat ipsutis sem nibh id elit. Duis sed odio sit amet
                          sem nibh id elit sollicitudirem
                        </p>
                        <h6>Rubina Helen</h6>
                        <span>Bsc, Engineering</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="container quote-card">
                    <div class="row">
                      <div class="col-4 quote-img">
                        <img
                          src="https://thepixelcurve.com/html/edubin/images/testimonial/t-2.jpg"
                          alt=""
                        />
                        <div class="icon">
                          <img src="@/assets/quote.png" alt="" />
                        </div>
                      </div>
                      <div class="col-8">
                        <p>
                          Aliquetn sollicitudirem quibibendum auci elit cons
                          equat ipsutis sem nibh id elit. Duis sed odio sit amet
                          sem nibh id elit sollicitudirem
                        </p>
                        <h6>Rubina Helen</h6>
                        <span>Bsc, Engineering</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="container-fluid">
              <div class="row">
                <div class="col-6">
                  <div class="container quote-card">
                    <div class="row">
                      <div class="col-4 quote-img">
                        <img
                          src="https://thepixelcurve.com/html/edubin/images/testimonial/t-1.jpg"
                          alt=""
                        />
                        <div class="icon">
                          <img src="@/assets/quote.png" alt="" />
                        </div>
                      </div>
                      <div class="col-8">
                        <p>
                          Aliquetn sollicitudirem quibibendum auci elit cons
                          equat ipsutis sem nibh id elit. Duis sed odio sit amet
                          sem nibh id elit sollicitudirem
                        </p>
                        <h6>Rubina Helen</h6>
                        <span>Bsc, Engineering</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="container quote-card">
                    <div class="row">
                      <div class="col-4 quote-img">
                        <img
                          src="https://thepixelcurve.com/html/edubin/images/testimonial/t-2.jpg"
                          alt=""
                        />
                        <div class="icon">
                          <img src="@/assets/quote.png" alt="" />
                        </div>
                      </div>
                      <div class="col-8">
                        <p>
                          Aliquetn sollicitudirem quibibendum auci elit cons
                          equat ipsutis sem nibh id elit. Duis sed odio sit amet
                          sem nibh id elit sollicitudirem
                        </p>
                        <h6>Rubina Helen</h6>
                        <span>Bsc, Engineering</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="container-fluid">
              <div class="row">
                <div class="col-6">
                  <div class="container quote-card">
                    <div class="row">
                      <div class="col-4 quote-img">
                        <img
                          src="https://thepixelcurve.com/html/edubin/images/testimonial/t-2.jpg"
                          alt=""
                        />
                        <div class="icon">
                          <img src="@/assets/quote.png" alt="" />
                        </div>
                      </div>
                      <div class="col-8">
                        <p>
                          Aliquetn sollicitudirem quibibendum auci elit cons
                          equat ipsutis sem nibh id elit. Duis sed odio sit amet
                          sem nibh id elit sollicitudirem
                        </p>
                        <h6>Rubina Helen</h6>
                        <span>Bsc, Engineering</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="container quote-card">
                    <div class="row">
                      <div class="col-4 quote-img">
                        <img
                          src="https://thepixelcurve.com/html/edubin/images/testimonial/t-1.jpg"
                          alt=""
                        />
                        <div class="icon">
                          <img src="@/assets/quote.png" alt="" />
                        </div>
                      </div>
                      <div class="col-8">
                        <p>
                          Aliquetn sollicitudirem quibibendum auci elit cons
                          equat ipsutis sem nibh id elit. Duis sed odio sit amet
                          sem nibh id elit sollicitudirem
                        </p>
                        <h6>Rubina Helen</h6>
                        <span>Bsc, Engineering</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
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
.main {
  margin-top: 150px;
  position: relative;
  width: 100%;
  height: 560px;
  background-image: url("https://thepixelcurve.com/html/edubin/images/bg-2.jpg");
  z-index: 1;
}
.overlay {
  position: absolute;
  opacity: 1;
  top: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: 0.5s ease;
  color: white;
  font-size: 20px;
  padding: 20px;
  z-index: -1;
  text-align: center;
}

.tag {
  padding-top: 115px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 18px;
}
.line {
  width: 35px;
  height: 2px;
  background-color: white;
  bottom: 0;
  left: 0;
}
.main-title {
  font-size: 48px;
  color: white;
  padding-top: 10px;
  font-weight: 700;
}
.quote-card {
  padding-top: 40px;
}
.icon {
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #ffc600;
  border-radius: 50%;
  color: #07294d;
  font-size: 18px;
  position: relative;
  top: -110px;
  left: 67px;
}
.quote-img {
  margin-top: 40px;
}
.icon img {
  margin-bottom: 8px;
}
.quote-card p {
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: white;
}
.quote-card h6 {
  font-size: 16px;
  font-weight: 700;
  color: white;
}
.quote-card span {
  font-size: 18px;
  font-weight: 500;
  color: white;
}
:deep(.splide__pagination) {
  margin-top: 30px;
}
</style>