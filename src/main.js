import { createApp } from 'vue';

import App from './App.vue';
import TienePlan from './components/TienePlan.vue';
import TablaPlan from './components/TablaPlan.vue';
import SelectIntolerancias from './components/SelectIntolerancias.vue';
import RegistroUsuario from './components/RegistroUsuario.vue';

const app = createApp(App);

app.component('tiene-plan', TienePlan);
app.component('tabla-plan', TablaPlan);
app.component('select-intolerancias', SelectIntolerancias);
app.component('registro-usuario',RegistroUsuario);

app.mount('#app');
