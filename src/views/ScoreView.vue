<script setup>
import WinLose from "@/components/WinLose.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { storeToRefs } from "pinia";
const color_store = useColorStore();
const { score } = storeToRefs(color_store);
</script>

<template>
  <div class="score-container">
    SCORE: {{ score }}
    <div>
      <WinLose />
    </div>
  </div>
</template>

<style scoped>
.score-container {
  display: flex;
  flex-direction: column;
}
</style>
