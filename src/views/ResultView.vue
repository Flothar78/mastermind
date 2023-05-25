<script setup>
import ColorCheck from "@/components/ColorCheck.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { storeToRefs } from "pinia";
const color_store = useColorStore();
const { rows } = storeToRefs(color_store);
const numberOfRows = rows;
</script>
<template>
  <div class="try-result">
    <ColorCheck v-for="number in numberOfRows" :key="number" />
  </div>
</template>

<style scoped>
@media screen and (min-width: 1250px) {
  .try-result {
    border: black 0.5px solid;

    margin-left: 10vw;
    padding-top: 6vw;
  }
}
</style>
