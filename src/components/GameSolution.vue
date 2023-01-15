<script setup></script>

<template>
  <div class="peons-row">
    <div class="peon-choice"></div>
    <div class="peon-choice"></div>
    <div class="peon-choice"></div>
  </div>
</template>

<style scoped>
.game-solution {
  border: black 1px solid;
  height: 15vw;
}
.peons-row {
  border: black 1px solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vw;
  margin: 2vw;
}
.peon-choice {
  border: black 1px solid;
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 50%;
}
</style>
