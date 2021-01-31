<template>
 <div class="d-none d-xl-block d-sm-none">
      <div class="card w-75 mx-auto">
        <div class="card-header bg-white border-0">
          <div class="row no-gutters">	
          <div  class="col-2">	
          <button class="btn btn-light boton-semana boton-semanaActive bg-white">SEMANA ACTUAL</button>
          </div> 
          <div class="col-3">
          <button class="btn btn-light boton-semana bg-white">SEMANA SIGUIENTE</button>
          </div>
          <button class="btn btn-light boton-lista bg-white ml-auto">LISTA DE LA COMPRA<span class="fas fa-angle-right ml-2"></span></button>
          </div>
          <div class="row mt-4">
            <button class="btn btn-light boton-dias py-2 px-4 mr-2">LUNES <br> 01 agosto</button>
            <button class="btn btn-light boton-dias py-2 px-4 mr-2">MARTES</button>
            <button class="btn btn-light boton-dias py-2 px-4 mr-2">MIERCOLES</button>
            <button class="btn btn-light boton-dias py-2 px-4 mr-2">JUEVES</button>
            <button class="btn btn-light boton-dias py-2 px-4 mr-2">VIERNES</button>
            <button class="btn btn-light boton-dias py-2 px-4 mr-2">SABADO</button>
            <button class="btn btn-light boton-dias py-2 px-4 mr-2">DOMINGO</button>	
          </div>
        </div>
        <div class="card-body">
          <blockquote class="blockquote card-menus mb-0">
          <div class="card">
            <div class="card-header text-white bg-secondary py-4">
            </div>
            <span class="fas fa-caret-down flecha-abajo text-secondary"></span>
            <div class="card-body">
              <blockquote v-if="tienePlan" class="row mt-2 blockquote">
                <div 
                  v-for="comidaDia in comidasDiaFiltrado" 
                  :key="comidaDia" 
                  class="card col-2 border-top-0 border-bottom-0 border-left-0 p-2">
                  <blockquote class="blockquote mb-0">
                    <p class="h6 text-center card-p">{{comidaDia.toUpperCase()}}</p>
                    <hr class="col-7 mt-0"> 
                    <p class="mt-2 p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nobis, quae atque.</p>
                  </blockquote>
                </div>                 
              </blockquote>
              <blockquote v-if="!tienePlan" class="row mt-2 blockquote">
                <div 
                  v-for="comidaDia in tipoComidaDia" 
                  :key="comidaDia" 
                  class="card col-2 border-top-0 border-bottom-0 border-left-0 p-2">
                  <blockquote class="blockquote mb-0">
                    <p class="h6 text-center card-p">{{comidaDia}}</p>
                    <hr class="col-7 mt-0"> 
                    <p class="mt-2 p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nobis, quae atque.</p>
                  </blockquote>
                </div>                 
              </blockquote>
            </div>
          </div>
          </blockquote>
        </div>
       </div>
     </div>
</template>

<script>
  export default {
      computed: {
        comidasDiaFiltrado(){
          return this.comidasDia
        },
        tienePlan(){
          return this.tienePlanNutricional
        }
      },
      data () {
        return {
          tipoComidaDia:['DESAYUNO','MEDIA MAÑANA','ALMUERZO', 'ALGO','CENA','REFRIGERIO'],
          tienePlanNutricional: false,
          comidasDia:null
        }
      },
      created(){
        this.cargaPlan();
      },
      methods:{
        async cargaPlan(){
            try{
              await this.$store.dispatch('plan/cargaPlanUsuario');
            }catch(err){
              this.error = err.message || 'Algo Fallo'
            }
           
          this.tienePlanNutricional = this.$store.getters['plan/tienePlan'];
          this.comidasDia = this.$store.getters['plan/comidasDia']

        }
      }  
  }
</script>