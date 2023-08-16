import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/DashboardView.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/DashboardView.vue"),
  },
  {
    path: "/cards",
    name: "cards",
    component: () =>
      import(/* webpackChunkName: "cards" */ "../views/CardsView.vue"),
  },
  {
    path: "/wallets",
    name: "wallets",
    component: () =>
      import(/* webpackChunkName: "wallets" */ "../views/WalletsView.vue"),
  },
  {
    path: "/transactions",
    name: "transactions",
    component: () =>
      import(
        /* webpackChunkName: "transactions" */ "../views/TransactionsView.vue"
      ),
  },
  {
    path: "/investments",
    name: "investments",
    component: () =>
      import(
        /* webpackChunkName: "investments" */ "../views/InvestmentsView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
