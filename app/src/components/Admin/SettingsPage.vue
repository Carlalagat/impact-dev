<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold">Settings</h1>

    <form
      @submit.prevent="saveSettings"
      class="bg-white shadow-lg rounded-lg p-6 max-w-xl space-y-4"
    >
      <!-- Site Name -->
      <div>
        <label class="block font-semibold mb-1">Site Name</label>
        <input
          v-model="settings.siteName"
          type="text"
          class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
        />
      </div>

      <!-- Admin Email -->
      <div>
        <label class="block font-semibold mb-1">Admin Email</label>
        <input
          v-model="settings.adminEmail"
          type="email"
          class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
        />
      </div>

      <!-- Theme -->
      <div>
        <label class="block font-semibold mb-1">Theme</label>
        <select
          v-model="settings.theme"
          class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System Default</option>
        </select>
      </div>

      <!-- Logo URL -->
      <div>
        <label class="block font-semibold mb-1">Logo URL</label>
        <input
          v-model="settings.logoUrl"
          type="text"
          placeholder="https://example.com/logo.png"
          class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
        />
      </div>

      <!-- Maintenance Mode -->
      <div class="flex items-center gap-3">
        <input
          id="maintenance"
          v-model="settings.maintenanceMode"
          type="checkbox"
          class="h-5 w-5 text-blue-600 border-gray-300 rounded"
        />
        <label for="maintenance" class="font-semibold"
          >Enable Maintenance Mode</label
        >
      </div>

      <!-- Save Button -->
      <div class="pt-4">
        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          :disabled="loading"
        >
          <span v-if="loading">Saving...</span>
          <span v-else>Save Settings</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const loading = ref(false);

const settings = ref({
  siteName: "",
  adminEmail: "",
  theme: "light",
  logoUrl: "",
  maintenanceMode: false,
});

// Load settings from backend on mount
onMounted(async () => {
  try {
    const res = await axios.get("/api/admin/settings");
    Object.assign(settings.value, res.data);
  } catch (err) {
    console.error("Failed to load settings:", err);
  }
});

// Save settings to backend
async function saveSettings() {
  loading.value = true;
  try {
    await axios.post("/api/admin/settings", settings.value);
    alert("Settings saved successfully!");
  } catch (err) {
    console.error("Error saving settings:", err);
    alert("Failed to save settings.");
  } finally {
    loading.value = false;
  }
}
</script>
