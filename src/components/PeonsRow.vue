<script setup>
import { ref } from "vue";
const isActive = ref(true);
</script>

<template>
  <div class="peons-row">
    <div class="peon-choice" v-bind:class="{ redColor: isActive }"></div>
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
.redColor {
  background-color: red;
}
</style>
