import {createRouter, createWebHistory} from 'vue-router';

import IniciarSesion from './pages/IniciarSesion.vue';
import RegistroUsuario from './pages/RegistroUsuario.vue';
import Home from './pages/Home.vue';
import Minuta from './pages/Minuta.vue';
import PlanNutricional from './pages/PlanNutricional.vue';
import PlanificarMinuta from './pages/PlanificarMinuta.vue';
import Perfil from './pages/Perfil.vue';
import NotFound from './pages/NotFound.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect:'/login'},
        { path: '/login', component:IniciarSesion},
        { path: '/registro', component:RegistroUsuario},
        { path: '/home', component:Home},
        { path: '/plan', component:PlanNutricional},
        { path: '/planificar', component:PlanificarMinuta},
        { path: '/minuta', component:Minuta},
        { path: '/perfil', component:Perfil},
        { path: '/:notFound(.*)', component: NotFound},
    ]

});

export default router;