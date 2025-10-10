<script setup>
import PlayView from "@/views/PlayView.vue";
import ScoreView from "@/views/ScoreView.vue";
import RulesInfo from "./components/RulesInfo.vue";
import { ref, provide } from "vue";
const buttonText = ref("Voir Règles");
const gameRules = ref(false);
provide('gameRules', gameRules)
const displayTutorial = () => {
  if (gameRules.value === false) {
    const button = document.querySelector(".tutorial-button");
    gameRules.value = true;
    buttonText.value = "Fermer Règles";
    button.classList.add('active')
  } else {
    gameRules.value = false;
    buttonText.value = "Voir Règles";
  }
};
</script>

<template>
  <RulesInfo v-if="gameRules" class="rules-info" />
  <div class="tutorial-button" @click="displayTutorial()">
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
