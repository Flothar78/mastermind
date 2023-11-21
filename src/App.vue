<script setup>
import PlayView from "@/views/PlayView.vue";
import ScoreView from "@/views/ScoreView.vue";
</script>

<template>
  <div id="app">
    <div class="play-and-result-wrapper">
      <PlayView />
    </div>
    <ScoreView />
  </div>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
