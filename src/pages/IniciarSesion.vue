<template>
hola
    <div class="container">
        <div class="row justify-content-center">
    <div class="card" style="width: 19rem;">
        <form @submit.prevent="enviarDatosUsuario">
            <div class="card-body justify-content-center">
                <div class="mt-2">
                    <input  
                        type = "text" 
                        id="correo" 
                        name = "correo" 
                        placeholder="Escribe tu email" 
                        v-model.trim="usuario.email"> 
                </div>
                <div class="mt-2">
                    <input 
                        type = "password"  
                        id = "password"  name = "password" 
                        placeholder="Escribe tu contraseña" 
                        v-model.trim="usuario.password"> 
                </div>
                <button class="btn btn-primary mt-4">Registrate</button>
            </div>
        </form>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
           usuario:{
               email :'',
               password:''
           }
        }
    },
    methods:{
        enviarDatosUsuario(){
           fetch('http://localhost:3000/login', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: this.usuario.email,
                password: this.usuario.password
              })
           })
        }
    }
}
</script>