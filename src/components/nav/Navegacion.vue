<template>
<!-- <ul class="nav justify-content-end">
  <li class="nav-item">
    <router-link class="nav-link active border-bottom" to="/login">Iniciar sesión</router-link>
  </li>
   <li class="nav-item">
    <router-link class="nav-link active border-bottom" to="/registro">Registrate</router-link>
  </li>
   <li class="nav-item">
    <router-link class="nav-link active border-bottom" to="/home">Home</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/plan">Plan nutricional</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/minuta">Minuta</router-link>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Usuario</a>
    <div class="dropdown-menu mr-0" aria-labelledby="navbarDropdown">
                <span class="fas fa-caret-up flecha-arriba text-white"></span>
                <router-link class="dropdown-item mr-3 py-2 px-5 border-bottom text-muted" to="/perfil"><span class="fas fa-user mr-3 text-dark"></span>Mi perfil</router-link>
                <a class="dropdown-item mr-3 py-2 px-5 text-muted" href="#"><span class="fas fa-sign-out-alt mr-3 text-dark"></span>Cerrar sesión</a>
              </div>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>-->
<ul>
  <li v-if="!isLoggedIn">
    <router-link to="/login">Iniciar sesión</router-link>
  </li>
   <li v-if="!isLoggedIn">
    <router-link to="/registro">Registrate</router-link>
  </li>
   <li>
    <router-link to="/home">Home</router-link>
  </li>
  <li>
    <router-link to="/plan">Plan nutricional</router-link>
  </li>
  <li>
    <router-link to="/planificar">Planificar menus</router-link>
  </li>
  <li>
    <router-link to="/minuta">Minuta</router-link>
  </li>
  <li v-if="isLoggedIn">
    <a  href="#">Usuario</a>
  </li>
  <li >
    <a >Disabled</a>
  </li>
</ul>
</template>

<script>
export default {
   computed: {
     isLoggedIn(){
       return this.$store.getters['usuarios/estaAutenticado']
     }
   }
}
</script>