import { createRouter, createWebHistory } from "vue-router";

import {
  HomePageView,
  AboutPageView,
  EventsPageView,
  I3LaunchpadPageView,
  I3KingdomHubPageView,
  BlogPageView,
  ContactPageView
} from "../views
import { useAuthStore } from "../store";

const routes = [
  // { path: "/", name: "app", component: LandingView },
  { path: "/", name: "home", component: HomePageView },
  {path: "/admin", name: "admin", component: AdminView, meta: { requiresAuth: true },},
  { path: "/about", name:"about", component: AboutPageView },
  { path: "/events", name:"events", component: EventsPageView },
  { path: "/i3launchpad", name:"i3launchpad", component: I3LaunchpadPageView },
  { path: "/i3kingdomhub", name:"i3kingdomhub", component: I3KingdomHubPageView },
  { path: "/blog", name:"blog", component: BlogPageView },
  { path: "/contact", name:"contact", component: ContactPageView },

];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

// Navigation Guard for Modal-based Login
router.beforeEach((to, from, next) => {
  // Get the auth store
  const authStore = useAuthStore();

  // Check if the user is authenticated from the store's state
  const isAuthenticated = !!authStore.access_token;

  // Check if the route requires authentication
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    // If the route is protected and the user is not logged in:
    // 1. Open the login modal
    authStore.isLoginModalOpen = true;
    // 2. Cancel the navigation to the protected route
    next(false);
  } else {
    // Otherwise, allow navigation to proceed
    next();
  }
});

export default router;
