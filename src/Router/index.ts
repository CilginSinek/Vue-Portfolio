import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Repos from '../components/Repos.vue';
import Contact from '../components/Contact.vue';


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name:"home",
      component: Home,
    },
    {
      path: "/About",
      name:"about",
      component: About,
    },
    {
        path: "/Repos",
        name:"repos",
        component: Repos,
    },
    {
        path: "/Contact",
        name: "contact",
        component: Contact,
    },
  ],
});
