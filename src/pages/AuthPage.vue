<template>
   <div class="wrapper">
    <AuthForm @submit="handleLogin" class="auth-form-container"/>
   </div>
</template>

<script lang="ts">
import AuthForm from '../components/AuthForm.vue';
import router from '../router';

export default {
   name: 'AuthPage',
   components: {
    AuthForm
   },
   methods: {
    handleLogin(form) {
        this.$store
        .dispatch('handleAuth', form)
        .then(() => {
          router.push({ name: 'RequestList' });
        })
    }
   }
}
</script>


<style lang="scss">
.wrapper {
    width: 100%;
    height: 100vh;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('src/shared/assets/img/Авторизаяция_МДО.jpg');
    background-size: cover;
    background-position: center;

    &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0000004D; 
    z-index: 1; 
  }
  .auth-form-container {
    position: relative;
    z-index: 2;
  }
}
</style>