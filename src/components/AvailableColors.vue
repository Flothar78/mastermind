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
      @click="color_store.addColorToStore(colorsArray[index])"
    />
  </div>
</template>

<style scoped>
@media screen and (min-width: 400px) {
  .peons-row {
    border: black 2.5px solid;
    background-color: #e6e6e6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 8vw;
    margin: 1vw;
  }
}
</style>
