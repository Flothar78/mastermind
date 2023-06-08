import { defineStore } from "pinia";
import { ref } from "vue";
export const useScoreStore = defineStore("ScoreStore", {
  state: () => {
    return { score: ref(0) };
  },
  actions: {
    increment() {
      this.score++;
    },
  },
});
