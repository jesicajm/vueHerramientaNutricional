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
                        v-model.trim="nombre.val"
                        @blur="borrarValidacion('nombre')"/> 
                    <p v-if="!nombre.esValido">El nombre no debe estar vacio.</p>
                </div>
                <div class="mt-2">
                    <input  
                        type = "text" 
                        id="email" 
                        name = "email" 
                        placeholder="Escribe tu email" 
                        v-model.trim="email.val"
                        @blur="borrarValidacion('email')"/> 
                     <p v-if="!email.esValido">Incluye un signo "@" en la direccion de correo electrónico.</p>
                </div>
                <div class="mt-2">
                    <input 
                        type = "password"  
                        id = "password"  name = "password" 
                        placeholder="Escribe tu contraseña" 
                        v-model.trim="password.val"
                        @blur="borrarValidacion('password')"/> 
                     <p v-if="!password.esValido">Por favor ingrese una constraseña con al menos 5 caracteres</p>   
                </div>
                <div class="mt-2"> 
                    <input  
                        type = "password"  
                        id = "confirmPassword"  name = "confirmPassword" 
                        placeholder="Confirma tu contraseña" 
                        v-model.trim="confirmPassword.val"
                        @blur="borrarValidacion('confirmPassword')"/> 
                    <p v-if="!confirmPassword.esValido">Las contraseñas deben coincidir</p>
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
               nombre: {
                val:'',
                esValido: true
               },
               email: {
                val:'',
                esValido: true
               },
               password:{
                val:'',
                esValido: true
               },
               confirmPassword:{
                val:'',
                esValido: true
               },
               formularioEsValido: true,
               isLoading: false,
               error: null
        }
    },
    methods:{
        borrarValidacion(input){
          this[input].esValido = true;
        },
        validarForm(){
           this.formularioEsValido = true;
           if(this.nombre.val === ''){
               this.nombre.esValido = false;
               this.formularioEsValido = false;
           }
           if(this.email.val === '' || !this.email.val.includes('@')){
               this.email.esValido = false;
               this.formularioEsValido = false;
           }
           if(this.password.val.length < 5 ){
               this.password.esValido = false;
               this.formularioEsValido = false;
           }
           if(this.confirmPassword.val === '' || this.confirmPassword.val !== this.password.val ){
               this.confirmPassword.esValido = false;
               this.formularioEsValido = false;
           }
        },
        async enviarRegistroUsuario(){
           this.validarForm();
           if(!this.formularioEsValido){
              return;
           }

           this.isLoading = true;

           try{
              await this.$store.dispatch('usuarios/registroUsuario', {
               nombre:this.nombre.val,
               email: this.email.val,
               password: this.password.val,
               confirmPassword: this.confirmPassword.val
           });
           } catch(err){
              this.error = err.message || 'Fallo al autenticar'
           }

           
           this.isLoading = false;

           this.$router.replace('/home')
        }
    }
}
</script>

<style scoped>
p{
    color:red;
}
</style>
