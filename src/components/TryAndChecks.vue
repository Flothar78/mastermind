<script setup>
import PeonsRow from "@/components/PeonsRow.vue";
import CheckRow from "@/components/CheckRow.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { toRaw } from "vue";
import { storeToRefs } from "pinia";
const color_store = useColorStore();
const { rows } = storeToRefs(color_store);
</script>

<template>
  <div class="play-and-check-container">
    <PeonsRow />
    <div class="checkRowsContainer">
      <CheckRow
        v-for="row in rows"
        :rowNumber="rows.indexOf(row)"
        :key="rows.indexOf(row)"
        class="checkRow"
      />
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 400px) {
  .play-and-check-container {
    border: black 0.5px solid;
    display: flex;
    justify-content: space-around;
  }
  .checkRowsContainer {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    height: 100%;
  }
  .checkRow {
    border: black 0.5px solid;
    padding: 1.5vh 0 1.5vh 0;
    height: 5vw;
  }
}
</style>
