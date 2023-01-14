<script setup></script>

<template>
  <div class="peons-row">
    <div class="peon-color-red"></div>
    <div class="peon-color-blue"></div>
  </div>
</template>

<style scoped>
.peons-row {
  border: black 1px solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vw;
  margin: 2vw;
}
.peon-color-red {
  background-color: red;
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 50%;
}
.peon-color-blue {
  background-color: blue;
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 50%;
}
</style>
