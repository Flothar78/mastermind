<script lang="ts" setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { storeToRefs } from "pinia";
import { toRaw } from "vue";
const color_store = useColorStore();
const { rows, choiceOfColor } = storeToRefs(color_store);
const rawRows = rows.value;
</script>

<template>
  <div class="betweenRows">
    <div v-for="row in rawRows" :key="rawRows.indexOf(row)" class="withinRow">
      <PeonOccurence
        v-for="(peon, index) in row"
        :key="index"
        @click="color_store.getColorFromStore(rawRows.indexOf(row), index)"
        :class="rawRows[rawRows.indexOf(row)][index]"
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
