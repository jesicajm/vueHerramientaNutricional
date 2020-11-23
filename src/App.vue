<template>
    <div class="container">
      <navegacion></navegacion>
      <router-view class="mt-5"></router-view>
      <tiene-plan></tiene-plan>
      <div>
        <select-intolerancias></select-intolerancias>
      </div>
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
