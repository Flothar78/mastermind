<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { storeToRefs } from "pinia";
import { watch } from "vue";
const color_store = useColorStore();
let { rows, solution, winLooseMessage, numberOfPeons, playRowId } = storeToRefs(
  color_store
);
const arrayRows = Object.values(rows.value);
const isRowFilled = (rowIndex) => {
  return rows.value[rowIndex].some((peon) => peon !== "");
};

watch(playRowId, (playRowId) => {
  playRowId == 10 ? looseMessage() : "";
});
const looseMessage = () => {
  if (
    JSON.stringify(arrayRows[arrayRows.length - 1]) !== JSON.stringify(solution.value)
  ) {
    color_store.winLooseMessage = "You lose";
    color_store.playRowId = 10000;
  }
};
const handleDragStart = (event, rowIndex, peonIndex) => {
  const color = rows.value[rowIndex][peonIndex];
  event.dataTransfer.setData("color", color);
  
  const target = event.target;
  const dragIcon = target.cloneNode(true);
  dragIcon.style.position = "absolute";
  dragIcon.style.top = "-9999px";
  dragIcon.style.borderRadius = "50%";
  document.body.appendChild(dragIcon);

  event.dataTransfer.setDragImage(
    dragIcon,
    dragIcon.offsetWidth / 2,
    dragIcon.offsetHeight / 2
  );

  setTimeout(() => document.body.removeChild(dragIcon), 0);
};
const handleDragOver = (event, rowIndex) => {
  event.preventDefault();
  if (rowIndex === playRowId.value) {
    event.dataTransfer.dropEffect = "copy";
  } else {
    event.dataTransfer.dropEffect = "none";
  }
};
const handleDrop = (event, rowIndex) => {
  event.preventDefault();
  const color = event.dataTransfer.getData("color");

  const rowEl = event.currentTarget;
  const peonEls = [...rowEl.querySelectorAll(".withinRow-peons")];

  const { clientX, clientY } = event;

  // trouver le peon le plus proche de la souris
  let closestIndex = 0;
  let minDistance = Infinity;

  peonEls.forEach((el, idx) => {
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

  // distance 2D
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);


  
    if (distance < minDistance) {
      minDistance = distance;
      closestIndex = idx;
    }
  });

  color_store.getColorFromStore(rowIndex, closestIndex, color);
};
</script>
<template>
  <div class="betweenRows">
    <div
      v-for="(row, rowIndex) in rows"
      :key="rowIndex"
      :class="{
        'active-row': rowIndex === playRowId && !isRowFilled(rowIndex) && rowIndex <= 2,
      }"
      @dragover="handleDragOver($event, rowIndex)"
      @dragenter.prevent
      @drop="handleDrop($event, rowIndex)"
      class="withinRow"
    >
      <PeonOccurence
        v-for="(peon, peonIndex) in row"
        :key="peonIndex"
        :data-peon-index="peonIndex"
        @click="color_store.getColorFromStore(rowIndex, peonIndex)"
        :class="rows[rowIndex][peonIndex]"
        class="withinRow-peons"
        draggable="true"
        @dragstart="handleDragStart($event, rowIndex, peonIndex)"
      />
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/main.css";
.active-row {
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 transparent;
  }
  40% {
    box-shadow: 4px 4px 8px #ffbf3e;
  }

  50% {
    box-shadow: 0 0 0 transparent;
  }
  100% {
    box-shadow: 0 0 0 transparent;
  }
}
</style>
