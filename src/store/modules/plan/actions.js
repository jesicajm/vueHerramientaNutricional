export default {
    async registroPlan(context,payload){
       const planNutricional = {
          desayuno:payload.desayuno,
          mediaManana:payload.mediaManana,
          almuerzo:payload.almuerzo,
          algo:payload.algo,
          cena: payload.cena,
          refrigerio: payload.refrigerio
       };

       const token = context.rootGetters['usuarios/token']
       console.log(token);

       const response = await fetch('http://localhost:3000/plan-nutricional', {
          method: 'POST',
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(planNutricional)
       });

      const responseData = await response.json();

       if(!response.ok){
         console.log(responseData);
         const error = new Error(responseData.message || 'Failed to authenticate!');
         throw error;
       }

       console.log(responseData);

       /*context.commit('usuarioCreado', {
        usuarioId: responseData.usuarioId
       });*/
    },
}