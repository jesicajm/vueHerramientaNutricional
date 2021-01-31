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
    },
    comidasDia(state){
      const comidasDia = [];
      for(const comida in state.plan){
        if(comida[0] !== ''){
          comidasDia.push(comida);
        }   
      }
      return comidasDia;     
    }
}