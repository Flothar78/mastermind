import { defineStore } from "pinia";
import { reactive, toRaw } from "vue";
export const useColorStore = defineStore("ColorStore", {
  state: () => {
    return {
      rows: reactive([
        [{ class: "" }, { class: "" }, { class: "" }],
        [{ class: "" }, { class: "" }, { class: "" }],
        [{ class: "" }, { class: "" }, { class: "" }],
      ]),
      colorsArray: ["red", "blue"],
      choiceOfColor: [],
    };
  },
  actions: {
    addColorToStore(color) {
      this.choiceOfColor.length = 0;
      this.choiceOfColor.push(color);
    },
    getColorFromStore(chosenRow, indexOfChosenPeon) {
      console.log(toRaw(chosenRow), toRaw(indexOfChosenPeon));
      let indexOfChosenRow = this.rows.indexOf(chosenRow);
      this.rows[indexOfChosenRow][indexOfChosenPeon].class = Object.values(
        this.choiceOfColor
      );
    },
    getRandomColor() {
      return this.colorsArray[
        Math.floor(Math.random() * this.colorsArray.length)
      ];
    },
  },
});
