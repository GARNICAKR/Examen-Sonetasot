const routes = [
  {
    path: "/",
    component: () => import("src/layouts/Layaout.vue"),
    children: [
      { path: "", component: () => import("pages/Curp.vue") },
      { path: "Concluido", component: () => import("pages/Concluido.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
