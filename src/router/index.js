import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FavoriteView from "../views/FavoriteView.vue";
import CartView from "../views/CartView.vue";
import UserView from "../views/UserView";

const routes = [
   {
      path: "/",
      name: "home",
      component: HomeView,
   },
   {
      path: "/favorite",
      name: "favorite",
      component: FavoriteView,
   },
   {
      path: "/cart",
      name: "cart",
      component: CartView ,
   },
   {
      path: "/user",
      name: "user",
      component: UserView
   },
   // {
   //    path: "/favorite",
   //    name: "favorite",
   //    component: () => import("../views/FavoriteView.vue"),
   // },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
   linkActiveClass: "active",
   linkExactActiveClass: "exact-active",
});

export default router;
