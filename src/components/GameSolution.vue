<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { storeToRefs } from "pinia";
import { useColorStore } from "@/stores/ColorStore.js";
const color_store = useColorStore();
const { playRowId, numberOfPeons } = storeToRefs(color_store);
</script>

<template>
  <div class="game-solution" :class="{ 'active': playRowId === 10000 }">
    <PeonOccurence
      v-show="playRowId === 10000"
      v-for="number in numberOfPeons"
      :key="number"
      :class="color_store.getRandomColors(number - 1)"
      class="game-solution-peons"
    />
  </div>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
