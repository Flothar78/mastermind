<script setup >
import GameSolution from "@/components/GameSolution.vue";
import AvailableColors from "@/components/AvailableColors.vue";
import TryAndChecks from "@/components/TryAndChecks.vue";
import { useScoreStore } from "@/stores/ScoreStore.js";
const restartGame = () => {
  useScoreStore().restartGame();
};
</script>
<template>
 
  <div class="play-ground">
    <GameSolution />
    <TryAndChecks />
    <AvailableColors />
  </div>
</template>
<style scoped>
@import "@/assets/main.css";
</style>
