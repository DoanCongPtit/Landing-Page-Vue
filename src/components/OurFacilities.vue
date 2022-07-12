<template>
  <div class="main-content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 left-el">
          <div class="btn">
            <a
              class="pop-up"
              href="https://www.youtube.com/watch?v=bRRtdzJH1oE"
            >
              <img src="@/assets/arrow.png" alt=""
            /></a>
          </div>
        </div>
        <div class="col-md-6 right-el">
          <div class="feature">
            <h3>Our Facilities</h3>
            <div class="feature-card">
              <div class="container">
                <div class="row">
                  <div class="col-4">
                    <img src="@/assets/facilites_book.png" alt="" />
                  </div>
                  <div class="col-8">
                    <h4>Global Certificate</h4>
                    <p>
                      Gravida nibh vel velit auctor aliquetn auci elit cons
                      solliazcitudirem sem quibibendum sem nibhutis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="feature-card">
              <div class="container">
                <div class="row">
                  <div class="col-4">
                    <img src="@/assets/facilites_support.png" alt="" />
                  </div>
                  <div class="col-8">
                    <h4>Alumni Support</h4>
                    <p>
                      Gravida nibh vel velit auctor aliquetn auci elit cons
                      solliazcitudirem sem quibibendum sem nibhutis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="feature-card">
              <div class="container">
                <div class="row">
                  <div class="col-4">
                    <img src="@/assets/facilites_book.png" alt="" />
                  </div>
                  <div class="col-8">
                    <h4>Books & Library</h4>
                    <p>
                      Gravida nibh vel velit auctor aliquetn auci elit cons
                      solliazcitudirem sem quibibendum sem nibhutis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-content {
  width: 100%;
  height: 700px;
  background-repeat: no-repeat;
  background-image: url("https://thepixelcurve.com/html/edubin/images/bg-1.jpg");
  background-size: auto 100%;
}
.btn {
  margin-top: 200px;
  margin-left: 150px;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  font-size: 24px;
  background-color: #ffc600;
  color: #07294d;
  border-radius: 50%;
}
.btn img {
  vertical-align: unset;
}
.right-el {
  height: 700px;
  background-color: #07294d !important;
  opacity: 0.8;
}
.feature {
  padding: 50px;
}
.feature h3 {
  font-size: 36px;
  color: #fff;
  padding-bottom: 15px;
  font-weight: 700;
}
.feature-card h4 {
  font-size: 24px;
  color: #fff;
  padding-bottom: 15px;
  font-weight: 700;
}
.feature-card p {
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: #fff;
}
@media only screen and (max-width: 450px) {
  .main-content{
    height: 890px;
    position: relative;
  }
  .feature{
    padding: unset !important;
    opacity: 0.8;
  }
  .left-el{
    position: absolute;
    z-index: 2;
    bottom: 20px;
  }
  .right-el{
    background-color: unset !important;
  }
  .container-fluid{
    background-color: #07294d !important;
    height: 100%;
    opacity: 0.8;
  }
  h3{
    margin-top: 50px;
  }
}
</style>