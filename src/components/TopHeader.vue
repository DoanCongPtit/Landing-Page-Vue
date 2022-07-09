<template>
  <div class="header">
    <div class="left-el">
      <img src="@/assets/email.png" alt="" />
      <span class="mail">info@yoursite.com</span>

      <img src="@/assets/telephone.png" alt="" class="telephone" />
      <span>123-456-7890 </span>
    </div>
    <div class="right-el">
      <span>Follow Us: </span>
      <img src="@/assets/fb.png" alt="" />
      <img src="@/assets/twitter.png" alt="" />
      <img src="@/assets/social.png" alt="" />
      <img src="@/assets/instagram.png" alt="" />
      <a href="#">Login </a>
      /
      <router-link :to="{ name: 'Register' }"
        ><a href="#"> Register</a></router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  color: white;
  background-color: #07294d;
  align-items: center;
}
.header img {
  height: 16px;
  width: 16px;
}
.left-el {
  display: flex;
  justify-content: space-around;
  margin-left: 20px;
}
.mail {
  margin-left: 5px;
}
.telephone {
  margin-left: 15px;
}
.right-el {
  margin-right: 20px;
  display: flex;
  justify-content: space-around;
  gap: 8px;
}
.header span {
  margin-left: 3px;
}
.header a:link {
  color: #ffc600;
  text-decoration: none;
}
.header a:visited {
  color: #ffc600;
}

@media only screen and (max-width: 900px) {
  .left-el {
    display: none;
  }
  .header {
    justify-content: center;
  }
}
</style>