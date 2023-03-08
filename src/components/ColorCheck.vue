<script setup>
import { useColorStore } from "@/stores/ColorStore.js";
const color_store = useColorStore();
const numberOfPeons = color_store.numberOfPeons;
const samePlaceAndColor = color_store.samePlaceAndColor();
</script>

<template>
  <div class="color-check-container">
    <div
      v-for="number in numberOfPeons"
      :key="number"
      class="color-check"
      :class="samePlaceAndColor"
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
</style>
