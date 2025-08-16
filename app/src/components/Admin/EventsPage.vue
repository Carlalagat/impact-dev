<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Manage Events</h1>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        + Add Event
      </button>
    </div>

    <table class="w-full bg-white rounded shadow overflow-hidden">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-3 text-left">Name</th>
          <th class="p-3 text-left">Date</th>
          <th class="p-3 text-left">Status</th>
          <th class="p-3 text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in events" :key="event.id" class="border-b">
          <td class="p-3">{{ event.name }}</td>
          <td class="p-3">{{ event.date }}</td>
          <td class="p-3">
            <span
              class="px-2 py-1 rounded text-xs"
              :class="
                event.status === 'Active'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-200 text-gray-800'
              "
            >
              {{ event.status }}
            </span>
          </td>
          <td class="p-3 text-right space-x-2">
            <button class="text-blue-500 hover:underline">Edit</button>
            <button class="text-red-500 hover:underline">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const events = ref([]);

onMounted(() => {
  // TODO: Replace with API call
  events.value = [
    { id: 1, name: "Tech Summit", date: "2025-09-01", status: "Active" },
    { id: 2, name: "Startup Pitch", date: "2025-10-15", status: "Inactive" },
  ];
});
</script>
