<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { storeToRefs } from "pinia";
const color_store = useColorStore();
const { rows } = storeToRefs(color_store);
const checkColorsPlaces = color_store.checkColorsPlaces();
</script>
<template>
  <div class="try-result">
    <div v-for="row in rows" :key="row.id" class="color-check-container">
      <PeonOccurence
        v-for="peon in row"
        :key="row.indexOf(peon)"
        :class="checkColorsPlaces[row.indexOf(peon)]"
        class="peonsInCheckRows"
      />
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 950px) {
  .try-result {
    border: black 0.5px solid;
    width: 20vw;
    margin-left: 20vw;
  }
  .color-check-container {
    border: red 1px solid;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5vw;
    margin: 2vw;
  }
  .peonsInCheckRows {
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
