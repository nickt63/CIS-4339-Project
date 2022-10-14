import { createRouter, createWebHistory } from "vue-router";
// import Summary from "@/views/Summary";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/clientadded",
    name: "ClientAdded",
    component: () => import("../views/ClientAdded.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/clients",
    name: "Clients",
    component: () => import("../components/ListClient.vue"),
  },
  {
    path: "/client-detail/:id",
    name: "ClientDetail",
    component: () => import("../components/ClientDetail.vue"),
  },
  {
    path: "/edit-client/:id",
    name: "EditClient",
    component: () => import("../components/EditClient.vue"),
  },
  {
    path: "/events",
    name: "Events",
    // component: Summary
    component: () => import("../views/Events.vue"),
  },
  {
    path: "/addevent",
    name: "EventForm",
    // component: Summary
    component: () => import("../components/EventForm.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/sprint3/"),
  routes,
});

export default router;
