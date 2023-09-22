<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { reactive, computed } from "vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { storeToRefs } from "pinia";
const color_store = useColorStore();
const { colorsArray, addColorToStore } = storeToRefs(color_store);
</script>

<template>
  <div class="peons-row">
    <PeonOccurence
      v-for="(color, index) in colorsArray"
      :key="index"
      :class="colorsArray[index]"
      class="available-colors-peons"
      @click="color_store.addColorToStore(colorsArray[index])"
    />
  </div>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
