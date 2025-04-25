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
    const color = event.dataTransfer.getData("color"); // Récupère la couleur transférée
    color_store.getColorFromStore(rowIndex, peonIndex, color); // Mets la couleur dans la rangée à l'endroit correct
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
</script>
<template>
  <div class="betweenRows">
    <div
      v-for="(row, rowIndex) in rows"
      :key="rowIndex"
      :class="{ 'active-row': rowIndex === playRowId && !isRowFilled(rowIndex) }"
      @dragover.prevent
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
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 transparent;
    background-color: #d58936;
  }
  66.66% {
    box-shadow: 8px 8px 2px #ffcb60, -8px -8px 18px #ffcb60;
    background-color: #c09f7d;
  }
  100% {
    box-shadow: 0 0 0 transparent;
    background-color: #d58936;
  }
}
</style>
