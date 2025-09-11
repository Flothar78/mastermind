<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import PeonOccurence from "@/components/PeonOccurence.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { useScoreStore } from "@/stores/ScoreStore.js";
import { storeToRefs } from "pinia";

const colorStore = useColorStore();
const { colorsArray } = storeToRefs(colorStore);
const { chosenColorClass } = storeToRefs(useScoreStore());

const isPeonActive = computed(() => colorStore.isPeonActive);

/* --- Drag image neutre pré-créé --- */
let dragIcon = null;

onMounted(() => {
  dragIcon = document.createElement("div");
  dragIcon.style.width = "36px";
  dragIcon.style.height = "36px";
  dragIcon.style.borderRadius = "50%";
  dragIcon.style.position = "absolute";
  dragIcon.style.top = "-9999px";
  dragIcon.style.left = "-9999px";
  dragIcon.style.background = "transparent";
  dragIcon.style.pointerEvents = "none";
  document.body.appendChild(dragIcon);
});

onBeforeUnmount(() => {
  if (dragIcon) {
    document.body.removeChild(dragIcon);
    dragIcon = null;
  }
});

/* --- Fonctions --- */
const choiceColorFromAvailableColors = (index) => {
  colorStore.addColorToStore(colorsArray.value[index]);
  chosenColorClass.value = index;
};

const dragStart = (event, index) => {
  colorStore.isPeonActive = false;

  const color = colorsArray.value[index];
  dragIcon.style.background = color; // applique la couleur du peon

  event.dataTransfer.setData("color", color);
  event.dataTransfer.setDragImage(
    dragIcon,
    dragIcon.offsetWidth / 2,
    dragIcon.offsetHeight / 2
  );
};
</script>

<template>
  <div class="peons-row">
    <PeonOccurence
      v-for="(color, index) in colorsArray"
      :key="index"
      :class="{
        [color]: true,
        'peon-drag-image': true,
        'chosen-color': index === chosenColorClass,
        peon: isPeonActive, /* animation pulse reste active hors drag */
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
}
.peon {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 6px 6px 1px #ffbf3e;
  }
  70% {
    box-shadow: 0 0 0 transparent;
  }
  100% {
    box-shadow: 0 0 0 transparent;
  }
}
</style>
