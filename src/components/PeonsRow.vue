<script lang="ts" setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { storeToRefs } from "pinia";
const color_store = useColorStore();
const { rows } = storeToRefs(color_store);
const arrayOfRows = Object.values(rows.value);
</script>

<template>
  <div class="betweenRows">
    <div v-for="row in rows" :key="row.id" class="withinRow">
      <PeonOccurence
        v-for="peon in row"
        :key="row.indexOf(peon)"
        @click="
          color_store.getColorFromStore(
            arrayOfRows.indexOf(row),
            row.indexOf(peon)
          )
        "
        :class="row[row.indexOf(peon)].class"
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
