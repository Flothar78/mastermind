<script setup>
import { ref } from "vue";
import PeonsRow from "@/components/PeonsRow.vue";
</script>

<template>
  <div class="board-play">
    <div>PlayGround.vue</div>
    <PeonsRow />
  </div>
</template>

<style scoped>
.board-play {
  border: black 1px solid;
  height: 80%;
}
</style>
