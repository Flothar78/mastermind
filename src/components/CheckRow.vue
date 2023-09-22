<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { useScoreStore } from "@/stores/ScoreStore.js";
import { storeToRefs } from "pinia";
const color_store = useColorStore();
const score_store = useScoreStore();
defineProps({ rowNumber: Number });
const { numberOfPeons, rows, chosenRow, resultColors } =
  storeToRefs(color_store);
const checkColorsPlaces = color_store.checkColorsPlaces(chosenRow);
</script>
<template>
  <div class="insideCheckRows">
    <PeonOccurence
      v-for="peon in numberOfPeons"
      :key="peon - 1"
      :class="resultColors[rowNumber][peon - 1]"
      class="peon-in-check-row"
    />
  </div>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
