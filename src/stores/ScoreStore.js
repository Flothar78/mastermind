import { defineStore } from "pinia";

export const useScoreStore = defineStore("ScoreStore", {
  state: () => {
    return { score: 0 };
  },
  actions: {
    increment() {
      this.score++;
    },
  },
});