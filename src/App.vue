<script setup>
import PlayView from "@/views/PlayView.vue";
import ScoreView from "@/views/ScoreView.vue";
import Tutorial from "./components/Tutorial.vue";
import { ref } from "vue";
const tutorialButton = ref(null);
const buttonText = ref("Voir Règles");
const gameRules = ref(false);
const displayTutorial = () => {
  if (gameRules.value === false) {
    gameRules.value = true;
    buttonText.value = "Voir Jeu";
  } else {
    gameRules.value = false;
    buttonText.value = "Voir Règles";
  }
};
</script>

<template>
  <Tutorial v-if="gameRules" />
  <div class="tutorial-button" @click="displayTutorial()" ref="tutorialButton">
    {{ buttonText }}
  </div>
  <div class="play-and-result-wrapper">
    <PlayView />
  </div>
  <ScoreView />
</template>

<style scoped>
@import "@/assets/main.css";
</style>
