<script setup>
import { useColorStore } from "@/stores/ColorStore.js";
import { storeToRefs } from "pinia";
const color_store = useColorStore();
const winOrLoseMessage = color_store.endOfGame();
</script>

<template>
  <div>endOfGame: {{ winOrLoseMessage }}</div>
</template>
