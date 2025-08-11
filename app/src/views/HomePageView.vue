<template>
  <div>
      <HomeHero />
  </div>
  <!-- <div class="p-8 text-center">
    <h1 class="text-3xl font-bold mb-4">Welcome to the Admin Portal</h1>
    <p class="mb-6">
      This is the public home page. Please log in to access the dashboard.
    </p>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="goToDashboard"
    >
      Go to Dashboard
    </button> -->
    
  
</template>

<script setup>
import { useRouter } from "vue-router";
import HomeHero from "@/components/HomePage/HomeHero.vue";
const router = useRouter();

</script>

<style lang="scss" scoped>

</style>