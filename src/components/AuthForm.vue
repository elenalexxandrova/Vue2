<template>
   <form class="auth_wrapper" @submit.prevent="handleSubmit">
      <div class="auth_block">
         <div class="auth_title">
            <span class="auth_title_span">Авторизация</span>
         </div>
         <div class="auth_form">
            <div class="auth_input">
               <div class="phone_form">
                  <div class="icon_wrapper">
                     <CallIcon class="icon" />
                  </div>
                  <div class="phone_input_n_title">
                     <span class="phone_title"> Логин или Телефон </span>
                     <input
                        v-model="form.username"
                        class="phone_input"
                        autocomplete="on"
                        placeholder="+7"
                        value="+7"
                     />
                  </div>
               </div>
               <div class="divider"></div>
            </div>
            <div class="auth_input">
               <div class="pswd_form">
                  <div class="icon_wrapper">
                     <LockerIcon class="icon" />
                  </div>
                  <input
                     v-model="form.password"
                     class="pswd_input"
                     autocomplete="on"
                     type="password"
                     placeholder="Пароль"
                  />
                  <div class="icon_wrapper">
                     <EyeOff class="icon" />
                  </div>
               </div>
               <div class="divider"></div>
            </div>
         </div>
         <Button type="submit"> Войти </Button>
      </div>
   </form>
</template>

<script lang="ts">
import Button from '../shared/ui/Button/ui/Button.vue'
import CallIcon from '../shared/assets/icons/CallIcon.vue'
import LockerIcon from '../shared/assets/icons/LockerIcon.vue'
import EyeOff from '../shared/assets/icons/Eye-off.vue'
export default {
   name: 'AuthForm',
   components: {
      Button,
      CallIcon,
      LockerIcon,
      EyeOff,
   },
   data() {
      return {
         form: {
            username: '',
            password: '',
         },
      }
   },
   methods: {
      handleSubmit() {
        console.log("Form submitted with:", this.form);
         this.$emit('submit', this.form)
      },
   },
}
</script>

<style lang="scss">
.auth_wrapper {
   width: 340px;
   height: 309px;
   display: flex;
   flex-direction: column;

   .auth_block {
      height: 290px;
      background-color: #ffffff;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      top: 19px;

      .auth_title {
         width: 308px;
         height: 56px;
         border-radius: 5px;
         background-color: $green-auth-color;
         display: flex;
         justify-content: center;
         align-items: center;
         position: relative;
         z-index: 10;
         top: -19px;

         .auth_title_span {
            font-size: 16px;
            font-weight: 500;
            line-height: 20px;
            text-align: center;
            color: #ffffff;
         }
      }

      .auth_form {
         margin-top: 30px;
         width: 300px;
         height: 120px;
         display: flex;
         flex-direction: column;
         gap: 8px;

         .auth_input {
            display: flex;
            flex-direction: column;

            .phone_form,
            .pswd_form {
               display: flex;
               gap: 8px;

               .icon_wrapper {
                  height: 40px;
                  padding: 8px 0px;

                  .icon {
                     margin-top: 17px;
                  }
               }

               .phone_input_n_title {
                  width: 244px;
                  display: flex;
                  flex-direction: column;

                  .phone_title {
                     font-size: 12px;
                     font-weight: 400;
                     line-height: 18px;
                     color: $green-main-color;
                  }
                  .phone_input {
                     font-family: 'Roboto';
                     font-size: 14px;
                     font-weight: 400;
                     line-height: 20px;
                     height: 20px;
                     padding: 8.5px 0px;
                     border: none;
                     color: $text-darkest-color;
                     outline: none;
                  }
               }

               .pswd_input {
                  width: 224px;
                  margin-top: 16px;
                  font-family: 'Roboto';
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 20px;
                  height: 20px;
                  padding: 8px 12px 8px 0;
                  border: none;
                  color: $text-darkest-color;
                  outline: none;
               }
            }
            .divider {
               height: 1px;
               width: 100%;
               background-color: $border-light-grey-color;
            }
         }
      }
      Button {
         margin-top: 28px;
         width: 110px;
         height: 36px;
      }
   }
}
</style>
