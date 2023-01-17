<template>
  <div class="peons-row">
    <div v-on:click="redChoice" class="peon-color-red"></div>
    <div v-on:click="blueChoice" class="peon-color-blue"></div>
  </div>
</template>

<script>
import { reactive } from "vue";
export const peonColor = reactive([]);
</script>

<script setup>
const redChoice = () => {
  peonColor.length < 3 ? peonColor.push("red") : (peonColor.length = 0);
  console.log(peonColor);
};
const blueChoice = () => {
  peonColor.length < 3 ? peonColor.push("blue") : (peonColor.length = 0);
  console.log(peonColor);
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
