<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside
      :class="[
        'bg-white shadow-lg w-64 flex-shrink-0 transform transition-transform duration-200 ease-in-out',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        'fixed md:relative md:translate-x-0 z-50',
      ]"
    >
      <!-- Logo + Close -->
      <div class="p-4 border-b flex items-center justify-between">
        <h1 class="text-xl font-bold tracking-wide text-blue-600">Admin</h1>
        <button
          @click="sidebarOpen = false"
          class="md:hidden p-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
      </div>

      <!-- Navigation -->
      <nav class="p-4 space-y-2">
        <router-link to="/admin" class="nav-link" active-class="active-link">
          <span>📊</span> Dashboard
        </router-link>

        <router-link
          v-if="hasRole(['SUPERADMIN', 'STAFF'])"
          to="/admin/events"
          class="nav-link"
          active-class="active-link"
        >
          <span>🎟️</span> Events
        </router-link>

        <router-link
          v-if="hasRole(['SUPERADMIN'])"
          to="/admin/partners"
          class="nav-link"
          active-class="active-link"
        >
          <span>🤝</span> Partners
        </router-link>

        <router-link
          v-if="hasRole(['SUPERADMIN'])"
          to="/admin/staff"
          class="nav-link"
          active-class="active-link"
        >
          <span>🧑‍💼</span> Staff Management
        </router-link>

        <router-link
          to="/admin/settings"
          class="nav-link"
          active-class="active-link"
        >
          <span>⚙️</span> Settings
        </router-link>
      </nav>
    </aside>

    <!-- Mobile overlay -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 bg-black bg-opacity-50 md:hidden"
      @click="sidebarOpen = false"
    ></div>

    <!-- Main content -->
    <div class="flex flex-col flex-1 overflow-hidden">
      <!-- Topbar -->
      <header class="bg-white shadow-md p-4 flex justify-between items-center">
        <button
          @click="sidebarOpen = true"
          class="md:hidden p-2 text-gray-500 hover:text-gray-800"
        >
          ☰
        </button>
        <h2 class="text-lg font-semibold">Admin Dashboard</h2>
        <button
          @click="logout"
          class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition cursor-pointer"
        >
          Logout
        </button>
      </header>

      <!-- Router view -->
      <main class="flex-1 overflow-y-auto p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../store";
import { storeToRefs } from "pinia";

const sidebarOpen = ref(false);
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

/** Check if current user role matches allowed roles */
function hasRole(roles) {
  const userRole = user.value?.role;
  return userRole && roles.includes(userRole);
}

/** Log user out */
function logout() {
  authStore.logout();
}
</script>

<style scoped>
.nav-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0.75rem;
  border-radius: 0.375rem;
  color: #374151;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background-color: #f3f4f6;
}

.active-link {
  background-color: #e0f2fe;
  color: #0369a1;
  font-weight: 600;
}
</style>
