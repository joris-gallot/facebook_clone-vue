import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import VueTippy, { TippyComponent } from 'vue-tippy'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faPlus,
  faBell,
  faCaretDown,
  faHome,
  faDesktop,
  faStore,
  faUsers,
  faGamepad,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faFacebookMessenger,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faSearch,
  faFacebook,
  faFacebookMessenger,
  faPlus,
  faBell,
  faCaretDown,
  faHome,
  faDesktop,
  faStore,
  faUsers,
  faGamepad
)

Vue.use(VueTippy, {
  animation: 'fade',
})

Vue.component('tippy', TippyComponent)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
