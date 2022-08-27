<script setup>
import Menu from './components/Menu.vue';
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
</script>

<template>
      <Menu />

      <RouterView />

      <Footer />
</template>