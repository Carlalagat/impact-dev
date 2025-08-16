<template>
  <div class="p-6 max-w-6xl mx-auto">
    <!-- Page Title -->
    <h1 class="text-3xl font-extrabold mb-6 text-gray-800">Staff Management</h1>

    <!-- Create Staff Card -->
    <div class="bg-white shadow-lg rounded-lg p-6 mb-8 border border-gray-100">
      <h2 class="text-xl font-semibold mb-4 text-gray-700">➕ Add New Staff</h2>

      <form @submit.prevent="createStaff" class="space-y-4">
        <!-- Name Input -->
        <div>
          <label class="block font-medium text-gray-700 mb-1">Name</label>
          <input
            v-model="form.name"
            type="text"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter full name"
            required
          />
        </div>

        <!-- Email Input -->
        <div>
          <label class="block font-medium text-gray-700 mb-1">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter email address"
            required
          />
        </div>

        <!-- Password Input -->
        <div>
          <label class="block font-medium text-gray-700 mb-1">Password</label>
          <input
            v-model="form.password"
            type="password"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Set a password"
            required
          />
        </div>

        <!-- Error Message -->
        <div v-if="error" class="text-red-500 text-sm font-medium">
          {{ error }}
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md"
          :disabled="loading"
        >
          {{ loading ? "Adding..." : "Add Staff" }}
        </button>
      </form>
    </div>

    <!-- Staff Table -->
    <div class="bg-white shadow-lg rounded-lg p-6 border border-gray-100">
      <h2 class="text-xl font-semibold mb-4 text-gray-700">👥 Current Staff</h2>

      <!-- Empty State -->
      <div v-if="staffList.length === 0" class="text-gray-500 text-center py-6">
        No staff available.
      </div>

      <!-- Table -->
      <table v-else class="w-full table-auto border-collapse">
        <thead>
          <tr class="bg-gray-50">
            <th
              class="border px-4 py-2 text-left text-sm font-semibold text-gray-600"
            >
              Name
            </th>
            <th
              class="border px-4 py-2 text-left text-sm font-semibold text-gray-600"
            >
              Email
            </th>
            <th
              class="border px-4 py-2 text-left text-sm font-semibold text-gray-600"
            >
              Role
            </th>
            <th
              class="border px-4 py-2 text-center text-sm font-semibold text-gray-600"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="staff in staffList"
            :key="staff.id"
            class="hover:bg-gray-50 transition-colors"
          >
            <td class="border px-4 py-2">{{ staff.name }}</td>
            <td class="border px-4 py-2">{{ staff.email }}</td>
            <td class="border px-4 py-2">{{ staff.role }}</td>
            <td class="border px-4 py-2 text-center">
              <button
                @click="deleteStaff(staff.id)"
                class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-200 shadow-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
/** Vue imports for reactivity & lifecycle */
import { ref, onMounted } from "vue";
/** Axios instance for API calls */
import axiosInstance from "../../providers/api/axios";

/** Reactive state for the staff form */
const form = ref({
  name: "",
  email: "",
  password: "",
});

/** Error message state */
const error = ref("");
/** Loading state for createStaff */
const loading = ref(false);
/** Reactive array holding staff data */
const staffList = ref([]);

/** Fetch all staff from backend */
async function fetchStaff() {
  try {
    const res = await axiosInstance.get("/admin");
    staffList.value = res.data;
  } catch (err) {
    console.error(err);
    error.value = err.response?.data?.message || "Failed to load staff.";
  }
}

/** Create new staff member */
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

    // Reset form
    form.value = { name: "", email: "", password: "" };
    await fetchStaff();
  } catch (err) {
    console.error(err);
    error.value = err.response?.data?.message || "Failed to create staff.";
  } finally {
    loading.value = false;
  }
}

/** Delete staff member */
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

/** Load staff data when component mounts */
onMounted(() => {
  fetchStaff();
});
</script>
