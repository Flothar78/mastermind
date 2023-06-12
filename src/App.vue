<script setup>
import PlayView from "@/views/PlayView.vue";
import ResultView from "@/views/ResultView.vue";
import ScoreView from "@/views/ScoreView.vue";
</script>

<template>
  <div class="score-wrapper">
    <ScoreView />

    <div class="play-and-result-wrapper">
      <PlayView />
      <ResultView />
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 800px) {
  .score-wrapper {
  }
  .play-and-result-wrapper {
    display: flex;
    justify-content: center;
  }
}
</style>
