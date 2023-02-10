<template>
  <div>PeonStore.vue</div>
  <div class="peons-row">
    <PeonOccurence class="red" v-on:click="redToStore()" />
    <PeonOccurence class="blue" v-on:click="blueToStore()" />
  </div>
</template>

<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { useColorStore } from "@/stores/colorStore.js";

const color_store = useColorStore();

function redToStore() {
  color_store.add("red");
}
function blueToStore() {
  color_store.add("blue");
}

// const redChoice = () => {
//   PeonColor.length < 3
//     ? PeonColor.push("red")
//     : ((PeonColor.length = 0), PeonColor.push("red"));
// };
// const blueChoice = () => {
//   PeonColor.length < 3
//     ? PeonColor.push("blue")
//     : ((PeonColor.length = 0), PeonColor.push("blue"));
// };
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
