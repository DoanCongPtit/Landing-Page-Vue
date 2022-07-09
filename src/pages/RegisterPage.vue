<template>
  <TopHeader />
  <FixedMenu />
  <RegisterForm />
  <MainFooter />
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
</style>