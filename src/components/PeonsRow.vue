<script setup>
import { computed, reactive, h } from "vue";
import { peonColor } from "@/components/PeonStoreRow.vue";
let classColor = reactive([]);

const colorChoice = () => {
  console.log(String(Object.values(peonColor)));

  classColor.push(String(Object.values(peonColor)));
};
console.log(classColor);
</script>

<template>
  <div class="peons-row">
    <div class="peon-choice" @click="colorChoice" :class="classColor"></div>
    <div class="peon-choice" @click="colorChoice" :class="classColor"></div>
    <div class="peon-choice" @click="colorChoice" :class="classColor"></div>
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
