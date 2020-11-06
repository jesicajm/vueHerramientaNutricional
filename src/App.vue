<template>
    <registro-usuario></registro-usuario>
    <tiene-plan></tiene-plan>
    <br>
    <div v-if="tienePlan === true">
      <tabla-plan></tabla-plan>
    </div> 
    <div>
      <select-intolerancias></select-intolerancias>
    </div>
</template>

<script>

export default {
  data(){
    return {
        
      }
  },
 
}  

</script>

<style>

</style>
