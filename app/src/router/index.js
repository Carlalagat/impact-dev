import { createRouter, createWebHistory } from "vue-router";
import {
  HomePageView,
  AboutPageView,
  EventsPageView,
  I3LaunchpadPageView,
  I3KingdomHubPageView,
  BlogPageView,
  ContactPageView,
  DashboardView,
  EventsView,
  PartnersView,
  SettingsView,
  SidebarView,
  ManagmentView,
} from "../views";
import { useAuthStore } from "../store";

const routes = [
  { path: "/", name: "home", component: HomePageView },
  {
    path: "/admin",
    component: SidebarView,
    meta: { requiresAuth: true },
    children: [
      { path: "", name: "admin.dashboard", component: DashboardView },
      {
        path: "events",
        name: "admin.events",
        meta: { requiresAuth: true, roles: ["SUPERADMIN", "STAFF"] },
        component: EventsView,
      },
      {
        path: "partners",
        name: "admin.partners",
        meta: { requiresAuth: true, roles: ["SUPERADMIN"] },
        component: PartnersView,
      },
      {
        path: "settings",
        name: "admin.settings",
        meta: { requiresAuth: true, roles: ["SUPERADMIN", "STAFF"] },
        component: SettingsView,
      },
      {
        path: "/admin/staff",
        name: "admin.staff",
        meta: { requiresAuth: true, roles: ["SUPERADMIN"] },
        component: ManagmentView,
      },
    ],
  },
  { path: "/about", name: "about", component: AboutPageView },
  { path: "/events", name: "events", component: EventsPageView },
  { path: "/i3launchpad", name: "i3launchpad", component: I3LaunchpadPageView },
  {
    path: "/i3kingdomhub",
    name: "i3kingdomhub",
    component: I3KingdomHubPageView,
  },
  { path: "/blog", name: "blog", component: BlogPageView },
  { path: "/contact", name: "contact", component: ContactPageView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  // Ensure session is loaded before checking
  if (!authStore.sessionChecked) {
    await authStore.checkUserSession();
    authStore.sessionChecked = true;
  }

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const allowedRoles = to.meta.roles;
  const isAuthenticated = !!authStore.user;

  if (requiresAuth && !isAuthenticated) {
    // Not logged in, show login modal
    authStore.isLoginModalOpen = true;
    return next(false);
  }

  if (allowedRoles && authStore.user) {
    const userRole = authStore.user.role;
    if (!allowedRoles.includes(userRole)) {
      return next("/admin");
    }
  }

  next();
});

export default router;
