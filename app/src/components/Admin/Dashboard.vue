<template>
  <div class="px-8">
    <!-- Use the user object from the store -->
    <h1 v-if="user" class="text-2xl font-bold text-green-700">
      Welcome, {{ user.email }}!
    </h1>
    <p class="my-4">You are successfully logged in to the admin dashboard.</p>

    <h3 class="text-xl font-semibold mt-8">Secure Data from API:</h3>

    <!-- Loading and Error States for API call -->
    <div v-if="loading" class="mt-4">Loading events...</div>
    <div v-if="apiError" class="text-red-500 mt-4">
      Error loading events: {{ apiError }}
    </div>

    <!-- Display fetched data -->
    <ul v-if="events.length > 0" class="list-disc list-inside mt-2">
      <li v-for="event in events" :key="event.id">
        {{ event.name }}
      </li>
    </ul>
    <p v-else-if="!loading && !apiError" class="mt-2">No events found.</p>

    <!-- Logout Button -->
    <button
      class="mt-8 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      @click="authStore.logout()"
    >
      Logout
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useAuthStore } from "../../store";
import axios from "axios";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
// Use storeToRefs to get reactive access to the user object
const { user } = storeToRefs(authStore);

// Local state for the component
const events = ref([]);
const apiError = ref(null);
const loading = ref(false);

const fetchEvents = async () => {
  // Get the token from the store, which is our single source of truth
  const token = authStore.access_token;

  if (!token) {
    apiError.value = "Authentication token not found. Please log in again.";
    return;
  }

  loading.value = true;
  apiError.value = null;

  try {
    const response = await axios.get("http://localhost:3000/events", {
      headers: {
        // Use the token from the store
        Authorization: `Bearer ${token}`,
      },
    });
    events.value = response.data;
  } catch (err) {
    apiError.value = err.response?.data?.message || "Failed to fetch data.";
    console.error("API call failed:", apiError.value);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchEvents();
});
</script>
