<template>
  <div class="bg">
    <div class="container main">
      <div class="row">
        <div class="col-4 overview">
          <img
            src="https://thepixelcurve.com/html/edubin/images/logo-2.png"
            alt=""
          />
          <p>
            Gravida nibh vel velit auctor aliquetn quibibendum auci elit cons
            equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh
            vulputate.
          </p>
          <div class="social">
            <img src="@/assets/facebook.png" alt="">
            <img src="@/assets/twitter-round.png" alt="">
            <img src="@/assets/google-plus.png" alt="">
            <img src="@/assets/instagram-round.png" alt="">
          </div>
        </div>
        <div class="col-3 sitemap">
            <h6>Sitemap</h6>
            <ul>
                <li><img src="@/assets/right-arrow.png" alt=""> Home</li>
                <li><img src="@/assets/right-arrow.png" alt=""> About us</li>
                <li><img src="@/assets/right-arrow.png" alt=""> Courses</li>
                <li><img src="@/assets/right-arrow.png" alt=""> News</li>
                <li><img src="@/assets/right-arrow.png" alt=""> Event</li>
            </ul>
            <ul class="list-2nd">
                <li><img src="@/assets/right-arrow.png" alt=""> Gallery</li>
                <li><img src="@/assets/right-arrow.png" alt=""> Shop</li>
                <li><img src="@/assets/right-arrow.png" alt=""> Teachers</li>
                <li><img src="@/assets/right-arrow.png" alt=""> Support</li>
                <li><img src="@/assets/right-arrow.png" alt=""> Contact</li>
            </ul>
        </div>
        <div class="col-2 support">
            <h6>Support</h6>
            <ul>
                <li><img src="@/assets/right-arrow.png" alt=""> FAQS</li>
                <li><img src="@/assets/right-arrow.png" alt=""> Privacy</li>
                <li><img src="@/assets/right-arrow.png" alt=""> Policy</li>
                <li><img src="@/assets/right-arrow.png" alt=""> Support</li>
                <li><img src="@/assets/right-arrow.png" alt=""> Documentation</li>
            </ul>
        </div>
        <div class="col-3 contact">
            <h6>Contact Us</h6>
            <ul>
                <li><img src="@/assets/home.png" alt="">143 castle road 517 district, kiyev port south Canada</li>
                <li><img src="@/assets/telephone-yellow.png" alt="">+3 123 456 789</li>
                <li><img src="@/assets/email-yellow.png" alt="">info@yourmail.com</li>
            </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom-footer">
    <p>© Copyrights 2020 Edubin All rights reserved. </p>
    <p>Designed by <span>Pixelcurve</span></p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg {
  margin-top: 100px;
  background-color: #07294d;
}
.main{
    padding-top: 50px;
}
.overview p {
    color: #fff;
    padding-top: 15px;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
}
.social img{
    margin-right: 20px;
}

.sitemap h6{
    font-size: 18px;
    color: #fff;
    font-weight: 700;
}
.sitemap ul{
    float: left;
    padding-left: 0;
    list-style: none;
    color: #fff;
}
.sitemap li{
    margin-top: 10px;
}
.sitemap li img{
    vertical-align: baseline;
}
.list-2nd{
    margin-left: 20px;
}

.support h6{
    font-size: 18px;
    color: #fff;
    font-weight: 700;
}
.support ul{
    float: left;
    padding-left: 0;
    list-style: none;
    color: #fff;
}
.support li{
    margin-top: 10px;
}
.support li img{
    vertical-align: baseline;
}
.list-2nd{
    margin-left: 20px;
}
.contact h6{
    font-size: 18px;
    color: #fff;
    font-weight: 700;
}

.contact ul{
    padding-left: 0;
    list-style: none;
    color: #fff;
}
.contact li{
    margin-top: 10px;
}
.contact img{
    margin-right: 10px;
}
.bottom-footer{
    display: flex;
    justify-content: space-between;
    background-color: #021d3a;
    height: 75px;
}
.bottom-footer p{
    padding: 25px;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
}
.bottom-footer span{
    font-weight: 600;
}
</style>