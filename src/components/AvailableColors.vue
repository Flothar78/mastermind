<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { ref, computed } from "vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { useScoreStore } from "@/stores/ScoreStore.js";
import { storeToRefs } from "pinia";
const { colorsArray } = storeToRefs(useColorStore());
const { chosenColorClass } = storeToRefs(useScoreStore());
const colorStore = useColorStore();
// Remplace ta variable locale par celle du store :
const isPeonActive = computed(() => colorStore.isPeonActive);
console.log(isPeonActive.value);

const event1 = ref(null);
const event2 = ref(null);
event1.value = (index) => {
  colorStore.addColorToStore(colorStore.colorsArray[index]);
};
event2.value = (index) => {
  chosenColorClass.value = index;
};
const choiceColorFromAvailableColors = (index) => {
  event1.value(index);
  event2.value(index);
};
const dragStart = (event, index) => {
  colorStore.isPeonActive = false;
  const color = colorsArray.value[index];
  event.dataTransfer.setData("color", color);
};

function handleRowClick() {
  colorStore.isPeonActive = false;
}
</script>
<template>
  <div class="peons-row" @click="handleRowClick">
    <PeonOccurence
      v-for="(color, index) in colorsArray"
      :key="index"
      :class="{
        [color]: true,
        'peon-drag-image': true,
        'chosen-color': index === chosenColorClass,
        peon: isPeonActive,
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
  border: 0.4rem white solid;
}
.peon-drag-image {
  border-radius: 50%;
  overflow: hidden;
  /* background-color: transparent; */
}
.peon {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 6px 6px 2px #ffcb60;
  }
  50% {
    box-shadow: 0 0 0 transparent;
  }
  100% {
    box-shadow: 0 0 0 transparent;
  }
}
</style>
