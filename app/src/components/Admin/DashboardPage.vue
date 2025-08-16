<template>
  <div class="space-y-6">
    <!-- Page Title -->
    <h1 class="text-2xl font-bold">Admin Dashboard</h1>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-sm font-semibold text-gray-500">Total Events</h2>
        <p class="text-3xl font-bold text-blue-500">{{ stats.events }}</p>
      </div>
      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-sm font-semibold text-gray-500">Total Partners</h2>
        <p class="text-3xl font-bold text-green-500">{{ stats.partners }}</p>
      </div>
      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-sm font-semibold text-gray-500">Total Users</h2>
        <p class="text-3xl font-bold text-purple-500">{{ stats.users }}</p>
      </div>
      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-sm font-semibold text-gray-500">Revenue</h2>
        <p class="text-3xl font-bold text-orange-500">${{ stats.revenue }}</p>
      </div>
    </div>

    <!-- Charts Row -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-lg font-semibold mb-4">Monthly Users</h2>
        <canvas id="usersChart"></canvas>
      </div>

      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-lg font-semibold mb-4">Event Registrations</h2>
        <canvas id="eventsChart"></canvas>
      </div>
    </div>

    <!-- Recent Activity Table -->
    <div class="bg-white shadow rounded-lg p-4">
      <h2 class="text-lg font-semibold mb-4">Recent Activity</h2>
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="p-2">Date</th>
            <th class="p-2">User</th>
            <th class="p-2">Action</th>
            <th class="p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(activity, index) in recentActivity"
            :key="index"
            class="border-t"
          >
            <td class="p-2">{{ activity.date }}</td>
            <td class="p-2">{{ activity.user }}</td>
            <td class="p-2">{{ activity.action }}</td>
            <td class="p-2">{{ activity.details }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

// Stats Data
const stats = ref({
  events: 12,
  partners: 5,
  users: 120,
  revenue: 3500,
});

// Dummy Recent Activity
const recentActivity = ref([
  {
    date: "2025-08-14",
    user: "John Doe",
    action: "Created Event",
    details: "Annual Gala",
  },
  {
    date: "2025-08-13",
    user: "Jane Smith",
    action: "New Partner",
    details: "XYZ Corp",
  },
  {
    date: "2025-08-12",
    user: "Mark Lee",
    action: "User Signup",
    details: "Premium Plan",
  },
]);

// Create Charts
onMounted(() => {
  // Monthly Users Chart
  new Chart(document.getElementById("usersChart"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Users",
          data: [50, 60, 70, 90, 120, 150, 180],
          borderColor: "#4F46E5",
          fill: false,
        },
      ],
    },
  });

  // Event Registrations Chart
  new Chart(document.getElementById("eventsChart"), {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Registrations",
          data: [20, 25, 30, 40, 35, 50, 60],
          backgroundColor: "#10B981",
        },
      ],
    },
  });
});
</script>
