import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router"
import App from "./App.vue"
import Home from "./Home.vue";

import WebDevelopment from "./WebDevelopment.vue";
import Devops from "./Devops.vue";
import StaffAugmentation from "./StaffAugmentation.vue";
import RemediationServices from "./RemediationServices.vue";

const routes = [
      { name: 'home',  path: '/', component: Home },
      { name: 'web-development',  path: '/web-development', component: WebDevelopment },
      { name: 'devops',  path: '/devops', component: Devops },
      { name: 'staff-augmentation',  path: '/staff-augmentation', component: StaffAugmentation },
      { name: 'remediation-services',  path: '/remediation-services', component: RemediationServices },
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

app.mount('#rfp-contact')
