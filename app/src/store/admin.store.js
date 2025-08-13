import { defineStore } from "pinia";
import axiosInstance from "../providers/api/axios";

export const useAdminStore = defineStore("admin", {
  state: () => ({ admins: [] }),
  actions: {
    async fetchAdmins() {
      const { data } = await axiosInstance.get("/admin");
      this.admins = data;
    },
    async createAdmin(payload) {
      const { data } = await axiosInstance.post("/admin", payload);
      this.admins.push(data);
    },
    async updateAdmin(id, payload) {
      const { data } = await axiosInstance.patch(`/admin/${id}`, payload);
      const index = this.admins.findIndex((a) => a.id === id);
      if (index !== -1) this.admins[index] = data;
    },
    async deleteAdmin(id) {
      await axiosInstance.delete(`/admin/${id}`);
      this.admins = this.admins.filter((a) => a.id !== id);
    },
  },
});
