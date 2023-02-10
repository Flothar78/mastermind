<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { useColorStore } from "@/stores/colorStore.js";
import { ref } from "vue";

const color_store = useColorStore();
let classColor1 = ref("");
let classColor2 = ref("");
let classColor3 = ref("");

function getColor1FromStore() {
  classColor1.value = Object.values(color_store.choiceOfColor).join``;
  return classColor1;
}
function getColor2FromStore() {
  classColor2.value = Object.values(color_store.choiceOfColor).join``;
  return classColor2;
}
function getColor3FromStore() {
  classColor3.value = Object.values(color_store.choiceOfColor).join``;
  return classColor3;
}
</script>

<template>
  <div class="peons-row">
    <PeonOccurence @click="getColor1FromStore()" :class="classColor1" />
    <PeonOccurence @click="getColor2FromStore()" :class="classColor2" />
    <PeonOccurence @click="getColor3FromStore()" :class="classColor3" />
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
.peoncolor {
  background-color: black;
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 50%;
}
</style>
