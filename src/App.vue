<script setup>
import PlayView from "@/views/PlayView.vue";
import ScoreView from "@/views/ScoreView.vue";
import RulesInfo from "./components/RulesInfo.vue";
import { ref } from "vue";
const buttonText = ref("Voir Règles");
const gameRules = ref(false);
const displayTutorial = () => {
  if (gameRules.value === false) {
    gameRules.value = true;
    buttonText.value = "Fermer Règles";
  } else {
    gameRules.value = false;
    buttonText.value = "Voir Règles";
  }
};
</script>

<template>
  <RulesInfo v-if="gameRules" />
  <div class="tutorial-button" @click="displayTutorial()" >
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
