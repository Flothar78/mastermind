<script setup>
import PeonsRow from "@/components/PeonsRow.vue";
import { ref } from "vue";
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
