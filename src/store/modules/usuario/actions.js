export default {
    async registroUsuario(context,data){
        const graphqlQuery = {
          query: `
            mutation {
              crearUsuario(userInput: {
                nombre:"${data.nombre}",
                email:"${data.email}", 
                password:"${data.password}",confirmPassword:"${data.confirmPassword}"}){
                  _id
                  email
                }
            }
          `
        }; 
       const response = await fetch('http://localhost:3000/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(graphqlQuery)
       });

      const responseData = await response.json();

       if(!response.ok){
         console.log(responseData);
         const error = new Error(responseData.message || 'Failed to authenticate!');
         throw error;
       }

       console.log(responseData);

       context.commit('usuarioCreado', {
        usuarioId: responseData.usuarioId
     });
    },
    async enviarDatosUsuario(context,data){
      const graphqlQuery = {
        query: `
         {
            login(email:"${data.email}", password:"${data.password}"){
              token
              usuarioId
            }
          }
        `
      }; 
     const response = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphqlQuery)
   });

    const responseData = await response.json();

     if(!response.ok){
      console.log(responseData);
       const error = new Error(responseData.message || 'Failed to fetch!');
       throw error;
     }

     console.log(responseData);

     context.commit('setUsuario', {
        token: responseData.data.login.token,
        usuarioId: responseData.data.login.usuarioId
     });
  },

}
