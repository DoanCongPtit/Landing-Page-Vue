<template>
<div class="bg-color">
  <TopHeader />
  <FixedMenu />
  <div class="bg">
    <div class="overlay"></div>
    <div class="breadcrumb">
      <h2>Register</h2>
      <span
        ><a href="#" class="home">Home</a> /
        <a href="#" class="register">Register</a></span
      >
    </div>
  </div>
  <RegisterForm />
  <MainFooter />
</div>
  
</template>

<script>
import RegisterForm from "../components/RegisterForm.vue";
import TopHeader from "../components/TopHeader.vue";
import FixedMenu from "../components/FixedMenu.vue";
import MainFooter from "../components/MainFooter.vue";
export default {
  components: {
    RegisterForm,
    TopHeader,
    FixedMenu,
    MainFooter,
  },
};
</script>

<style scoped>
.bg-color{
  background-color: #edf0f2;
}
.bg {
  position: relative;
  height: 320px;
  width: 1005;
  background-image: url("https://thepixelcurve.com/html/edubin/images/page-banner-1.jpg");
  background-size: 100% 100%;
}
.overlay {
  position: absolute;
  opacity: 0.8;
  top: 0;
  height: 100%;
  background: #07294d; /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: 0.5s ease;
  color: white;
  font-size: 20px;
  padding: 20px;
  z-index: 1;
  text-align: center;
}
.breadcrumb {
  width: 200px;
  z-index: 2;
  padding-left: 15px;
  padding-top: 100px;
}
.breadcrumb h2 {
  z-index: 2;
  font-size: 52px;
  color: #fff;
}

.breadcrumb span {
  cursor: pointer;
  z-index: 2;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
}
.home {
  text-decoration: none;
  color: #fff;
}
.register {
  text-decoration: none;
  color: #ffc600;
}
</style>