<script setup>
import CheckRow from "@/components/CheckRow.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { storeToRefs } from "pinia";
const color_store = useColorStore();
const { rows } = storeToRefs(color_store);
</script>
<template>
  <div class="try-result">
    <CheckRow
      v-for="row in rows"
      :key="rows.indexOf(row)"
      class="color-check-container"
    />
  </div>
</template>

<style scoped>
@media screen and (min-width: 800px) {
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
  .color-check-container {
    border: red 1px solid;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5vw;
    margin: 2vw;
  }
  .black {
    background-color: black;
  }
}
</style>
