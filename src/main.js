import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css"

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

/* Set up font awesome free version */
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js"

// import "./assets/main.css";
// import "bootstrap/dist/css/bootstrap.min.css"

// import { createApp } from "vue";
// import { createPinia } from "pinia";

// import App from "./App.vue";
// import router from "./router";

// /* Set up font awesome free version */
// /* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

// /* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// /* import specific icons */
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

// /* add icons to the library */
// library.add(faUserSecret)

// const app = createApp(App);

// app.use(createPinia());
// app.use(router);
// app.component("font-awesome-icon", FontAwesomeIcon)

// app.mount("#app");

// import "bootstrap/dist/js/bootstrap.js"