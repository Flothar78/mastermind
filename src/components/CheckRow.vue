<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { storeToRefs } from "pinia";
const color_store = useColorStore();
const { numberOfPeons, rows, chosenRow } = storeToRefs(color_store);
const checkColorsPlaces = color_store.checkColorsPlaces(chosenRow);
defineProps({ rowNumber: Number });
</script>
<template>
  <div>
    <PeonOccurence
      v-for="peon in numberOfPeons"
      :key="peon - 1"
      :class="checkColorsPlaces[rowNumber][peon - 1]"
      class="peon-in-check-row"
    />
  </div>
</template>

<style scoped>
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
</style>
