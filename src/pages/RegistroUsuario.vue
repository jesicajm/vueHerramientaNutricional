<template>
    <div class="container">
        <div class="row justify-content-center">
    <div class="card" style="width: 19rem;">
        <form @submit.prevent="enviarRegistroUsuario">
            <div class="card-body justify-content-center">
                <div>
                    <input 
                        type = "text"  
                        id ="nombre"
                        name = "nombre" 
                        placeholder="Escribe tu nombre completo" 
                        v-model.trim="usuario.nombre"> 
                </div>
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
                <div class="mt-2"> 
                    <input  
                        type = "password"  
                        id = "confirmPassword"  name = "confirmPassword" 
                        placeholder="Confirma tu contraseña" 
                        v-model.trim="usuario.confirmPassword"
                    > 
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
               nombre:'',
               email :'',
               password:'',
               confirmPassword:''
           }
        }
    },
    methods:{
        enviarRegistroUsuario(){
           fetch('http://localhost:3000/registro', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                nombre: this.usuario.nombre,
                email: this.usuario.email,
                password: this.usuario.password,
                confirmPassword: this.usuario.confirmPassword
              })
           })
        }
    }
}
</script>