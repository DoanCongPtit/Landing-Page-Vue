<template>
  <form @submit="onSubmit" class="form">
    <div class="content">
      <h2>Create account</h2>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <input type="password" v-model="password" placeholder="Your Password" />
      <span class="alert" v-show="!isPasswordTrue">Password is not same</span>
      <input
        type="password"
        v-model="rePassword"
        placeholder="Repeat your password"
      />
      <span class="alert" v-show="!isPasswordTrue">Password is not same</span>
      <br />
      <input type="checkbox" class="check" id="fname" v-model="checkBox" />
      <label for="agree-term"
        ><span>I agree all statements in Terms of service</span></label
      >
      <span class="alert" v-show="!isTickedCheckBox"
        >Please tick check box</span
      >
      <br />
      <input type="submit" class="submit" value="Sign up" />
      <p>Have already an account ? <a href="#">Login here</a></p>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      rePassword: "",
      isPasswordTrue: true,
      checkBox: "",
      isTickedCheckBox: true,
    };
  },
  methods: {
    onSubmit: function (e) {
      e.preventDefault();
      if (!this.checkBox) {
        this.isTickedCheckBox = false;
        return;
      }
      if (this.password !== this.rePassword) {
        this.isPasswordTrue = false;
        return;
      }
      this.isPasswordTrue = true;
    },
  },
};
</script>

<style scoped>
.form {
  width: 60%;
  margin: 150px auto;
}
.content {
  background: #fff;
  border-radius: 10px;
  padding: 50px 55px;
  margin: 0 50px;
}
.content h2 {
  font-size: 36px;
  font-weight: 700;
}
.content input {
  margin-top: 30px;
  width: 100%;
  border: 1px solid #ebebeb;
  padding: 15px 20px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  color: #07294d;
}
.check {
  width: 5% !important;
}
.submit {
  width: 180px !important;
  height: 50px !important;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #ffc600;
  background-color: #ffc600;
  padding: 0 35px !important;
  font-size: 16px !important;
  font-family: "Montserrat", sans-serif;
  font-weight: 700 !important;
  line-height: 50px;
  border-radius: 5px;
  color: #07294d;
  cursor: pointer;
}
.content p {
  margin-top: 30px;
  color: #555;
  font-weight: 500;
}
.content a {
  text-decoration: none;
  font-weight: 700;
  color: #07294d;
}
.alert {
  color: red;
}
</style>