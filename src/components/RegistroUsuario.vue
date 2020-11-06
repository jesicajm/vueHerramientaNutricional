<template>
    <form @submit.prevent="enviarRegistroUsuario">
        <label for="nombre">¿Cuál es tu nombre?</label>
            <br>
            <input 
                type = "text"  
                id ="nombre"
                name = "nombre" 
                placeholder="Nombre" 
                v-model="usuario.nombre"> 
            <br>
            <br>
            <label for="correo">¿Cuál es tu email?</label>
            <br>
            <input  
                type = "text" 
                id="correo" 
                name = "correo" 
                placeholder="Email" 
                v-model="usuario.email"> 
            <label  for = "password"> Contraseña </label> 
            <input 
                type = "password"  
                id = "password"  name = "password" 
                v-model="usuario.password"> 
            <label  for = "confirmPassword"> Confirmar Contraseña </label> 
            <input  
                type = "password"  
                id = "confirmPassword"  name = "confirmPassword" 
                v-model="usuario.confirmPassword"
            > 
            <input type="hidden">
            <button>Enviar</button>
    </form>
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