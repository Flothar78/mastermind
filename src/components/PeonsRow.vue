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
      v-for="(row, index) in rows"
      :key="index"
      :class="{ 'active-row': index === playRowId }"
      class="withinRow"
    >
      <PeonOccurence
        v-for="(peon, index) in row"
        :key="index"
        @click="color_store.getColorFromStore(rows.indexOf(row), index)"
        :class="rows[rows.indexOf(row)][index]"
        class="withinRow-peons"
      />
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/main.css";
.active-row {
  animation: pulse 1s infinite;
}
@keyframes pulse {
  0% {
    box-shadow: 8px 8px 12px #ffcb60,-8px -8px 30px #ffcb60;
    background-color: #c09f7d;
  }
  70% {
    box-shadow: 0 0 0 transparent;
  }
  100% {
    box-shadow: 0 0 0  transparent;
  }
}
</style>
