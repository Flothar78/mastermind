<script setup>
import { useColorStore } from "@/stores/ColorStore.js";
import { storeToRefs } from "pinia";
const color_store = useColorStore();
const { score, clickReplay } = storeToRefs(color_store);
</script>

<template>
  <div class="score-container">
    <div>
      <div>{{ color_store.winLoseMessage }}</div>
    </div>
    <div class="score-replay-container">
      At this point, your score is: {{ score }}
      <div>
        <button
          v-if="color_store.winLoseMessage !== 'Have a game !'"
          type="button"
          @click="clickReplay"
        >
          Play Again !
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
  min-height: 3vw;
  min-width: 10vw;
  margin-left: 3vw;
}
</style>
