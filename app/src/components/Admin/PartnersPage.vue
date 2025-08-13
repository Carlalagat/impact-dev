<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Partners</h1>
      <button
        class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        + Add Partner
      </button>
    </div>

    <ul class="bg-white rounded shadow divide-y">
      <li
        v-for="partner in partners"
        :key="partner.id"
        class="p-4 flex justify-between items-center"
      >
        <div>
          <p class="font-semibold">{{ partner.name }}</p>
          <p class="text-sm text-gray-500">{{ partner.contactEmail }}</p>
        </div>
        <div class="space-x-2">
          <button class="text-blue-500 hover:underline">Edit</button>
          <button class="text-red-500 hover:underline">Remove</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const partners = ref([]);

onMounted(() => {
  // TODO: Replace with API call
  partners.value = [
    { id: 1, name: "Google", contactEmail: "contact@google.com" },
    { id: 2, name: "Microsoft", contactEmail: "info@microsoft.com" },
  ];
});
</script>
