<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Staff Management</h1>

    <!-- Create Staff Form -->
    <div class="bg-white shadow p-4 rounded mb-6">
      <h2 class="text-lg font-semibold mb-2">Add New Staff</h2>

      <form @submit.prevent="createStaff" class="space-y-3">
        <div>
          <label class="block font-medium">Name</label>
          <input
            v-model="form.name"
            type="text"
            class="w-full border rounded px-2 py-1"
            required
          />
        </div>

        <div>
          <label class="block font-medium">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full border rounded px-2 py-1"
            required
          />
        </div>

        <div>
          <label class="block font-medium">Password</label>
          <input
            v-model="form.password"
            type="password"
            class="w-full border rounded px-2 py-1"
            required
          />
        </div>

        <div v-if="error" class="text-red-500">{{ error }}</div>

        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          :disabled="loading"
        >
          {{ loading ? "Adding..." : "Add Staff" }}
        </button>
      </form>
    </div>

    <!-- Staff List -->
    <div class="bg-white shadow p-4 rounded">
      <h2 class="text-lg font-semibold mb-2">Current Staff</h2>

      <table class="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th class="border px-2 py-1 text-left">Name</th>
            <th class="border px-2 py-1 text-left">Email</th>
            <th class="border px-2 py-1 text-left">Role</th>
            <th class="border px-2 py-1 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="staff in staffList" :key="staff.id">
            <td class="border px-2 py-1">{{ staff.name }}</td>
            <td class="border px-2 py-1">{{ staff.email }}</td>
            <td class="border px-2 py-1">{{ staff.role }}</td>
            <td class="border px-2 py-1">
              <button
                @click="deleteStaff(staff.id)"
                class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="staffList.length === 0" class="mt-2 text-gray-500">
        No staff available.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axiosInstance from "../../providers/api/axios";

const form = ref({
  name: "",
  email: "",
  password: "",
});

const error = ref("");
const loading = ref(false);
const staffList = ref([]);

// Fetch all staff
async function fetchStaff() {
  try {
    const res = await axiosInstance.get("/admin");
    staffList.value = res.data;
  } catch (err) {
    console.error(err);
    error.value = err.response?.data?.message || "Failed to load staff.";
  }
}

// Create new staff
async function createStaff() {
  if (!form.value.name || !form.value.email || !form.value.password) {
    error.value = "Name, Email, and Password are required!";
    return;
  }

  loading.value = true;
  error.value = "";

  try {
    await axiosInstance.post("/admin", {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
      role: "STAFF",
    });

    form.value = { name: "", email: "", password: "" };
    await fetchStaff();
  } catch (err) {
    console.error(err);
    error.value = err.response?.data?.message || "Failed to create staff.";
  } finally {
    loading.value = false;
  }
}

// Delete staff
async function deleteStaff(id) {
  if (!confirm("Are you sure you want to delete this staff?")) return;

  try {
    await axiosInstance.delete(`/admin/${id}`);
    staffList.value = staffList.value.filter((s) => s.id !== id);
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || "Failed to delete staff.");
  }
}

// Load staff on mount
onMounted(() => {
  fetchStaff();
});
</script>
