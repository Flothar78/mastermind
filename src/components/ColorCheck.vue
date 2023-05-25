<script setup lang="ts">
import { useColorStore } from "@/stores/ColorStore.js";
const color_store = useColorStore();
const numberOfPeons = color_store.numberOfPeons;
const checkColorsPlaces = color_store.checkColorsPlaces();
</script>

<template>
  <div class="color-check-container">
    <div
      v-for="number in numberOfPeons"
      :key="number"
      class="color-check"
      :class="checkColorsPlaces"
    ></div>
  </div>
</template>

<style scoped>
.color-check-container {
  border: black 1px solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 12vw;
  height: 5vw;
  margin: 2vw;
}
.color-check {
  border: black 1px solid;
  width: 2vw;
  height: 2vw;
  border-radius: 50%;
}
.black {
  background-color: black;
}
.white {
  background-color: white;
}
.none {
  background-color: grey;
}
</style>
