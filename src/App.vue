<template>
    <div>
      <navegacion></navegacion>
      <router-view></router-view>
    </div>
</template>

<script>
import Navegacion from './components/nav/Navegacion.vue';

export default {
  components:{
    Navegacion
  },
  data(){
    return {
        
      }
  },
 
}  

</script>

<style>

</style>
