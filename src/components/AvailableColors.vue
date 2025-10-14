<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import PeonOccurence from "@/components/PeonOccurence.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { useScoreStore } from "@/stores/ScoreStore.js";
import { storeToRefs } from "pinia";

const colorStore = useColorStore();
const { colorsArray } = storeToRefs(colorStore);
const { chosenColorClass } = storeToRefs(useScoreStore());

const isPeonActive = computed(() => colorStore.isPeonActive);

let dragIcon = null;
const currentDragColor = ref(null);
let lastTouch = { x: 0, y: 0 };
let moving = false;

onMounted(() => {
  dragIcon = document.createElement("div");
  Object.assign(dragIcon.style, {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    position: "absolute",
    top: "-9999px",
    left: "-9999px",
    background: "transparent",
    pointerEvents: "none",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    transform: "translate(-50%, -50%) scale(1)",
    zIndex: "9999",
    transition: "transform 0.08s linear",
  });
  document.body.appendChild(dragIcon);
});

onBeforeUnmount(() => {
  if (dragIcon) document.body.removeChild(dragIcon);
});


const choiceColorFromAvailableColors = (index) => {
  colorStore.addColorToStore(colorsArray.value[index]);
  chosenColorClass.value = index;
};

const dragStart = (event, index) => {
  colorStore.isPeonActive = false;
  const color = colorsArray.value[index];
  dragIcon.style.background = color;
  event.dataTransfer.setData("color", color);
  event.dataTransfer.setDragImage(dragIcon, 18, 18);
};

const touchStart = (event, index) => {
  const color = colorsArray.value[index];
  currentDragColor.value = color;
  dragIcon.style.background = color;
  colorStore.isPeonActive = false;
  const touch = event.touches[0];
  lastTouch = { x: touch.clientX, y: touch.clientY };
  dragIcon.style.transform = `translate(${lastTouch.x - 18}px, ${lastTouch.y - 18}px)`;
  moving = true;
  animateIcon();
};
const animateIcon = () => {
  if (!moving && !touchDrag.active) return;
  const x = moving ? lastTouch.x : touchDrag.x;
  const y = moving ? lastTouch.y : touchDrag.y;
  const offsetY = -30;
  dragIcon.style.transform = `translate(${x - 24}px, ${y - 24 + offsetY}px)`;
  requestAnimationFrame(animateIcon);
};
const touchMove = (event) => {
  if (!currentDragColor.value) return;
  const touch = event.touches[0];
  lastTouch = { x: touch.clientX, y: touch.clientY };
  document
    .querySelectorAll(".drop-target")
    .forEach((el) => el.classList.remove("drop-target"));
  const target = document.elementFromPoint(touch.clientX, touch.clientY);
  if (target && target.classList.contains("withinRow-peons")) {
    target.classList.add("drop-target");
  }
};
const touchEnd = (event) => {
  moving = false;
  const touch = event.changedTouches[0];
  const target = document.elementFromPoint(touch.clientX, touch.clientY);
  if (target && target.classList.contains("withinRow-peons")) {
    const rowEl = target.closest(".withinRow");
    if (!rowEl) return;
    const rowIndex = Array.from(rowEl.parentNode.children).indexOf(rowEl);
    const peonEls = Array.from(rowEl.querySelectorAll(".withinRow-peons"));
    const peonIndex = peonEls.indexOf(target);
    colorStore.getColorFromStore(rowIndex, peonIndex, currentDragColor.value);
  }
  dragIcon.style.background = "transparent";
  currentDragColor.value = null;
  document
    .querySelectorAll(".drop-target")
    .forEach((el) => el.classList.remove("drop-target"));
};
</script>

<template>
  <div class="peons-row">
    <PeonOccurence
      v-for="(color, index) in colorsArray"
      :key="index"
      :class="{
        [color]: true,
        'peon-drag-image': true,
        'chosen-color': index === chosenColorClass,
        peon: isPeonActive,
      }"
      @click="choiceColorFromAvailableColors(index)"
      @dragstart="dragStart($event, index)"
      draggable="true"
      @touchstart.prevent="touchStart($event, index)"
      @touchmove.prevent="touchMove"
      @touchend.prevent="touchEnd"
    />
  </div>
</template>

<style scoped>
@import "@/assets/main.css";

.chosen-color {
  border: 0.4rem white solid;
}
.peon-drag-image {
  border-radius: 50%;
  overflow: hidden;
}
.peon {
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% {
    box-shadow: 12px 12px 1px #ffbf3e;
  }
  33% {
    box-shadow: 0 0 0 transparent;
  }
  100% {
    box-shadow: 0 0 0 transparent;
  }
}
</style>
