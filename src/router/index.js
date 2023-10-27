import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: () => import("@/views/index.vue"),
      children: [
        {
          path: "",
          component: () => import("@/views/Home/home.vue")
        },
        {
          path: "/home",
          component: () => import("@/views/Home/home.vue")
        },
        {
          path: "/trade",
          component: () => import("@/views/Trade/trade.vue"),
          children: [
            {
              path: "",
              component: () => import("@/views/Trade/components/optional.vue")
            },
            {
              path: "/optional",
              component: () => import("@/views/Trade/components/optional.vue")
            },
            {
              path:"/usdt",
              component:()=>import("@/views/Trade/components/usdt.vue")
            },
            {
              path:"/btc",
              component:()=>import("@/views/Trade/components/btc.vue")
            },
            {
              path:"/eth",
              component:()=>import("@/views/Trade/components/eth.vue")
            }
          ]
        },
        {
          path: "/contract",
          component: () => import("@/views/Contract/contract.vue")
        },
        {
          path: "/mine",
          component: () => import("@/views/Mine/mine.vue")
        }
      ]
    },

  ]
})

export default router
