<template>
  <div
    class="bg-white p-4 rounded-md border border-gray-400 shadow-2xl max-w-7xl"
  >
    <p class="text-xl text-center p-4">Admin Login</p>
    <div>
      <form @submit.prevent="onSubmit">
        <p class="p-2 text-lg">E-mail</p>
        <input
          type="text"
          v-model="formData.email"
          :class="{ 'border-2 border-red-500': v$.email.$error }"
          name="enter your email address"
          id="LoginEmail"
          class="w-full md:w-[350px] border border-gray-400 p-2 rounded-md"
        />
        <p>
          <span
            v-for="error in v$.email.$errors"
            :key="error.$uid"
            class="text-red-500"
            >{{ error.$message }}</span
          >
        </p>
        <p class="p-2 text-lg">Password</p>
        <input
          type="password"
          v-model="formData.password"
          :class="{ 'border-2 border-red-500': v$.password.$error }"
          name="Enter your password"
          id="LoginPassword"
          class="w-full md:w-[350px] border border-gray-400 p-2 rounded-md"
        />
        <p>
          <span
            v-for="error in v$.password.$errors"
            :key="error.$uid"
            class="text-red-500"
            >{{ error.$message }}</span
          >
        </p>
        <div class="flex justify-center items-end sticky py-8 bottom-0">
          <button
            class="text-white bg-green-600 px-4 py-2 rounded-md w-full"
            type="submit"
            :disabled="v$.$invalid || loading"
            :class="{ 'opacity-50 cursor-not-allowed': v$.$invalid || loading }"
          >
            {{ loading ? "Logging in..." : "Login" }}
          </button>
        </div>
        <div v-if="error" class="text-red-500">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useAuthStore } from "../../store";
import { storeToRefs } from "pinia";

/**initialise the auth store */
const authStore = useAuthStore();

// Make store state reactive with storeToRefs
const { error, loading } = storeToRefs(authStore);

onMounted(() => {
  // Clear any previous error when the component mounts
  authStore.error = null;
});

/**Form variables */
const formData = reactive({
  email: "",
  password: "",
});

const validations = computed(() => {
  return {
    email: { required, email },
    password: { required, minLength: minLength(6) },
  };
});

/**initialise form validation */
const v$ = useVuelidate(validations, formData);

/**Submit form */
/** Submit form */
const onSubmit = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;

  // Call the refactored login action from the store
  await authStore.login(formData);
};
</script>
