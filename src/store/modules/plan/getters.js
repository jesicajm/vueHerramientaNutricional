export default {
    shouldUpdate(state){
       const ultimaBusqueda = state.ultimaBusqueda;
       if(!ultimaBusqueda){
           return true;
       }
       const currentTimeStamp = new Date().getTime();
       return (currentTimeStamp - ultimaBusqueda) / 1000 > 60; 
    },
    tienePlan(state){
      return state.tienePlan;
    },
    planUsuario(state){
      return state.plan;
    }
}