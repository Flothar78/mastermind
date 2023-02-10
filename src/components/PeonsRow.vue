<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
</script>

<template>
  <div class="peons-row">
    <PeonOccurence />
    <PeonOccurence />
    <PeonOccurence />
  </div>

  <!--<div
      v-for="color in PeonColor"
      :key="color"
      class="peoncolor"
      :style="{ backgroundColor: color }"
    ></div> -->
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
