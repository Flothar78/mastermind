<script setup>
import PeonsRow from "@/components/PeonsRow.vue";
import peonColor from "@/components/PeonStoreRow.vue";
import { ref } from "vue";
console.log(peonColor);
</script>
<template>
  <div class="board-play"><PeonsRow /></div>
</template>

<style scoped>
.board-play {
  border: black 1px solid;
  height: 80%;
}
</style>
