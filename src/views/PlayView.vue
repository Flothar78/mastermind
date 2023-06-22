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
  </div>
</template>

<style scoped>
@media screen and (min-width: 400px) {
  .play-ground {
    border: black 0.5px solid;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 40vw;
    min-width: 45vw;
    padding-left: 1.5vw;
    padding-right: 1.5vw;
  }
}
</style>
