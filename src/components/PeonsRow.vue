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
const handleDrop = (event, rowIndex) => {
  event.preventDefault();
  const target = event.target;
  if (target && target.dataset && target.dataset.peonIndex !== undefined) {
    const peonIndex = parseInt(target.dataset.peonIndex, 10);
    const color = event.dataTransfer.getData("color"); 
    color_store.getColorFromStore(rowIndex, peonIndex, color); 
  }
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
};
const handleDragOver = (event, rowIndex) => {
   event.preventDefault();
  if (rowIndex === playRowId.value) {
    event.dataTransfer.dropEffect = "copy";
  } else {
    event.dataTransfer.dropEffect = "none";
  }
};
</script>
<template>
  <div class="betweenRows">
    <div
      v-for="(row, rowIndex) in rows"
      :key="rowIndex"
      :class="{ 'active-row': rowIndex === playRowId && !isRowFilled(rowIndex) }"
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
    background-color: #d58936;
  }
  50% {
    box-shadow: 8px 8px 22px #ffcb60, -8px -8px 28px #ffcb60;
    background-color: #c09f7d;
  }
  100% {
    box-shadow: 0 0 0 transparent;
    background-color: #d58936;
  }
}
@media screen and (max-width: 759px) {
  @keyframes pulse {
  0% {
    box-shadow: 0 0 0 transparent;
    background-color: #d58936;
  }
  50% {
    box-shadow: 4px 4px 12px #ffcb60, -4px -4px 14px #ffcb60;
    background-color: #c09f7d;
  }
  100% {
    box-shadow: 0 0 0 transparent;
    background-color: #d58936;
  }
}
}
</style>
