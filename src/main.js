// import './assets/main.css'
import { createRouter, createWebHashHistory } from "vue-router";
import { createGtm } from "@gtm-support/vue-gtm";
import { createApp } from "vue";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import ReDirect from "./pages/Redirect.vue";
// import Liff from "./pages/LIFF.vue";
//#####

const routes = [
  {
    path: "/",
    //redirect: "https://liff.line.me/1656824759-lQKpOazZ", // web site B
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/redirect",
    name: "redirect",
    component: ReDirect,
  },
  // {
  //   path: "/liff",
  //   name: "liff",
  //   component: Liff,
  // },
];
const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     {
//       path: "/",
//       component: Home,
//     },
//     {
//       path: "/about",
//       component: About,
//     },
//   ],
// });

//createApp(App).use(router).mount("#app");




// createApp(App)
//   .use(router)
//   .use(
//     createGtm({
//       id: "GTM-WQC9MPLJ", // GTM ID
//     })
//   )
//   .mount("#app");


createApp(App)
  .use(router)
  .use(
    createGtm({
      id: "GTM-WQC9MPLJ", // GTM ID
    })
  ).use(
    createGtm({
      id: "GTM-M4CGM7TC", // GTM ID
    })
  ).mount("#app");


// const app = createApp(App);
// app.use(router);
// app.mixin({
//   mounted() {
//     const script1 = document.createElement('script');
//     script1.src = `https://www.googletagmanager.com/gtm.js?id=GTM-M4CGM7TC`;
//     script1.async = true;
//     document.head.appendChild(script1);

//     const script2 = document.createElement('script');
//     script2.src = `https://www.googletagmanager.com/gtm.js?id=GTM-WQC9MPLJ`;
//     script2.async = true;
//     document.head.appendChild(script2);
//   }
// });
// app.mount('#app');





//
// createApp(App)
//   .use(
//     createGtm({
//       id: "GTM-W4PF2FQ2", // GTM ID
//       vueRouter: router,
//     })
//   )
//   .mount("#app");
