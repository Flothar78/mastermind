import { defineStore } from "pinia";
import { useColorStore } from "@/stores/ColorStore.js";
import { ref } from "vue";
export const useScoreStore = defineStore( "ScoreStore", {
  state: () =>
  {
    return { score: 0, chosenColorClass: ref( null ) };
  },
  actions: {
    increment ()
    {
      this.score++;
    },
    restartGame ()
    {
      this.chosenColorClass = null;
      useScoreStore().$reset();
      useColorStore().$reset();
    },
    replayKeepingScore ()
    {
      this.chosenColorClass = null;
      useColorStore().$reset();
    },
  },
} );
