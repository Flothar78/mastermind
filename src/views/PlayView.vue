<script setup lang="ts">
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
  <div class="play-ground">
    <GameSolution />
    <TryAndChecks />
    <AvailableColors />
    <button type="button" @click="restartGame"><div>RESET</div></button>
  </div>
</template>
<style scoped>
@import "@/assets/main.css";
button {
  background-color: #7c5b3a;
  font-size: 0.5rem;
  color: #3f200f;
  height: 3vw;
  width: 15vw;
  border-radius: 10px;
}
</style>
