<template>
  <div class="container">
    <h5 class="about-us">About us</h5>
    <div class="row">
      <div class="col-md-6 left-el">
        <div class="line"></div>
        <h2 class="main-title">Welcome to Edubin</h2>
        <p class="left-content">
          Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem
          quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed
          odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum
          velit. Nam nec tellus a odio tincidunt mauris. auci elit cons equat
          ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
          a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio
          tincidunt mauris
        </p>
        <button type="button" class="btn">Learn more</button>
      </div>
      <div class="col-md-6">
        <div class="right-el">
          <h3>Upcoming events</h3>
          <div class="list-content">
            <img src="@/assets/calendar.png" alt="" />
            <span class="timestamp"> 2 December 2018</span>
            <h4>Campus clean workshop</h4>
            <div class="time-location">
              <img src="@/assets/clock.png" alt="" />
              <span>10:00 Am - 3:00 Pm</span>
              <img src="@/assets/location.png" alt="" class="right-icon" />
              <span>Rc Auditorim</span>
            </div>
          </div>

          <div class="list-content">
            <img src="@/assets/calendar.png" alt="" />
            <span class="timestamp"> 2 December 2018</span>
            <h4>Tech Summit</h4>
            <div class="time-location">
              <img src="@/assets/clock.png" alt="" />
              <span>10:00 Am - 3:00 Pm</span>
              <img src="@/assets/location.png" alt="" class="right-icon" />
              <span>Rc Auditorim</span>
            </div>
          </div>

          <div class="list-content">
            <img src="@/assets/calendar.png" alt="" />
            <span class="timestamp"> 2 December 2018</span>
            <h4>Environment conference</h4>
            <div class="time-location">
              <img src="@/assets/clock.png" alt="" />
              <span>10:00 Am - 3:00 Pm</span>
              <img src="@/assets/location.png" alt="" class="right-icon" />
              <span>Rc Auditorim</span>
            </div>
          </div>
        </div>
        <div class="bottom-bg">
          <img
            src="https://thepixelcurve.com/html/edubin/images/about/bg-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  margin-top: 65px;
  height: 600px;
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
.left-content {
  padding-top: 30px;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: #505050;
  margin: 0;
}
.btn{
    margin-top: 55px;
    background-color: yellow;
    color: #07294d;
    cursor: pointer;
    font-weight: 500;
    padding: 0 35px;
    font-size: 16px;
    font-weight: 700;
    line-height: 50px;
}
.btn:hover{
    background-color: #07294d;
    color: yellow;
}

.right-el {
  background-color: rgba(255, 255, 255, 0.95);
  padding-left: 50px;
}
.list-content {
  margin: 25px 0;
  border-bottom: 1px solid #cecece;
}
.list-content span {
  margin-left: 10px;
}
h3 {
  font-size: 36px;
  color: black;
  padding-bottom: 5px;
  font-weight: 700;
  margin: 0;
}
.timestamp {
  font-size: 14px;
  color: #8a8a8a;
}
h4 {
  padding-top: 5px;
  padding-bottom: 10px;
  color: black;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}
h4:hover {
  color: yellow;
}
.time-location span {
  font-size: 14px;
  color: #8a8a8a;
}
.right-icon {
  margin-left: 15px;
}
.bottom-bg {
  position: relative;
  top: -250px;
  right: -50px;
  z-index: -2;
}
.bottom-bg img {
  height: 400px;
  width: 400px;
}
</style>