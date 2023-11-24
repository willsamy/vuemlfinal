import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PrimeVue from "primevue/config";

// Importando os estilos do PrimeVue
import 'primevue/resources/themes/saga-blue/theme.css'; // tema padrão
import 'primevue/resources/primevue.min.css';           // css principal
import 'primeicons/primeicons.css';                     // ícones

import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/styles.css";

const app = createApp(App);

app.use(OpenLayersMap /* options */);
app.use(PrimeVue);
app.use(router);
app.use(store);
app.mount('#app');
