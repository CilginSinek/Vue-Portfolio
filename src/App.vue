<script setup lang="ts">
</script>

<template>
  <nav>
    <div class="navbarLinks" >
      <router-link class="navlink" to="/">Home</router-link>
      <router-link class="navlink" to="/About">About</router-link>
      <router-link class="navlink" to="/Repos">Repos</router-link>
      <router-link class="navlink" to="/Contact">Contact</router-link>
    </div>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>

</template>

