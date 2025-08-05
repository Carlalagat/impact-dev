import { createRouter, createWebHistory } from "vue-router";
import {
  HomePageView,
  AboutPageView,
  EventsPageView,
  I3LaunchpadPageView,
  I3KingdomHubPageView,
  BlogPageView,
  ContactPageView
} from "../views";
import { useAuthStore } from "../store";

const routes = [
  // { path: "/", name: "app", component: LandingView },
  { path: "/", name: "home", component: HomePageView },
  { path: "/about", name:"about", component: AboutPageView },
  { path: "/events", name:"events", component: EventsPageView },
  { path: "/i3launchpad", name:"i3launchpad", component: I3LaunchpadPageView },
  { path: "/i3kingdomhub", name:"i3kingdomhub", component: I3KingdomHubPageView },
  { path: "/blog", name:"blog", component: BlogPageView },
  { path: "/contact", name:"contact", component: ContactPageView },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach(async (to, from) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/", "/login"];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  /**add function to check if user is logged in */
  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath;
    auth.isLoginModalOpen = true;
    return from.fullPath;
    // return "/login";
  }
});

export default router;
