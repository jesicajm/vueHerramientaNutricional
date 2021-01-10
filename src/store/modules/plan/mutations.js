export default {
    registroPlan(state,payload){
        state.plan.desayuno = payload.desayuno;
        state.plan.mediaManana = payload.mediaManana; 
        state.plan.almuerzo = payload.almuerzo;
        state.plan.algo = payload.algo;
        state.plan.cena = payload.cena;
        state.plan.refrigerio = payload.refrigerio;
    },
    setPlan(state,payload){
        state.plan.desayuno = payload.desayuno;
        state.plan.mediaManana = payload.mediaManana; 
        state.plan.almuerzo = payload.almuerzo;
        state.plan.algo = payload.algo;
        state.plan.cena = payload.cena;
        state.plan.refrigerio = payload.refrigerio;
    },
    setTienePlan(state){
        state.TienePlan = true;
    },
    setFetchTimestamp(state){
       state.ultimaBusqueda = new Date().getTime();
    }
}