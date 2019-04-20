import Vue from 'vue'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#00bcd4',
    secondary: '#3f51b5',
    accent: '#e91e63',
    error: '#f44336',
    warning: '#ff9800',
    info: '#ffeb3b',
    success: '#4caf50'
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
