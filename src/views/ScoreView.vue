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
  <div>
    <div class="score-container">
      <div class="score">SCORE: {{ score }}</div>
    </div>
    <div class="infos-container" v-if="useColorStore().playRowId === 10000">
      <div class="winLooseMessage">
        {{ winLooseMessage }}
      </div>

      <button class="continue-button" type="button" @click="clickReplay">
        Continue
      </button>
      <button class="restart-button" type="button" @click="restartGame">
        Restart
      </button>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
