import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import VueTippy, { TippyComponent } from 'vue-tippy'

import Dropdown from './components/common/Dropdown'
import ListItem from './components/common/ListItem'

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
  faEdit,
  faBookOpen,
  faStar,
  faFlag,
  faCalendarPlus,
  faShoppingBasket,
  faHandHoldingHeart,
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
  faGamepad,
  faEdit,
  faBookOpen,
  faStar,
  faFlag,
  faCalendarPlus,
  faShoppingBasket,
  faHandHoldingHeart
)

Vue.use(VueTippy, {
  animation: 'fade',
})

Vue.component('dropdown', Dropdown)
Vue.component('list-item', ListItem)
Vue.component('tippy', TippyComponent)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
