<template>
  <div class="container main">
    <h5 class="about-us">Latest News</h5>
    <div class="line"></div>
    <h2 class="main-title">From the news</h2>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 left-el">
          <img
          class="thumbnail"
            src="https://thepixelcurve.com/html/edubin/images/news/n-1.jpg"
            alt=""
          />
          <div>
            <img src="@/assets/calendar.png" alt="" />
          <span class="timestamp"> 2 December 2018</span>
          <span class="author">By Adam Linn</span>
          <h3>Tips to grade high cgpa in university life</h3>
          <p>
            Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem
            quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed
            odio sit amet nibh vulputate cursus a sit amet mauris. Morbi
            accumsan ipsum velit. Nam nec tellus a odio tincidunt .
          </p>
          </div>
          
        </div>
        <div class="col-md-6">
          <div class="container-fluid right-el">
            <div class="row">
              <div class="col-md-4">
                <img
                  src="https://thepixelcurve.com/html/edubin/images/news/ns-1.jpg"
                  alt=""
                />
              </div>
              <div class="col-md-8">
                <img src="@/assets/calendar.png" alt="" />
                <span class="timestamp"> 2 December 2018</span>
                <span class="author">By Adam Linn</span>
                <h3>Tips to grade high cgpa in university life</h3>
                <p>
                  Gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons  vel.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <img
                  src="https://thepixelcurve.com/html/edubin/images/news/ns-2.jpg"
                  alt=""
                />
              </div>
              <div class="col-md-8">
                <img src="@/assets/calendar.png" alt="" />
                <span class="timestamp"> 2 December 2018</span>
                <span class="author">By Adam Linn</span>
                <h3>Tips to grade high cgpa in university life</h3>
                <p>
                  Gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons  vel.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <img
                  src="https://thepixelcurve.com/html/edubin/images/news/ns-3.jpg"
                  alt=""
                />
              </div>
              <div class="col-md-8">
                <img src="@/assets/calendar.png" alt="" />
                <span class="timestamp"> 2 December 2018</span>
                <span class="author">By Adam Linn</span>
                <h3>Tips to grade high cgpa in university life</h3>
                <p>
                  Gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons  vel.
                </p>
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
.main {
  margin-top: 100px;
}
.about-us {
  color: #07294d;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 18px;
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
.left-el span {
  margin-left: 5px;
  font-size: 14px;
  color: #8a8a8a;
}
.author {
  margin-left: 20px !important;
}
.left-el h3 {
  font-size: 24px;
  color: #000;
  padding-bottom: 20px;
  padding-top: 10px;
  font-weight: 700;
}
.left-el p {
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: #505050;
}

.right-el .col-8{
    padding-left: 50px;
}
.right-el span {
  margin-left: 5px;
  font-size: 14px;
  color: #8a8a8a;
}

.right-el h3 {
  font-size: 24px;
  color: #000;
  padding-bottom: 20px;
  padding-top: 10px;
  font-weight: 700;
}
.right-el p {
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: #505050;
}
@media only screen and (max-width: 450px) {
  .thumbnail{
    height: 132px;
    width: 170px;
  }
  .right-el{
    padding: unset;
  }
}
</style>