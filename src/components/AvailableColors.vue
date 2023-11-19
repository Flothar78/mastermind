<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { reactive, computed, ref } from "vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { storeToRefs } from "pinia";
const color_store = useColorStore();
const { colorsArray } = storeToRefs(color_store);
const event1 = ref(null);
const event2 = ref(null);
const chosenColorClass = ref(false);
event1.value = (index) => {
  color_store.addColorToStore(color_store.colorsArray[index]);
};
event2.value = (index) => {
  chosenColorClass.value = true;
};
const choiceColorFromAvailableColors = (index) => {
  event1.value(index);
  event2.value(index);
};
</script>
<template>
  <div class="peons-row">
    <PeonOccurence
      v-for="(color, index) in colorsArray"
      :key="index"
      class="available-colors-peons"
      :class="
        reactive({
          [color]: true,
          'chosen-color': chosenColorClass,
        })
      "
      @click="choiceColorFromAvailableColors(index)"
    />
  </div>
</template>

<style scoped>
@import "@/assets/main.css";
.chosen-color {
  border: 10px white solid;
}
</style>
