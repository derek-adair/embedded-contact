import "vee-validate/dist/vee-validate.js";

import { createApp } from "vue";
import BookAnAppointment from "./BookAnAppointment.vue";
import FleetContact from "./FleetContact.vue";

createApp(BookAnAppointment).mount("#book-an-appointment");
createApp(FleetContact).mount("#fleet-contact");
