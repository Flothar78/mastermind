<script setup >
import GameSolution from "@/components/GameSolution.vue";
import AvailableColors from "@/components/AvailableColors.vue";
import TryAndChecks from "@/components/TryAndChecks.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { useScoreStore } from "@/stores/ScoreStore.js";
const restartGame = () => {
  //  useColorStore().restartScoreStore();
  useScoreStore().restartGame();
};
</script>
<template>
  <button type="button" class="reset-button" @click="restartGame">
    <div>RESET</div>
  </button>
  <div class="play-ground">
    <GameSolution />
    <TryAndChecks />
    <AvailableColors />
  </div>
</template>
<style scoped>
@import "@/assets/main.css";
</style>
