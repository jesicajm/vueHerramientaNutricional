export default {
    async registroPlan(context,payload){
      const graphqlQuery = {
         query: `
           mutation {
             guardarPlanNutricional(userInput: {
               desayuno:"${payload.desayuno}",
               mediaManana:"${payload.mediaManana}", 
               almuerzo:"${payload.almuerzo}",
               algo:"${payload.algo}",
               cena:"${payload.cena}",
               refrigerio:"${payload.refrigerio}"}){
                 desayuno
                 mediaManana
                 almuerzo
                 algo
                 cena
                 refrigerio
               }
           }
         `
       }; 

       const token = context.rootGetters['usuarios/token']

       console.log(graphqlQuery);
   
       const response = await fetch('http://localhost:3000/graphql', {
          method: 'POST',
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(graphqlQuery)
       });

      const responseData = await response.json();

       if(!response.ok){
         const error = new Error(responseData.message || 'Failed to authenticate!');
         throw error;
       }

       context.commit('registroPlan', payload);
       context.commit('setTienePlan');
    },
    async cargaPlanUsuario(context){
      const graphqlQuery = {
        query: `
         {
            planUsuario{
              desayuno
              mediaManana
              almuerzo
              algo
              cena
              refrigerio
            }
          }
        `
      }; 
      if(!context.getters.tienePlan && !context.getters.shouldUpdate){
         return;
      }
      
      const token = context.rootGetters['usuarios/token']

      const response = await fetch('http://localhost:3000/graphql', {
          method: 'POST',
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(graphqlQuery)
       });
      
      const responseData = await response.json(); 

      if(!response.ok){
         const error = new Error(responseData.message || 'Failed to authenticate!');
         throw error;
      }

      console.log(responseData);

      context.commit('setPlan', responseData.data.planUsuario);
      context.commit('setFetchTimestamp');
    }   
}