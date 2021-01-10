<template>
      <table>
          <tr>
            <th scope="col">Comida</th>
            <th scope="col">Leche</th>
            <th scope="col">Proteina</th>
            <th scope="col">Harinas</th>
            <th scope="col">Verduras</th>
            <th scope="col">Frutas</th>
            <th scope="col">Leguminosas</th>
          </tr>
          <tr ref="planDesayuno">
              <th scope="row">Desayuno</th>
              <td><input 
                   type="checkbox"
                   value="leche"
                   name="leche"
                   :checked="false"
                   v-model="plan.desayuno">
               </td>
               <td><input 
                   type="checkbox"
                   value="proteina"
                   name="proteina"
                   :checked="false"
                   v-model="plan.desayuno">
               </td>
               <td><input 
                   type="checkbox"
                   value="harinas"
                   name="harinas"
                   :checked="false"
                   v-model="plan.desayuno">
               </td>
               <td><input 
                   type="checkbox"
                   value="verduras"
                   name="verduras"
                   :checked="false"
                   v-model="plan.desayuno">
               </td>
               <td><input 
                   type="checkbox"
                   value="frutas"
                   name="frutas"
                   :checked="false"
                   v-model="plan.desayuno">
               </td>
               <td><input 
                   type="checkbox"
                   value="leguminosas"
                   name="leguminosas"
                   :checked="false"
                   v-model="plan.desayuno">
               </td>
          </tr>
          <tr ref="planMedia">
           <th scope="row">Media mañana</th> 
              <td><input 
                   type="checkbox"
                   value="leche"
                   name="leche"
                   :checked="false"
                   v-model="plan.mediaManana">
              </td>
              <td><input 
                   type="checkbox"
                   value="proteina"
                   name="proteina"
                   :checked="false"
                   v-model="plan.mediaManana">
              </td>
              <td><input 
                   type="checkbox"
                   value="harinas"
                   name="harinas"
                   :checked="false"
                   v-model="plan.mediaManana">
              </td>
              <td><input 
                   type="checkbox"
                   value="verduras"
                   name="verduras"
                   :checked="false"
                   v-model="plan.mediaManana">
              </td>
              <td><input 
                   type="checkbox"
                   value="frutas"
                   name="frutas"
                   :checked="false"
                   v-model="plan.mediaManana">
              </td>
              <td><input 
                   type="checkbox"
                   value="leguminosas"
                   name="leguminosas"
                   :checked="false"
                   v-model="plan.mediaManana">
              </td>
          </tr>
          <tr ref="planAlmuerzo">
            <th scope="row">Almuerzo</th> 
               <td><input 
                   type="checkbox"
                   value="leche"
                   name="leche"
                   :checked="false"
                   v-model="plan.almuerzo">
              </td>
              <td><input 
                   type="checkbox"
                   value="proteina"
                   name="proteina"
                   :checked="false"
                   v-model="plan.almuerzo">
              </td>
              <td><input 
                   type="checkbox"
                   value="harinas"
                   name="harinas"
                   :checked="false"
                   v-model="plan.almuerzo">
              </td>
              <td><input 
                   type="checkbox"
                   value="verduras"
                   name="verduras"
                   :checked="false"
                   v-model="plan.almuerzo">
              </td>
              <td><input 
                   type="checkbox"
                   value="frutas"
                   name="frutas"
                   :checked="false"
                   v-model="plan.almuerzo">
              </td>
              <td><input 
                   type="checkbox"
                   value="leguminosas"
                   name="leguminosas"
                   :checked="false"
                   v-model="plan.almuerzo">
              </td>
          </tr>
          <tr ref="planAlgo">
            <th scope="row">Algo</th>
               <td><input 
                   type="checkbox"
                   value="leche"
                   name="leche"
                   :checked="false"
                   v-model="plan.algo">
              </td>
              <td><input 
                   type="checkbox"
                   value="proteina"
                   name="proteina"
                   :checked="false"
                   v-model="plan.algo">
              </td>
              <td><input 
                   type="checkbox"
                   value="harinas"
                   name="harinas"
                   :checked="false"
                   v-model="plan.algo">
              </td>
              <td><input 
                   type="checkbox"
                   value="verduras"
                   name="verduras"
                   :checked="false"
                   v-model="plan.algo">
              </td>
              <td><input 
                   type="checkbox"
                   value="frutas"
                   name="frutas"
                   :checked="false"
                   v-model="plan.algo">
              </td>
              <td><input 
                   type="checkbox"
                   value="leguminosas"
                   name="leguminosas"
                   :checked="false"
                   v-model="plan.algo">
              </td>
          </tr>
          <tr ref="planCena">
            <th scope="row">Cena</th>
              <td><input 
                   type="checkbox"
                   value="leche"
                   name="leche"
                   :checked="false"
                   v-model="plan.cena">
              </td>
              <td><input 
                   type="checkbox"
                   value="proteina"
                   name="proteina"
                   :checked="false"
                   v-model="plan.cena">
              </td>
              <td><input 
                   type="checkbox"
                   value="harinas"
                   name="harinas"
                   :checked="false"
                   v-model="plan.cena">
              </td>
              <td><input 
                   type="checkbox"
                   value="verduras"
                   name="verduras"
                   :checked="false"
                   v-model="plan.cena">
              </td>
              <td><input 
                   type="checkbox"
                   value="frutas"
                   name="frutas"
                   :checked="false"
                   v-model="plan.cena">
              </td>
              <td><input 
                   type="checkbox"
                   value="leguminosas"
                   name="leguminosas"
                   :checked="false"
                   v-model="plan.cena">
              </td>
          </tr>
          <tr ref="planRefrigerio">
            <th scope="row">Refrigerio</th>
               <td><input 
                   type="checkbox"
                   value="leche"
                   name="leche"
                   :checked="false"
                   v-model="plan.refrigerio">
              </td>
              <td><input 
                   type="checkbox"
                   value="proteina"
                   name="proteina"
                   :checked="false"
                   v-model="plan.refrigerio">
              </td>
              <td><input 
                   type="checkbox"
                   value="harinas"
                   name="harinas"
                   :checked="false"
                   v-model="plan.refrigerio">
              </td>
              <td><input 
                   type="checkbox"
                   value="verduras"
                   name="verduras"
                   :checked="false"
                   v-model="plan.refrigerio">
              </td>
              <td><input 
                   type="checkbox"
                   value="frutas"
                   name="frutas"
                   :checked="false"
                   v-model="plan.refrigerio">
              </td>
              <td><input 
                   type="checkbox"
                   value="leguminosas"
                   name="leguminosas"
                   :checked="false"
                   v-model="plan.refrigerio">
              </td>
          </tr>
        </table>
       <br>
       <button @click="enviarPlan">Enviar</button> 
</template>
     
<script>
  export default {
        data () {
            return {
               plan:{  
                  desayuno:[],
                  mediaManana:[],
                  almuerzo:[],
                  algo:[],
                  cena:[],
                  refrigerio:[]
               },
            }
        },
        created(){
          this.cargaPlan();
        },
        methods:{
          async enviarPlan(){
           try{
              await this.$store.dispatch('plan/registroPlan', this.plan);
           } catch(err){
              this.error = err.message || 'Fallo envio'
           }
     
           this.$router.push('/home')
          },
          async cargaPlan(){
            try{
              await this.$store.dispatch('plan/cargaPlanUsuario');
            }catch(err){
              this.error = err.message || 'Algo Fallo'
            }

            const planUsuario = this.$store.getters['plan/planUsuario'];

            const desayuno = this.$refs.planDesayuno.childNodes;
            const mediaManana = this.$refs.planMedia.childNodes;
            const almuerzo = this.$refs.planAlmuerzo.childNodes;
            const algo = this.$refs.planAlgo.childNodes;
            const cena = this.$refs.planCena.childNodes;
            const refrigerio = this.$refs.planRefrigerio.childNodes;


            const cambiarChecked = (comidaDia, inputAlimentos) => {
               
               for(const alimento of planUsuario[comidaDia]){
                    for(let i = 1; i < inputAlimentos.length; i++){
                         if(inputAlimentos[i].firstElementChild.value === alimento){
                              inputAlimentos[i].firstElementChild.checked = true;
                         }
                    }        
               }
            }     

              
            cambiarChecked('desayuno', desayuno);
            cambiarChecked('mediaManana', mediaManana);
            cambiarChecked('almuerzo', almuerzo);
            cambiarChecked('algo', algo);
            cambiarChecked('cena', cena);
            cambiarChecked('refrigerio', refrigerio);

          } 
                    
        }
        
  }
</script>