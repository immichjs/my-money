import { createApp } from "vue";
import { createPinia } from "pinia";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiCreditCard,
  HiLogout,
  BiGrid,
  MdTrendingup,
  OiArrowSwitch,
  LaWalletSolid,
  MdKeyboardarrowleftRound,
  HiSolidBell,
  IoTriangleSharp,
} from "oh-vue-icons/icons";
import App from "./App.vue";
import router from "./router";

import "./assets/css/tailwind.css";

const app = createApp(App);
const pinia = createPinia();

addIcons(
  OiArrowSwitch,
  MdTrendingup,
  BiCreditCard,
  LaWalletSolid,
  BiGrid,
  HiLogout,
  MdKeyboardarrowleftRound,
  HiSolidBell,
  IoTriangleSharp
);

app.component("v-icon", OhVueIcon);

app.use(pinia);
app.use(router);

app.mount("#app");
