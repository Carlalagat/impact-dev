<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Settings</h1>

    <form class="bg-white rounded shadow p-6 max-w-lg space-y-4">
      <div>
        <label class="block font-semibold mb-1">Site Name</label>
        <input
          v-model="settings.siteName"
          type="text"
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label class="block font-semibold mb-1">Admin Email</label>
        <input
          v-model="settings.adminEmail"
          type="email"
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label class="block font-semibold mb-1">Theme</label>
        <select
          v-model="settings.theme"
          class="w-full border rounded px-3 py-2"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <button
        type="button"
        @click="saveSettings"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const settings = ref({
  siteName: "My App",
  adminEmail: "admin@example.com",
  theme: "light",
});

function saveSettings() {
  // TODO: Send to backend
  alert("Settings saved!");
}
</script>
