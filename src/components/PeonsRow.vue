<script  setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { storeToRefs } from "pinia";
import { watch } from "vue";
const color_store = useColorStore();
let { rows, solution, winLooseMessage, numberOfPeons, playRowId } =
  storeToRefs(color_store);

const arrayRows = Object.values(rows.value);
watch(playRowId, (playRowId) => {
  playRowId == 10 ? looseMessage() : "";
});
const looseMessage = () => {
  if (
    JSON.stringify(arrayRows[arrayRows.length - 1]) !==
    JSON.stringify(solution.value)
  ) {
    color_store.winLooseMessage = "Wrong !";
    color_store.playRowId = 10000;
  }
};
</script>
<template>
  <div class="betweenRows">
    <div v-for="row in rows" :key="rows.indexOf(row)" class="withinRow">
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
</style>
