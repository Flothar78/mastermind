<script setup>
import WinLose from "@/components/WinLose.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { storeToRefs } from "pinia";
const color_store = useColorStore();
const { score } = storeToRefs(color_store);
</script>

<template>
  <div>
    <WinLose />
  </div>
  <div class="score-container">At this point, your score is: {{ score }}</div>
</template>

<style scoped>
.score-container {
  display: flex;
  flex-direction: column;
  padding: 1vw 0 3vw 0;
}
</style>
