<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { storeToRefs } from "pinia";
import { useColorStore } from "@/stores/ColorStore.js";
const color_store = useColorStore();
const { playRowId, numberOfPeons } = storeToRefs(color_store);
</script>

<template>
  <div class="game-solution">
    <div class="peons-row">
      <PeonOccurence
        v-show="playRowId == 10000"
        v-for="number in numberOfPeons"
        :key="number"
        :class="color_store.getRandomColors(number - 1)"
      />
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 800px) {
  .game-solution {
    border: black 2.5px solid;
    background-color: #e6e6e6;
    height: 7.5vw;
  }
  .peons-row {
    border: black 0.5px solid;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 4vw;
    margin: 1vw;
  }
  .peon-choice {
    border: black 0.5px solid;
    width: 1.75vw;
    height: 1.75vw;
    border-radius: 50%;
  }
}
</style>
