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
  <div class="flexInCheckRows">
    <PeonOccurence
      v-for="peon in numberOfPeons"
      :key="peon - 1"
      :class="resultColors[rowNumber][peon - 1]"
      class="peon-in-check-row"
    />
  </div>
</template>

<style scoped>
@media screen and (min-width: 400px) {
  .flexInCheckRows {
    display: flex;
  }
  .peon-in-check-row {
    width: 1.5vw;
    height: 1.5vw;
    border-radius: 50%;
  }
  .black {
    background-color: black;
  }
  .grey {
    background-color: grey;
  }
  .none {
    background-color: red;
  }
}
</style>
