import Vue from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './router/index.ts'
import {store} from './store/store.ts'

new Vue({
   router,
   store,
   render: (h) => h(App),
}).$mount('#app')
