import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced:true,
    state() {
        return{
            tienePlan:null,
            ultimaBusqueda:null,
            plan:{  
                desayuno: null,
                mediaManana: null,
                almuerzo: null,
                algo: null,
                cena: null,
                refrigerio: null
            },
        };
    },
    mutations,
    actions,
    getters
}