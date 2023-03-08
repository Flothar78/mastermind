<script setup lang="ts">
import PeonOccurence from "@/components/PeonOccurence.vue";
import { storeToRefs } from "pinia";
import { useColorStore } from "@/stores/ColorStore.js";
const color_store = useColorStore();
const numberOfPeons = color_store.numberOfPeons;
</script>

<template>
  <div class="game-solution">
    <div class="peons-row">
      <PeonOccurence
        v-for="number in numberOfPeons"
        :key="number"
        :class="color_store.getRandomColors(number - 1)"
      />
    </div>
  </div>
</template>

<style scoped>
.game-solution {
  border: black 5px solid;
  background-color: #e6e6e6;
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
