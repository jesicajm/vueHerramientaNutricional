export default {
    async registroUsuario(context,data){
        const nuevoUsuario = {
          nombre: data.nombre,
          email: data.email,
          password: data.password,
          confirmPassword : data.confirmPassword
        };
       const response = await fetch('http://localhost:3000/registro', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(nuevoUsuario)
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
     const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      })
   });

    const responseData = await response.json();

     if(!response.ok){
      console.log(responseData);
       const error = new Error(responseData.message || 'Failed to fetch!');
       throw error;
     }

     console.log(responseData);

     context.commit('setUsuario', {
        token: responseData.token,
        usuarioId: responseData.userId
     });
  },

}
