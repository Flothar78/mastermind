<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const color_store = useColorStore();
const { classColor1, classColor2, classColor3 } = storeToRefs(color_store);
</script>

<template>
  <div class="peons-row">
    <PeonOccurence
      @click="color_store.getColor1FromStore()"
      :class="classColor1"
    />
    <PeonOccurence
      @click="color_store.getColor2FromStore()"
      :class="classColor2"
    />
    <PeonOccurence
      @click="color_store.getColor3FromStore()"
      :class="classColor3"
    />
  </div>
</template>

<style scoped>
.peons-row {
  border: black 1px solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vw;
  margin: 2vw;
}
.peoncolor {
  background-color: black;
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 50%;
}
</style>
