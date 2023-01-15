<script setup>
import { computed, h } from "vue";
import { peonColor } from "@/components/PeonStoreRow.vue";
let truc;
const colorChoice = () => {
  console.log(String(Object.values(peonColor)));

  truc = String(Object.values(peonColor));
};
</script>

<template>
  <div class="peons-row">
    <div class="peon-choice" @click="colorChoice" :class="truc"></div>
    <div class="peon-choice"></div>
    <div class="peon-choice"></div>
  </div>
</template>

<style scoped>
.peons-row {
  border: black 1px solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vw;
  margin: 2vw;
}
.peon-choice {
  border: black 1px solid;
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 50%;
}
.redcolor {
  background-color: red;
}
.bluecolor {
  background-color: blue;
}
</style>
