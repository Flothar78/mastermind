<script setup>
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
.play-ground {
  border: black 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 65vw;
  width: 70vw;
  padding-left: 3vw;
  padding-right: 3vw;
}
</style>
