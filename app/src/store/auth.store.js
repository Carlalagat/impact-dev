import { ref } from "vue";
import { defineStore } from "pinia";
import router from "../router";
import { supabase } from "../supabase/supabaseClient";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const access_token = ref(null);
  const error = ref(null);
  const loading = ref(false);
  const isLoginModalOpen = ref(false);

  /**
   * Login function using Supabase email/password auth
   * - Attempts to sign in the user
   * - On success, saves user and token
   * - On failure, sets error message
   */
  async function login(credentials) {
    try {
      loading.value = true;
      error.value = null;

      // Attempt login with Supabase
      const { data, error: supabaseError } =
        await supabase.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        });

      // If Supabase returned an error, throw it
      if (supabaseError) {
        throw supabaseError;
      }

      // Login successful - store user + token
      user.value = data.session.user;
      access_token.value = data.session.access_token;

      // Close login modal (if used)
      isLoginModalOpen.value = false;

      // Redirect to admin dashboard
      router.push("/dashboard");
    } catch (err) {
      // Handle errors
      console.error("Login failed:", err);
      error.value = err.message || "An unknown error occurred.";
    } finally {
      loading.value = false;
    }
  }

  /**
   * Logout function
   * - Clears session from Supabase
   * - Clears local state
   * - Redirects to home page
   */
  async function logout() {
    loading.value = true;
    error.value = null;

    // Supabase sign out
    await supabase.auth.signOut();

    // Clear local state
    user.value = null;
    access_token.value = null;
    loading.value = false;

    // Navigate back to home
    router.push("/");
  }

  /**
   * Check user session on app startup
   * - Useful for keeping user logged in on page refresh
   * - Gets session from Supabase client
   */
  async function checkUserSession() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      user.value = session.user;
      access_token.value = session.access_token;
    }
  }

  // Return the state and actions so they can be used in components
  return {
    user,
    access_token,
    error,
    loading,
    isLoginModalOpen,
    login,
    logout,
    checkUserSession,
  };
});
