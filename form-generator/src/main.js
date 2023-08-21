import "vee-validate/dist/vee-validate.js";

import { createApp } from "vue";
import Contact from "./Contact.vue";
import AltContact from "./AltContact.vue";

createApp(Contact).mount("#form1");
createApp(AltContact).mount("#form2");
