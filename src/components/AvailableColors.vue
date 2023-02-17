<template>
  <div class="peons-row">
    <PeonOccurence class="red" v-on:click="redToStore()" />
    <PeonOccurence class="blue" v-on:click="blueToStore()" />
  </div>
</template>

<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { useColorStore } from "@/stores/ColorStore.js";

const color_store = useColorStore();

const redToStore = () => {
  color_store.addColorToStore("red");
};
const blueToStore = () => {
  color_store.addColorToStore("blue");
};
</script>

<style scoped>
.peons-row {
  border: black 1px solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vw;
  margin: 2vw;
}
</style>
