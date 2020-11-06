<template>
<label for="alimentos">Intolerancias</label>  
<select id="alimentos" name="alimentos" v-model="intolerancias">
   <option 
       v-for="proteina in proteinas"
       :key="proteina" 
       :value="proteina">{{proteina}}</option>
</select>  
</template>

<script>
export default {
    data(){
        return{
            proteinas : ['carne de res', 'pollo', 'salmon','carne de cerdo'],
            intolerancias:""
        }
    
    }
}
</script>