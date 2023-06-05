<script setup>
import { useColorStore } from "@/stores/ColorStore.js";
import { storeToRefs } from "pinia";
const color_store = useColorStore();
//const { winLoseMessage } = storeToRefs(color_store.winLoseMessage);
</script>

<template>
  <div>{{ color_store.winLoseMessage }}</div>
</template>
