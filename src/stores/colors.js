import { defineStore } from "pinia";

export const useColorStore = defineStore("colors", {
  state: () => {
    return { colors: [] };
  },
  actions: {
    create(color) {
      this.colors.push(color);
    },
  },
  getters: {},
});
