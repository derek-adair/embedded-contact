import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router"
import App from "./App.vue"
import Contact from "./Contact.vue";
import AltContact from "./AltContact.vue";
import Home from "./Home.vue";

const routes = [
      { name: 'home',  path: '/', component: Home },
      { name: 'contact',  path: '/contact', component: Contact },
      { name: 'alt-contact', path: '/alt', component: AltContact }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')
