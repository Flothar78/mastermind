import { defineStore } from "pinia";
import { ref } from "vue";
export const useColorStore = defineStore("ColorStore", {
  state: () => {
    return {
      rows: ref([
        {
          peons: [
            { id: 0, class: "" },
            { id: 1, class: "" },
            { id: 2, class: "" },
          ],
        },
        {
          peons: [
            { id: 0, class: "" },
            { id: 1, class: "" },
            { id: 2, class: "" },
          ],
        },
        {
          peons: [
            { id: 0, class: "" },
            { id: 1, class: "" },
            { id: 2, class: "" },
          ],
        },
      ]),
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
      this.peons[peonId].class = Object.values(this.choiceOfColor);
      console.log(this.peons);
      console.log(this.rows);
    },
  },
});
