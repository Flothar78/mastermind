<script setup>
import PlayView from "@/views/PlayView.vue";
import ScoreView from "@/views/ScoreView.vue";
</script>

<template>
  <div class="score-wrapper">
    <ScoreView />
  </div>
  <div class="play-and-result-wrapper">
    <PlayView />
  </div>
</template>

<style scoped>
@media screen and (min-width: 400px) {
  .play-and-result-wrapper {
    display: flex;
    justify-content: center;
    margin-left: 10vw;
    margin-right: 10vw;
  }
}
</style>
