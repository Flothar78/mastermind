<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { reactive, ref, nextTick } from "vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { useScoreStore } from "@/stores/ScoreStore.js";
import { storeToRefs } from "pinia";
const { colorsArray } = storeToRefs(useColorStore());
const { chosenColorClass } = storeToRefs(useScoreStore());
const event1 = ref(null);
const event2 = ref(null);
event1.value = (index) => {
  useColorStore().addColorToStore(useColorStore().colorsArray[index]);
};
event2.value = (index) => {
  chosenColorClass.value = index;
};
const choiceColorFromAvailableColors = (index) => {
  event1.value(index);
  event2.value(index);
};
const peonRefs = ref([]); // Références aux éléments DOM
const dragStart = (event, index) => {
  const color = colorsArray.value[index];
  event.dataTransfer.setData("color", color);
  const el = peonRefs.value[index]?.$el || peonRefs.value[index];
  if (el) {
    console.log(el.clientWidth);
    event.dataTransfer.setDragImage(el, el.clientWidth / 2, el.clientHeight / 2);
    console.log(el.clientWidth);
  }
};
</script>
<template>
  <div class="peons-row">
    <PeonOccurence
      v-for="(color, index) in colorsArray"
      :key="index"
      :ref="(el) => (peonRefs[index] = el)"
      :class="{
        [color]: true,
        'chosen-color': index === chosenColorClass,
      }"
      @click="choiceColorFromAvailableColors(index)"
      @dragstart="dragStart($event, index)"
      draggable="true"
    />
  </div>
</template>

<style scoped>
@import "@/assets/main.css";
.chosen-color {
  border: 0.5rem white solid;
}
</style>
