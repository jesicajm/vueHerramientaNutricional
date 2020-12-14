import { createStore } from 'vuex';

import usuarioModule from './modules/usuario/index.js'
import minutaModule from './modules/minuta/index.js'
import planModule from './modules/plan/index.js'

const store = createStore({
    modules:{
        usuarios: usuarioModule,
        minuta: minutaModule,
        plan: planModule
    },
  
});


export default store;