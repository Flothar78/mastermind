<script setup>
import PlayView from "@/views/PlayView.vue";
import ResultView from "@/views/ResultView.vue";
import ScoreView from "@/views/ScoreView.vue";
</script>

<template>
  <div>
    <ScoreView />
  </div>
  <div class="wrapper">
    <PlayView />
    <ResultView />
  </div>
</template>

<style scoped>
@media screen and (min-width: 800px) {
  .wrapper {
    display: flex;
    justify-content: space-between;
  }
}
</style>
