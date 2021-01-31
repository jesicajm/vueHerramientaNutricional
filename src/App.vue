<template>
    <div class="container">
      <navegacion></navegacion>
      <main>
        <router-view class="mt-5"></router-view>
      </main>
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
