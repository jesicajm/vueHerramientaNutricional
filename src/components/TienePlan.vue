<template>
    <form @submit.prevent="enviarRespuestaPlan">
        <p>¿Tienes plan nutricional?</p>
            <div>
            <input 
                  type="radio"
                  name="entradaTienePlan"
                  :value="true"
                  v-model="entradaTienePlan"/>Si
            </div>
            <div>
            <input 
                  type="radio"
                  name="entradaTienePlan"
                  :value="false"
                  v-model="entradaTienePlan"/>No
            </div>
            <div>
            <button>Enviar</button>
            </div>
    </form>
</template>

<script>
export default {
    data(){
        return {
           entradaTienePlan: null
        }
    },
    methods:{
        enviarRespuestaPlan(){
           fetch('URL', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                tienePlan: this.entradaTienePlan
              })
           })
        }
    }
}
</script>