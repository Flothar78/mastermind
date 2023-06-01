<script setup>
import PlayView from "@/views/PlayView.vue";
import ResultView from "@/views/ResultView.vue";
</script>

<template>
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
