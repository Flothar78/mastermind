<script setup lang="ts">
import GameSolution from "@/components/GameSolution.vue";
import AvailableColors from "@/components/AvailableColors.vue";
import TryAndChecks from "@/components/TryAndChecks.vue";
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
button {
  background-color: #7c5b3a;
  font-size: 0.5rem;
  color: #3f200f;
  height: 3vw;
  width: 15vw;
  border-radius: 10px;
}
@import "@/assets/main.css";
</style>
