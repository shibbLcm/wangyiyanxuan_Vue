import Vue from "vue"
import VueRouter from "vue-router"

import Cart from "../pages/Cart/Cart.vue"
import Categorys from "../pages/Categorys/Categorys.vue"
import Index from "../pages/Index/Index.vue"
import KnowThings from "../pages/KnowThings/KnowThings.vue"
import Personal from "../pages/Personal/Personal.vue"

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:"/index",
      component:Index,
      meta:{
        showFooter:true
      }
    },
    {
      path:"/knowthings",
      component:KnowThings,
      meta:{
        showFooter:true
      }
    },
    {
      path:"/categorys",
      component:Categorys,
      meta:{
        showFooter:true
      }
    },
    {
      path:"/cart",
      component:Cart,
      meta:{
        showFooter:true
      }
    },
    {
      path:"/personal",
      component:Personal
    },
    {
      path:"/",
      redirect:"/index"
    }
  ]
})
