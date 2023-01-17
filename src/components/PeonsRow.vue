<script setup>
import { ref, reactive } from "vue";
import { peonColor } from "@/components/PeonStoreRow.vue";

console.log(peonColor);
</script>

<template>
  <div class="peons-row" @click="colorChoice">
    <div
      v-for="color in peonColor"
      :key="color"
      class="peoncolor"
      :style="{ backgroundColor: color }"
    ></div>
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
