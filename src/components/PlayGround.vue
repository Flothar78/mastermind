<script setup>
import { ref, computed } from "vue";
import PeonsRow from "@/components/PeonsRow.vue";
import { useRowStore } from "@/stores/RowStore.js";
import { storeToRefs } from "pinia";

const row_store = useRowStore();
const rows = computed(() => Object.values(row_store.rowsOneByOne));
</script>

<template>
  <div class="board-play">
    <PeonsRow
      v-for="row in rows"
      :key="row.id"
      @click="row_store.getRowsOneByOne(row.id)"
    />
  </div>
</template>

<style scoped>
.board-play {
  border: black 1px solid;
  height: 80%;
}
</style>
