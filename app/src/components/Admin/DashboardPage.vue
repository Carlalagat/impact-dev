<template>
  <div class="space-y-6">
    <!-- Title -->
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold">Admin Dashboard</h1>
      <select v-model="year" class="border rounded px-3 py-2">
        <option v-for="y in yearOptions" :key="y" :value="y">{{ y }}</option>
      </select>
    </div>

    <!-- Stat Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <CardStat label="Total Events" :value="stats.events" tone="blue" />
      <CardStat label="Partners" :value="stats.partners" tone="green" />
      <CardStat label="Products" :value="stats.products" tone="purple" />
      <CardStat
        label="Revenue"
        :value="formatCurrency(stats.revenue)"
        tone="orange"
      />
    </div>

    <!-- KPIs -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <CardKpi label="Upcoming Events" :value="stats.upcomingEvents" />
      <CardKpi label="Customers" :value="stats.customers" />
      <CardKpi label="Low Stock" :value="stats.lowStockProducts" />
      <CardKpi
        label="Revenue (7d)"
        :value="formatCurrency(stats.last7dRevenue)"
      />
    </div>

    <!-- Charts -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-lg font-semibold mb-4">Orders (Count & Revenue)</h2>
        <canvas ref="ordersChartEl"></canvas>
      </div>
      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-lg font-semibold mb-4">Tickets & Events</h2>
        <canvas ref="mixChartEl"></canvas>
      </div>
    </div>

    <!-- Activity -->
    <div class="bg-white shadow rounded-lg p-4">
      <h2 class="text-lg font-semibold mb-4">Recent Activity</h2>
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="p-2">When</th>
            <th class="p-2">Type</th>
            <th class="p-2">Title</th>
            <th class="p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(a, i) in activity" :key="i" class="border-t">
            <td class="p-2">{{ formatDateTime(a.createdAt) }}</td>
            <td class="p-2">{{ a.type }}</td>
            <td class="p-2">{{ a.title }}</td>
            <td class="p-2 text-gray-600">{{ a.details }}</td>
          </tr>
        </tbody>
      </table>
      <div v-if="activity.length === 0" class="p-4 text-gray-500">
        No recent activity.
      </div>
    </div>
  </div>
</template>

<script setup>
/** Live dashboard pulling from Nest endpoints */
import { ref, onMounted, watch, onBeforeUnmount } from "vue";
import Chart from "chart.js/auto";
import axiosInstance from "../../providers/api/axios";

/** cards + kpis */
const stats = ref({
  events: 0,
  partners: 0,
  products: 0,
  tickets: 0,
  orders: 0,
  revenue: 0,
  upcomingEvents: 0,
  lowStockProducts: 0,
  customers: 0,
  last7dRevenue: 0,
});

/** charts state */
const year = ref(new Date().getFullYear());
const yearOptions = Array.from(
  { length: 5 },
  (_, i) => new Date().getFullYear() - i
);
const trends = ref({
  labels: [],
  orders: { count: [], revenue: [] },
  tickets: [],
  events: [],
});

/** activity */
const activity = ref([]);

/** chart refs & instances */
const ordersChartEl = ref(null);
const mixChartEl = ref(null);
let ordersChart, mixChart;

/** helpers */
function formatCurrency(n) {
  return Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  }).format(Number(n || 0));
}
function formatDateTime(v) {
  return new Date(v).toLocaleString();
}

/** data loaders */
async function loadStats() {
  const { data } = await axiosInstance.get("/dashboard/stats");
  stats.value = data;
}
async function loadTrends() {
  const { data } = await axiosInstance.get("/dashboard/trends", {
    params: { year: year.value },
  });
  trends.value = data;
  renderCharts();
}
async function loadActivity() {
  const { data } = await axiosInstance.get("/dashboard/activity", {
    params: { limit: 25 },
  });
  activity.value = data;
}

/** charts render */
function renderCharts() {
  /** destroy previous instances to prevent leaks */
  if (ordersChart) ordersChart.destroy();
  if (mixChart) mixChart.destroy();

  /** Orders chart: bar (count) + line (revenue) */
  ordersChart = new Chart(ordersChartEl.value, {
    type: "bar",
    data: {
      labels: trends.value.labels,
      datasets: [
        {
          type: "bar",
          label: "Orders",
          data: trends.value.orders.count,
        },
        {
          type: "line",
          label: "Revenue",
          data: trends.value.orders.revenue,
          yAxisID: "y1",
        },
      ],
    },
    options: {
      responsive: true,
      interaction: { mode: "index", intersect: false },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: "Orders" } },
        y1: {
          beginAtZero: true,
          position: "right",
          title: { display: true, text: "Revenue" },
        },
      },
    },
  });

  /** Mixed chart: tickets + events */
  mixChart = new Chart(mixChartEl.value, {
    type: "bar",
    data: {
      labels: trends.value.labels,
      datasets: [
        { type: "bar", label: "Tickets", data: trends.value.tickets },
        { type: "line", label: "Events", data: trends.value.events },
      ],
    },
    options: {
      responsive: true,
      interaction: { mode: "index", intersect: false },
      scales: { y: { beginAtZero: true } },
    },
  });
}

/** lifecycle */
onMounted(async () => {
  await Promise.all([loadStats(), loadTrends(), loadActivity()]);
});
watch(year, loadTrends);
onBeforeUnmount(() => {
  if (ordersChart) ordersChart.destroy();
  if (mixChart) mixChart.destroy();
});
</script>

<!-- Small presentational components for stat cards -->
<script>
/** local components to keep template tidy */
export default {
  components: {
    CardStat: {
      props: { label: String, value: [String, Number], tone: String },
      template: `
        <div class="bg-white shadow rounded-lg p-4">
          <h2 class="text-sm font-semibold text-gray-500">{{ label }}</h2>
          <p class="text-3xl font-bold" :class="colorClass">{{ value }}</p>
        </div>
      `,
      computed: {
        colorClass() {
          return {
            blue: "text-blue-600",
            green: "text-green-600",
            purple: "text-purple-600",
            orange: "text-orange-600",
            rose: "text-rose-600",
          }[this.tone || "blue"];
        },
      },
    },
    CardKpi: {
      props: { label: String, value: [String, Number] },
      template: `
        <div class="bg-white shadow rounded-lg p-4">
          <h2 class="text-sm font-semibold text-gray-500">{{ label }}</h2>
          <p class="text-2xl font-bold">{{ value }}</p>
        </div>
      `,
    },
  },
};
</script>
