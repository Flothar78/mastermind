<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { storeToRefs } from "pinia";
import { watch, onMounted, onBeforeUnmount } from "vue";

const color_store = useColorStore();
let { rows, solution, winLooseMessage, numberOfPeons, playRowId } = storeToRefs(
  color_store
);

/* --- Helpers --- */
const isRowFilled = (rowIndex) => rows.value[rowIndex].some((peon) => peon !== "");

watch(playRowId, (val) => {
  if (val == 10) looseMessage();
});
const looseMessage = () => {
  const arrayRows = Object.values(rows.value);
  if (
    JSON.stringify(arrayRows[arrayRows.length - 1]) !== JSON.stringify(solution.value)
  ) {
    color_store.winLooseMessage = "You lose";
    color_store.playRowId = 10000;
  }
};


let dragIcon = null;

onMounted(() => {
  dragIcon = document.createElement("div");
  dragIcon.style.width = "36px";
  dragIcon.style.height = "36px";
  dragIcon.style.borderRadius = "50%";
  dragIcon.style.position = "absolute";
  dragIcon.style.top = "-9999px";
  dragIcon.style.left = "-9999px";
  dragIcon.style.background = "transparent";
  dragIcon.style.pointerEvents = "none";
  document.body.appendChild(dragIcon);
});

onBeforeUnmount(() => {
  if (dragIcon) {
    document.body.removeChild(dragIcon);
    dragIcon = null;
  }
});


const handleDragStart = (event, rowIndex, peonIndex) => {
  const color = rows.value[rowIndex][peonIndex];

  const tempDragIcon = document.createElement("div");
  tempDragIcon.style.width = "36px";
  tempDragIcon.style.height = "36px";
  tempDragIcon.style.borderRadius = "50%";
  tempDragIcon.style.background = color;
  tempDragIcon.style.position = "absolute";
  tempDragIcon.style.top = "-9999px";
  tempDragIcon.style.left = "-9999px";
  document.body.appendChild(tempDragIcon);


  event.dataTransfer.setData("color", color);
  event.dataTransfer.setDragImage(
    tempDragIcon,
    tempDragIcon.offsetWidth / 2,
    tempDragIcon.offsetHeight / 2
  );

 
  setTimeout(() => {
    document.body.removeChild(tempDragIcon);
  }, 0);
};

const handleDragEnd = () => {
  dragIcon.style.background = "transparent";
  document
    .querySelectorAll(".drop-target")
    .forEach((el) => el.classList.remove("drop-target"));
};

const handleDragOver = (event, rowIndex) => {
  if (rowIndex !== playRowId.value) return;

  event.preventDefault();
  event.dataTransfer.dropEffect = "copy";

  const rowEl = event.currentTarget;
  const peonEls = Array.from(rowEl.querySelectorAll(".withinRow-peons"));
  if (!peonEls.length) return;

  const { clientX, clientY } = event;
  let closestEl = null;
  let minDist2 = Infinity;

  peonEls.forEach((el) => {
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    const dist2 = dx * dx + dy * dy;
    if (dist2 < minDist2) {
      minDist2 = dist2;
      closestEl = el;
    }
  });

  peonEls.forEach((el) => el.classList.remove("drop-target"));
  if (closestEl) closestEl.classList.add("drop-target");
};

const handleDragLeave = (event) => {
  Array.from(event.currentTarget.querySelectorAll(".withinRow-peons")).forEach((el) =>
    el.classList.remove("drop-target")
  );
};

const handleDrop = (event, rowIndex) => {
  event.preventDefault();
  const color = event.dataTransfer.getData("color") || "";

  const rowEl = event.currentTarget;
  const peonEls = Array.from(rowEl.querySelectorAll(".withinRow-peons"));
  if (!peonEls.length) return;

  const { clientX, clientY } = event;
  let closestIndex = 0;
  let minDist2 = Infinity;

  peonEls.forEach((el, idx) => {
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    const dist2 = dx * dx + dy * dy;
    if (dist2 < minDist2) {
      minDist2 = dist2;
      closestIndex = idx;
    }
  });

  if (rowIndex === playRowId.value) {
    color_store.getColorFromStore(rowIndex, closestIndex, color);
  }

  handleDragEnd();
};
</script>

<template>
  <div class="betweenRows">
    <div
      v-for="(row, rowIndex) in rows"
      :key="rowIndex"
      :class="{
        'active-row': rowIndex === playRowId && !isRowFilled(rowIndex) && rowIndex <= 1,
      }"
      @dragover="handleDragOver($event, rowIndex)"
      @dragenter.prevent
      @drop="handleDrop($event, rowIndex)"
      @dragleave="handleDragLeave"
      class="withinRow"
    >
      <PeonOccurence
        v-for="(peon, peonIndex) in row"
        :key="peonIndex"
        :data-peon-index="peonIndex"
        @click="color_store.getColorFromStore(rowIndex, peonIndex)"
        :class="rows[rowIndex][peonIndex]"
        class="withinRow-peons"
        draggable="true"
        @dragstart="handleDragStart($event, rowIndex, peonIndex)"
        @dragend="handleDragEnd"
      />
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/main.css";

.withinRow-peons {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
}

.drop-target {
  outline: 2px solid #ffbf3e;
  outline-offset: 4px;
  transform: scale(1.12);
  transition: transform 0.08s ease;
}

.active-row {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 transparent;
  }
  80% {
    box-shadow: 4px 4px 8px #ffbf3e;
  }
  85% {
    box-shadow: 0 0 0 transparent;
  }
  100% {
    box-shadow: 0 0 0 transparent;
  }
}
</style>
