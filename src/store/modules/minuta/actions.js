export default {
    async planificarMinuta(context,payload){
        const graphqlQuery = {
            query: `
              mutation {
                guardarPlanMinuta(inputMinuta: {
                    fechaInicial: "${payload.fechaInicial}",
                    fechaFinal: "${payload.fechaFinal}",
                    intolerancias: "${payload.intolerancias}"}){
                      fechaInicial
                      fechaFinal
                      intolerancias
                    }
              }`
                        
        
        }
        const token = context.rootGetters['usuarios/token'];

        const response = await fetch('http://localhost:3000/graphql', {
          method: 'POST',
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(graphqlQuery)
        });

        const responseData = await response.json();

        console.log(responseData);

        if(!response.ok){
         const error = new Error(responseData.message || 'Failed to authenticate!');
         throw error;
       }
        
       context.commit('registroMinuta', responseData.data.guardarPlanMinuta);      
    }

}