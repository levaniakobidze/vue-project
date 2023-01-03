import { createWebHistory, createRouter } from "vue-router";
import Home from './pages/Home/home.vue'
import Cart from './pages/Cart/cart.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },    
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;