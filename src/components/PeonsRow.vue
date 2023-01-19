<script setup>
import { PeonColor } from "@/components/PeonStoreRow.vue";
</script>

<template>
  <div class="peons-row">
    <div
      v-for="color in PeonColor"
      :key="color"
      class="peoncolor"
      :style="{ backgroundColor: color }"
    >
      
    </div>
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
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 50%;
}
</style>
