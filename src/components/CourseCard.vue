<template>
  <div class="course-card">
    <div class="main-img">
      <img
        :src="imageUrl"
        alt=""
      />
    </div>
    <div class="price">
      <span>{{course.price}}</span>
    </div>
    <div class="main-content">
      <div class="rating">
        <img v-for="rate in course.rate" :key="rate" src="@/assets/star.png" alt="" />
        <span>({{course.rate_quantity}} reviews)</span>
      </div>
      <h4>{{course.name}}</h4>
    </div>
    <div class="teacher">
      <img src="@/assets/teacher_1.jpg" alt="" />
      <span class="name">{{course.teacher}}</span>
      <img class="reaction" src="@/assets/user.png" alt="">
      <span>{{course.total_enrolled}}</span>
      <img class="reaction" src="@/assets/heart.png" alt="">
      <span>{{course.rate_quantity}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["course"],
  data() {
    return {
      imageUrl: this.course.image,
    };
  },
};
</script>

<style scoped>
.course-card {
  width: 290px;
  height: 495px;
  background-color: #fff;
}
.main-img img {
  height: 197px;
  width: 290px;
}
.main-img img:hover {
  transform: scale(1.2);
}
.main-img:hover {
  overflow: hidden;
}

.price {
  position: relative;
  right: -150px;
  top: -20px;
  font-size: 14px;
  color: #07294d;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  width: 55px;
  height: 55px;
  line-height: 55px;
  border-radius: 50%;
  background-color: #ffc600;
  text-align: center;
}
.main-content {
  height: 130px;
  padding: 0 25px 25px 25px;
  border-bottom: 1px solid #e0e0e0;
}
.rating img {
  padding-bottom: 6px;
}
.rating span {
  margin-left: 10px;
  font-size: 13px;
  color: #000;
}
h4 {
  font-weight: 600;
  font-size: 24px;
  color: #000;
  padding-top: 15px;
}
h4:hover {
  color: #ffc600;
}
.teacher{
    margin-top: 20px;
    line-height: 35px;
    padding-left: 25px;
}
.teacher img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.name{
    margin-left: 10px;
    font-size: 15px;
    color: #24486e;
    font-weight: 700;
}
.reaction{
    margin-left: 10px;
    width: 18px !important;
    height: 18px !important;
    margin-bottom: 10px;
}
</style>