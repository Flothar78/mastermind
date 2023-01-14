<script setup>
import PeonsRow from "@/components/PeonsRow.vue";
</script>
<template>
  <div class="board-play">
    <PeonsRow />
    <PeonsRow />
    <PeonsRow />
    <PeonsRow />
    <PeonsRow />
  </div>
</template>

<style scoped>
.board-play {
  border: black 1px solid;
  height: 80%;
}
</style>
