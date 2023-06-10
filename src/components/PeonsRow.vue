<script lang="ts" setup>
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
    color_store.winLooseMessage = "You loose !";
    color_store.playRowId = 10000;
    console.log(color_store.winLooseMessage);
    console.log(color_store.playRowId);
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
      />
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 800px) {
  .withinRow {
    border: black 0.5px solid;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5vw;
    margin: 1vw;
  }
  .betweenRows {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
