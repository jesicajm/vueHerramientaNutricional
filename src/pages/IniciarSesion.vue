<template>
    <div class="container">
        <div class="row justify-content-center">
    <div class="card" style="width: 19rem;">
        <form @submit.prevent="enviarDatosUsuario">
            <div class="card-body justify-content-center">
                <div>
                    <input  
                        type = "text" 
                        id="emil" 
                        name = "email" 
                        placeholder="Escribe tu email" 
                        v-model.trim="email.val"> 
                    <p v-if="!email.esValido">Incluye un signo "@" en la direccion de correo electrónico.</p>
                </div>
                <div class="mt-2">
                    <input 
                        type = "password"  
                        id = "password"  name = "password" 
                        placeholder="Escribe tu contraseña" 
                        v-model.trim="password.val"> 
                    <p v-if="!password.esValido">La contraseña no es valida o el usuario no tiene una contraseña</p>
                </div>
                <button class="btn btn-primary mt-4">Iniciar sesióń</button>
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
               email :{
                 val:'',
                 esValido:true,
               },
               password:{
                val:'',
                esValido: true
               },
               formularioEsValido: true,
               isLoading: false,
               error: null
        }
    },
    methods:{
        validarForm(){
            this.formularioEsValido = true;
            if(this.email.val === '' || !this.email.val.includes('@')){
               this.email.esValido = false;
               this.formularioEsValido = false;
            }
            if(this.password.val === '' || this.password.val.length < 5){
               this.password.esValido = false;
               this.formularioEsValido = false;
            }
        },    
        async enviarDatosUsuario(){
           this.validarForm();
           if(!this.formularioEsValido){
              return;
           }

           this.isLoading = true;

           try{
              await this.$store.dispatch('usuarios/enviarDatosUsuario', {
               email: this.email.val,
               password: this.password.val,
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