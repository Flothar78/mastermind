<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { storeToRefs } from "pinia";
const color_store = useColorStore();
defineProps({ rowNumber: Number });
const { numberOfPeons, resultColors } = storeToRefs(color_store);
</script>
<template>
  <div>
    <PeonOccurence
      v-for="peon in numberOfPeons"
      :key="peon - 1"
      :class="resultColors[rowNumber][peon - 1]"
      class="peon-in-check-row"
    />
  </div>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
