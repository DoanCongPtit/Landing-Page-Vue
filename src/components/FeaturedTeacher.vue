<template>
  <div class="container main-content">
    <div class="row">
      <div class="col-md-5 left-el">
        <h5 class="about-us">About us</h5>
        <div class="line"></div>
        <h2 class="main-title">Meet Our teachers</h2>
        <p>
          Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem
          quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed
          odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum
          velit. Nam nec tellus a odio tincidunt mauris. auci elit cons equat
          ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
          a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio
          tincidunt mauris
        </p>
        <button type="button" class="btn">Career with us</button>
      </div>
      <div class="col-md-7 right-el">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="teacher-card">
                <img src="@/assets/teacher_1.jpg" alt="" />
                <div class="info">
                  <h6>Mark Alen</h6>
                  <p>Vice Chancellor</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="teacher-card">
                <img src="@/assets/teacher_2.jpg" alt="" />
                <div class="info">
                  <h6>Rebeka Alig</h6>
                  <p>Pro Chancellor</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row bottom-row">
            <div class="col-md-6">
              <div class="teacher-card">
                <img src="@/assets/teacher_3.jpg" alt="" />
                <div class="info">
                  <h6>Hanna Bein</h6>
                  <p>Aerobics head</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="teacher-card">
                <img src="@/assets/teacher_4.jpg" alt="" />
                <div class="info">
                  <h6>David Card</h6>
                  <p>Pro Chancellor</p>
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
  margin-top: 70px;
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
.left-el p {
  padding-top: 30px;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: #505050;
}
.btn {
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
.btn:hover {
  background-color: #07294d;
  color: yellow;
}
.teacher-card img {
  width: 270px;
  height: 305px;
}
.teacher-card img:hover {
  transform: scale(1.2);
}
.teacher-card {
  height: 305px;
  overflow: hidden;
}
.info {
  position: relative;
  bottom: 100px;
  left: 0;
  right: 0;
  width: 80%;
  height: 70px;
  background-color: #fff;
  border-radius: 5px;
  margin: 0 auto;
  padding: 15px;
}
.info h6 {
  color: black;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
}

.info p {
  font-size: 14px;
  color: #8a8a8a;
  text-align: center;
}
.bottom-row{
  margin-top: 20px;
}
@media only screen and (max-width: 450px) {
 .right-el{
   margin-top: 50px;
 }
 .teacher-card{
  margin-bottom: 20px;
 }
}
</style>