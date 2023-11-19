<script setup>
import chosenColorClass from "@/components/AvailableColors.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { useScoreStore } from "@/stores/ScoreStore.js";
import { storeToRefs } from "pinia";
import { watch, toRaw, ref } from "vue";
const color_store = useColorStore();
const score_store = useScoreStore();
const { rows, playRowId, resultColors, winLooseMessage } =
  storeToRefs(color_store);
let { score } = storeToRefs(score_store);

watch(winLooseMessage, (newWinLooseMessage) => {
  newWinLooseMessage == "Win !" ? score_store.increment() : "";
});

const clickReplay = () => {
  color_store.$reset();
};
const restartGame = () => {
  chosenColorClass.value = ref(null);
  color_store.$reset();
  score_store.$reset();
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
      v-if="color_store.playRowId === 10000"
      type="button"
      @click="clickReplay"
    >
      Continue?</button
    ><button
      class="score-container-button"
      v-if="color_store.playRowId === 10000"
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
