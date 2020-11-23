import { createApp } from 'vue';
import { createStore } from 'vuex';

import router from './router.js'
import App from './App.vue';

import Navegacion from './components/nav/Navegacion.vue';
import SelectIntolerancias from './components/SelectIntolerancias.vue';

const store = createStore({
    state() {
        return {
            isLoggedIn: false
        };
    },
    mutations:{
       setAuth(state, payload){
         state.isLoggedIn = payload.isAuth;
       }
    },
    actions:{
       login(context){
          context.commit('setAuth', {isAuth: true})
       },
       logout(context){
          context.commit('setAuth', {isAuth: false})
       }
    },
    getters:{
        usuarioEstaAutenticado(state){
            return state.isLoggedIn;
        }
    }
});


const app = createApp(App);

app.use(router);

app.use(store);

app.component('navegacion', Navegacion);

app.component('select-intolerancias', SelectIntolerancias);


app.mount('#app');
