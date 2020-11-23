import {createRouter, createWebHistory} from 'vue-router';

import Home from './pages/Home.vue';
import Minuta from './pages/Minuta.vue';
import NotFound from './pages/NotFound.vue';
import Perfil from './pages/Perfil.vue';
import PlanNutricional from './pages/PlanNutricional.vue';
import RegistroUsuario from './pages/RegistroUsuario.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect:'/home'},
        { path: '/registro', component:RegistroUsuario},
        { path: '/home', component:Home},
        { path: '/plan', component:PlanNutricional},
        { path: '/minuta', component:Minuta},
        { path: '/perfil', component:Perfil},
        { path: '/:notFound(.*)', component: NotFound},
    ]

});

export default router;