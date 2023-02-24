<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const color_store = useColorStore();
const { classColor, peons, rows } = storeToRefs(color_store);
</script>

<template>
  <div class="betweenRows">
    <div v-for="row in rows" :key="row.id" class="withinRow">
      <PeonOccurence
        v-for="peon in row"
        :key="row.indexOf(peon)"
        @click="color_store.getColorFromStore(row, row.indexOf(peon))"
        :class="row[row.indexOf(peon)].class"
      />
    </div>
  </div>
</template>

<style scoped>
.withinRow {
  border: black 1px solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vw;
  margin: 2vw;
}
.betweenRows {
  display: flex;
  flex-direction: column-reverse;
}
</style>
