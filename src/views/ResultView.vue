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
.try-result {
  border: black 1px solid;
  margin-left: 7vw;
  padding-top: 12vw;
}
</style>
