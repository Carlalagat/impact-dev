// src/store/auth.store.js
import { ref } from "vue";
import { defineStore } from "pinia";
import router from "../router";
import { supabase } from "../supabase/supabaseClient";
import axiosInstance from "../providers/api/axios";
import { useLocalStorage } from "@vueuse/core";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null); // admin user object from backend
  const access_token = useLocalStorage("x-token", null); // JWT from Supabase
  const error = ref(null);
  const loading = ref(false);
  const isLoginModalOpen = ref(false);
  const sessionChecked = ref(false);

  /** Login function: Supabase auth + backend fetch */
  async function login(credentials) {
    try {
      loading.value = true;
      error.value = null;

      // Step 1: Login with Supabase
      const { data, error: supabaseError } =
        await supabase.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        });

      if (supabaseError) throw supabaseError;

      // Step 2: Save access token to local storage & reactive ref
      const token = data.session.access_token;
      access_token.value = token;

      // Step 3: Fetch admin info from backend
      const res = await axiosInstance.get("/admin/me");
      user.value = res.data;

      // Step 4: Close modal & redirect
      isLoginModalOpen.value = false;
      router.push("/admin");
    } catch (err) {
      console.error("Login failed:", err);
      error.value = err.message || "An unknown error occurred.";
    } finally {
      loading.value = false;
    }
  }

  /** Logout function */
  async function logout() {
    await supabase.auth.signOut();
    user.value = null;
    access_token.value = null;
    router.push("/");
  }

  /** Check session on page load */
  async function checkUserSession() {
    try {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        access_token.value = data.session.access_token;

        // Fetch backend user info
        const res = await axiosInstance.get("/admin/me");
        user.value = res.data;
      }
    } catch (err) {
      console.error("Session check failed:", err);
      access_token.value = null;
      user.value = null;
    } finally {
      sessionChecked.value = true;
    }
  }

  return {
    user,
    access_token,
    error,
    loading,
    isLoginModalOpen,
    sessionChecked,
    login,
    logout,
    checkUserSession,
  };
});
