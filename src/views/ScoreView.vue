<script setup>
import chosenColorClass from "@/components/AvailableColors.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { useScoreStore } from "@/stores/ScoreStore.js";
import { storeToRefs } from "pinia";
import { watch, toRaw, ref } from "vue";
const { rows, playRowId, resultColors, winLooseMessage } = storeToRefs(
  useColorStore()
);
let { score } = storeToRefs(useScoreStore());

watch(winLooseMessage, (newWinLooseMessage) => {
  newWinLooseMessage === "Win !" ? useScoreStore().increment() : "";
});

const clickReplay = () => {
  useScoreStore().replayKeepingScore();
};
const restartGame = () => {
  useScoreStore().restartGame();
};
</script>

<template>
  <div class="score-container">
    <div>SCORE: {{ score }}</div>
    <div>
      {{ winLooseMessage }}
    </div>
    <button
      class="score-container-button"
      v-if="useColorStore().playRowId === 10000"
      type="button"
      @click="clickReplay"
    >
      Continue?</button
    ><button
      class="score-container-button"
      v-if="useColorStore().playRowId === 10000"
      type="button"
      @click="restartGame"
    >
      Restart ?
    </button>
  </div>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
