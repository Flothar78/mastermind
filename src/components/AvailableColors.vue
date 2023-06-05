<template>
  <div class="peons-row">
    <PeonOccurence class="red" v-on:click="redToStore()" />
    <PeonOccurence class="blue" v-on:click="blueToStore()" />
    <PeonOccurence class="green" v-on:click="greenToStore()" />
    <PeonOccurence class="yellow" v-on:click="yellowToStore()" />
    <PeonOccurence class="orange" v-on:click="orangeToStore()" />
    <PeonOccurence class="black" v-on:click="blackToStore()" />
  </div>
</template>

<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { useColorStore } from "@/stores/ColorStore.js";

const color_store = useColorStore();

const redToStore = () => {
  color_store.addColorToStore("red");
};
const blueToStore = () => {
  color_store.addColorToStore("blue");
};
const greenToStore = () => {
  color_store.addColorToStore("green");
};
const yellowToStore = () => {
  color_store.addColorToStore("yellow");
};
const orangeToStore = () => {
  color_store.addColorToStore("orange");
};
const blackToStore = () => {
  color_store.addColorToStore("black");
};
</script>

<style scoped>
@media screen and (min-width: 800px) {
  .peons-row {
    border: black 2.5px solid;
    background-color: #e6e6e6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 8vw;
    margin: 1vw;
  }
}
</style>
