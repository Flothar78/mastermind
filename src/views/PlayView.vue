<script setup lang="ts">
import GameSolution from "@/components/GameSolution.vue";
import PeonsRow from "@/components/PeonsRow.vue";
import AvailableColors from "@/components/AvailableColors.vue";
</script>

<template>
  <div class="play-ground">
    <GameSolution />
    <PeonsRow />
    <AvailableColors />
  </div>
</template>

<style scoped>
@media screen and (min-width: 800px) {
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
