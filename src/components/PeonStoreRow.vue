<template>
  <div class="peons-row">
    <div v-on:click="redChoice" class="peon-color-red"></div>
    <div v-on:click="blueChoice" class="peon-color-blue"></div>
  </div>
</template>

<script>
import { reactive } from "vue";
export const PeonColor = reactive([]);
</script>

<script setup>
const redChoice = () => {
  PeonColor.length < 3
    ? PeonColor.push("red")
    : ((PeonColor.length = 0), PeonColor.push("red"));
};
const blueChoice = () => {
  PeonColor.length < 3
    ? PeonColor.push("blue")
    : ((PeonColor.length = 0), PeonColor.push("blue"));
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
.peon-color-red {
  background-color: red;
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 50%;
}
.peon-color-blue {
  background-color: blue;
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 50%;
}
</style>
