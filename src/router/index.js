import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import BuyContainer from "../views/BuyContainer.vue"
import Careers from "../views/Careers.vue"
import Contact from "../views/Contact.vue"
import About from "../views/About.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/buy-container",
      name: "Buy Container",
      component: BuyContainer,
    },
    {
      path: "/careers",
      name: "Careers",
      component: Careers,
    },
    {
      path: "/contact-us",
      name: "Contact Us",
      component: Contact,
    },
    {
      path: "/about-us",
      name: "About",
      component: About,
    },
  ],
});

export default router;
