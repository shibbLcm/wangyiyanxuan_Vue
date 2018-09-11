import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import {Button} from "mint-ui"
import "mint-ui/lib/style.min.css"
import VueLazyLoad from "vue-lazyload"
import store from "./vuex/store"

import "./mock/mockServer"

/*import HeaderTop from "./components/HeaderTop/HeaderTop.vue"*/

// Vue.component("HeaderTop",HeaderTop)
Vue.component(Button.name,Button)
Vue.use(VueLazyLoad,{
  error:"./static/images/knowThings/error.png",
  loading:"./static/images/knowThings/loading.gif"
})

export default new Vue({
  el:"#app",
  /*components:{
    App
  },
  template:"<App/>"*/
  render:h=>h(App),
  router,
  store
})
