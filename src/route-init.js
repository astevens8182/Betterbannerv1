import AClasses from "@/components/AClasses.vue";
import EClasses from "@/components/EClasses.vue";
import Home from "@/components/Home.vue";
import Login from "@/components/Login.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
/* Map path to component */
const routeTable = [
  { path: "/login", component: Login },
  { path: "/home", component: Home},
  { path: "/eclasses", component: EClasses},
  { path: "/aclasses", component: AClasses }
];

const AppRouter = new VueRouter({ routes: routeTable, mode: "history" ,base: process.env.NODE_ENV === "production"
? "/~steveale/CIS371/"
: "/"});
export { AppRouter };