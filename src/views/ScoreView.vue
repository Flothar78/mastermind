<script setup>
import chosenColorClass from "@/components/AvailableColors.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { useScoreStore } from "@/stores/ScoreStore.js";
import { storeToRefs } from "pinia";
import { watch, toRaw, ref } from "vue";
const { winLooseMessage } = storeToRefs(useColorStore());
let { score } = storeToRefs(useScoreStore());

watch(winLooseMessage, (newWinLooseMessage) => {
  newWinLooseMessage === "You win" ? useScoreStore().increment() : "";
});

const clickReplay = () => {
  useScoreStore().replayKeepingScore();
};
const restartGame = () => {
  useScoreStore().restartGame();
};
</script>

<template>
  <div class="score-infos">
    <div class="score-container">
      <div class="score">SCORE</div>
      <div>{{ score }}</div>
    </div>
    <div class="infos-container" v-if="useColorStore().playRowId === 10000">
      <div class="winLooseMessage">
        {{ winLooseMessage }}
      </div>

      <button class="continue-button" type="button" @click="clickReplay">Continue</button>
    </div>
    <button type="button" class="reset-button" @click="restartGame">
    <div>RESET</div>
  </button>
  </div>

</template>

<style scoped>
@import "@/assets/main.css";
</style>
