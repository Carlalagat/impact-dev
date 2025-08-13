<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Dashboard Overview</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-lg font-semibold">Total Events</h2>
        <p class="text-3xl font-bold text-blue-500">{{ stats.events }}</p>
      </div>

      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-lg font-semibold">Total Partners</h2>
        <p class="text-3xl font-bold text-green-500">{{ stats.partners }}</p>
      </div>

      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-lg font-semibold">Users</h2>
        <p class="text-3xl font-bold text-purple-500">{{ stats.users }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const stats = ref({ events: 0, partners: 0, users: 0 });

onMounted(() => {
  // TODO: Replace with API calls
  stats.value = { events: 12, partners: 5, users: 120 };
});
</script>
