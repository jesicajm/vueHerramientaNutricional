<template>
  <div class="container">
    <form @submit.prevent="enviarPlanMinuta">
        <div>
        <p>Planificar Menus desde:</p>
            <input 
                id="date" 
                type="date"
                name='fechaInicial'
                v-model="fechaInicial.val"/> 
            <br>
            <p v-if="!fechaInicial.esValido">Ingese fecha inicial</p>    
        </div>    
        <br>
        <div>    
            <p>Planificar Menus hasta:</p>
            <input  
                id="date" 
                type="date"
                name='fechaFinal'
                v-model="fechaFinal.val"/>  
             <p v-if="!fechaFinal.esValido">Ingese fecha final</p>    
        </div>
        <br>
        <span>Intolerancias</span>
        <icono-mas @click="agregarIntolerancia">
        </icono-mas><BIconDashCircleFill @click="ocultarIntolerancia"/> 
        <div v-for="(select, index) in selects" :key="select">
          <label for="intolerancias">Intolerancia</label>
          <select v-model="intolerancias[index]">
            <option 
              v-for="proteina in proteinas"
              :key="proteina"
              :value="proteina">{{proteina}}</option>
          </select>
        </div>
        <br>  
        <button class="btn btn-primary">Enviar</button>  
    </form>
  </div>              
</template>

<script>
import IconoMas from '../components/IconoMas';
import {BIconDashCircleFill} from 'bootstrap-icons-vue';

export default {
    components: {
      IconoMas,
      BIconDashCircleFill
  },
    data(){
        return{
            proteinas: ['carne de res','pollo','salmon','carne de cerdo'],
            fechaInicial:{
              val: '',
              esValido: true
            },
            fechaFinal:{
              val: '',
              esValido: true
            },
            selects:1,
            intolerancias:[],
            listaIntolerancias:[]
        }
    },
    methods:{
      agregarIntolerancia(){
        this.selects += 1;
      },
      ocultarIntolerancia(){
        if(this.selects > 1){
          this.selects -= 1; 
          this.intolerancias.splice(this.intolerancias.length -1,1);
        }
      },
     async enviarPlanMinuta(){
          if(this.fechaInicial.val === ''){
            this.fechaInicial.esValido = false;
            return
          }
          if(this.fechaFinal.val ===''){
            this.fechaFinal.esValido = false;
            return
          }

          this.intolerancias.forEach(intolerancia => {
             const existeIntolerancia = this.listaIntolerancias.includes(intolerancia);
             if(!existeIntolerancia){
                this.listaIntolerancias.push(intolerancia);
             }
          })
        
        try{
          await this.$store.dispatch('minuta/planificarMinuta', {
              fechaInicial: this.fechaInicial.val, 
              fechaFinal: this.fechaFinal.val, 
              intolerancias: this.listaIntolerancias
          });
        }catch(err){
          this.error = err.message || 'Fallo envio'
        }

        this.$router.push('/minuta')
      }
    }
}
</script>