<script setup>
import { ref } from "vue";
import { peonColor } from "@/components/PeonStoreRow.vue";
const isRed = ref(false);
const isBlue = ref(false);
if (peonColor.red) {
  isRed.value = true;
} else if (peonColor.blue) {
  isBlue.value = true;
}
console.log(peonColor.red, peonColor.blue);
</script>

<template>
  <div class="peons-row">
    <div
      class="peon-choice"
      :class="{ redcolor: isRed, bluecolor: isBlue }"
    ></div>

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
