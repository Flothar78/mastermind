import { defineStore } from "pinia";

export const useColorStore = defineStore("colorStore", {
  state: () => {
    return { choiceOfColor: [] };
  },
  actions: {
    add(className) {
      this.choiceOfColor.length = 0;
      this.choiceOfColor.push(className);
    },
  },
});
