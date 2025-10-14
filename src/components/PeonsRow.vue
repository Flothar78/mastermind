<script setup>
import PeonOccurence from "@/components/PeonOccurence.vue";
import RulesInfo from "@/components/RulesInfo.vue";
import { useColorStore } from "@/stores/ColorStore.js";
import { useScoreStore } from "@/stores/ScoreStore.js";
import { storeToRefs } from "pinia";
import { inject, watch, onMounted, onBeforeUnmount, computed } from "vue";

const gameRules = inject("gameRules");
const color_store = useColorStore();
const score_store = useScoreStore();
let { score } = storeToRefs(score_store);
let { rows, solution, playRowId } = storeToRefs(color_store);

const isRowFilled = (rowIndex) => rows.value[rowIndex].every((peon) => peon !== "");
const showRulesInfo = computed(() => {
  if (gameRules.value == false) {
    return isRowFilled(0) && !isRowFilled(2) && score.value < 3;
  }
});

watch(playRowId, (val) => {
  if (val == 10) looseMessage();
});

const looseMessage = () => {
  const arrayRows = Object.values(rows.value);
  if (
    JSON.stringify(arrayRows[arrayRows.length - 1]) !== JSON.stringify(solution.value)
  ) {
    color_store.winLooseMessage = "Perdu";
    color_store.playRowId = 10000;
  }
};

let dragIcon = null;
let touchDrag = { color: null, active: false, x: 0, y: 0 };

onMounted(() => {
  dragIcon = document.createElement("div");
  Object.assign(dragIcon.style, {
    width: "32px",
    height: "48px",
    borderRadius: "50%",
    position: "absolute",
    top: "-9999px",
    left: "-9999px",
    background: "transparent",
    pointerEvents: "none",
    zIndex: "9999",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    transform: "translate(-50%, -50%) scale(1)",
    transition: "transform 0.08s linear",
  });
  document.body.appendChild(dragIcon);
});

onBeforeUnmount(() => {
  if (dragIcon) document.body.removeChild(dragIcon);
});

const handleDragStart = (event, rowIndex, peonIndex) => {
  const color = rows.value[rowIndex][peonIndex];
  const tempIcon = document.createElement("div");
  Object.assign(tempIcon.style, {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: color,
    position: "absolute",
    top: "-9999px",
    left: "-9999px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    transform: "translate(-50%, -50%) scale(1)",
    transition: "transform 0.08s linear",
  });
  document.body.appendChild(tempIcon);
  event.dataTransfer.setData("color", color);
  event.dataTransfer.setDragImage(tempIcon, 18, 18);
  setTimeout(() => document.body.removeChild(tempIcon), 0);
};

const handleDragEnd = () => {
  dragIcon.style.background = "transparent";
  document
    .querySelectorAll(".drop-target")
    .forEach((el) => el.classList.remove("drop-target"));
};


const touchStart = (event, rowIndex, peonIndex) => {
  const color = rows.value[rowIndex][peonIndex];
  if (!color) return;
  touchDrag = {
    color,
    active: true,
    x: event.touches[0].clientX,
    y: event.touches[0].clientY,
  };
  dragIcon.style.background = color;
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
  if (!touchDrag.active) return;
  const t = event.touches[0];
  touchDrag.x = t.clientX;
  touchDrag.y = t.clientY;

  document
    .querySelectorAll(".drop-target")
    .forEach((el) => el.classList.remove("drop-target"));
  const target = document.elementFromPoint(t.clientX, t.clientY);
  if (target && target.classList.contains("withinRow-peons"))
    target.classList.add("drop-target");
};

const touchEnd = (event) => {
  if (!touchDrag.active) return;
  touchDrag.active = false;

  const touch = event.changedTouches[0];
  const target = document.elementFromPoint(touch.clientX, touch.clientY);
  if (target && target.classList.contains("withinRow-peons")) {
    const rowEl = target.closest(".withinRow");
    const rowIndex = Array.from(rowEl.parentNode.children).indexOf(rowEl);
    const peonEls = Array.from(rowEl.querySelectorAll(".withinRow-peons"));
    const peonIndex = peonEls.indexOf(target);
    color_store.getColorFromStore(rowIndex, peonIndex, touchDrag.color);
  }
  dragIcon.style.background = "transparent";
  document
    .querySelectorAll(".drop-target")
    .forEach((el) => el.classList.remove("drop-target"));
};

const handleDragOver = (event, rowIndex) => {
  if (rowIndex !== playRowId.value) return;
  event.preventDefault();
  const { clientX, clientY } = event.touches ? event.touches[0] : event;
  const rowEl = event.currentTarget;
  const peonEls = Array.from(rowEl.querySelectorAll(".withinRow-peons"));
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

const handleDrop = (event, rowIndex) => {
  event.preventDefault();
  const color = event.dataTransfer?.getData("color") || "";
  const rowEl = event.currentTarget;
  const peonEls = Array.from(rowEl.querySelectorAll(".withinRow-peons"));
  if (!peonEls.length) return;
  const { clientX, clientY } = event.changedTouches ? event.changedTouches[0] : event;
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
  if (rowIndex === playRowId.value)
    color_store.getColorFromStore(rowIndex, closestIndex, color);
  peonEls.forEach((el) => el.classList.remove("drop-target"));
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
      @drop="handleDrop($event, rowIndex)"
      @touchmove.prevent="handleDragOver($event, rowIndex)"
      @touchend.prevent="handleDrop($event, rowIndex)"
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
        @touchstart.prevent="touchStart($event, rowIndex, peonIndex)"
        @touchmove.prevent="touchMove"
        @touchend.prevent="touchEnd"
      />
    </div>
  </div>
  <Transition name="rules">
    <RulesInfo v-if="showRulesInfo" class="rules-infos" />
  </Transition>
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
  64% {
    box-shadow: 8px 8px 12px #ffbf3e;
  }
}
</style>
