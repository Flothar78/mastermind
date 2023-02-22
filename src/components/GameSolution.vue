<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
</script>

<template>
  <div class="peons-row">
    GAME SOLUTION
    <PeonOccurence />
    <PeonOccurence />
    <PeonOccurence />
  </div>
</template>

<style scoped>
.game-solution {
  border: black 1px solid;
  height: 15vw;
}
.peons-row {
  border: black 1px solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vw;
  margin: 2vw;
}
.peon-choice {
  border: black 1px solid;
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 50%;
}
</style>
