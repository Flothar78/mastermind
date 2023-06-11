<script setup>
import { useColorStore } from "@/stores/ColorStore.js";
import { useScoreStore } from "@/stores/ScoreStore.js";
import { storeToRefs } from "pinia";
import { watch, toRaw } from "vue";
const color_store = useColorStore();
const score_store = useScoreStore();
const { rows, playRowId, resultColors, winLooseMessage } =
  storeToRefs(color_store);
let { score } = storeToRefs(score_store);

watch(winLooseMessage, (newWinLooseMessage) => {
  newWinLooseMessage == "You win !" ? score_store.increment() : "";
});

const clickReplay = () => {
  color_store.$reset();
};
</script>

<template>
  <div class="score-container">
    <div>
      <div class="score-replay-container">
        SCORE: {{ score }}
        <div>
          <br />
          <div>{{ winLooseMessage }}</div>
        </div>

        <button
          v-if="color_store.playRowId === 10000"
          type="button"
          @click="clickReplay"
        >
          Play Again ?
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.score-container {
  display: flex;
  flex-direction: column;
  padding: 1vw 0 3vw 0;
}
.score-replay-container {
  display: flex;
}
button {
  height: 3vw;
  width: 14vw;
  margin-left: 3vw;
}
</style>
