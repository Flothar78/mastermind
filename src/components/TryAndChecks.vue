<script setup>
import PeonsRow from "@/components/PeonsRow.vue";
import CheckRow from "@/components/CheckRow.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { toRaw } from "vue";
import { storeToRefs } from "pinia";
const color_store = useColorStore();
const { rows } = storeToRefs(color_store);
</script>

<template>
  <div class="play-and-check-container">
    <PeonsRow />
    <div class="checkRowsContainer">
      <CheckRow
        v-for="row in rows"
        :rowNumber="rows.indexOf(row)"
        :key="rows.indexOf(row)"
        class="checkRow"
      />
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/main.css";
</style>
