import { defineStore } from "pinia";
import { ref } from "vue";
export const useColorStore = defineStore("ColorStore", {
  state: () => {
    return {
      rows: ref([{ id: 0 }, { id: 1 }, { id: 2 }]),
      peons: [
        { id: 0, class: "" },
        { id: 1, class: "" },
        { id: 2, class: "" },
      ],
      choiceOfColor: [],
    };
  },
  actions: {
    addColorToStore(color) {
      this.choiceOfColor.length = 0;
      this.choiceOfColor.push(color);
      console.log(this.choiceOfColor);
    },
    getColorFromStore(rowId, peonId) {
      this.peons[rowId].class = Object.values(this.choiceOfColor);
    },
  },
});
