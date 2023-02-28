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
    getColorFromStore(chosenRow, chosenPeon) {
      const arrayOfChosenPeons = [];
      let rowFillingMonitor = toRaw(this.rows[chosenRow]);
      this.rows[chosenRow][chosenPeon].class = Object.values(
        this.choiceOfColor
      );
      rowFillingMonitor.map((x) => {
        let peonColorValueCheck = toRaw(Object.values(x)).join``;
        peonColorValueCheck !== ""
          ? arrayOfChosenPeons.push(peonColorValueCheck)
          : "";
      });
      arrayOfChosenPeons.length == this.rows[0].length
        ? this.tryAndSolutionComparison
        : "";
    },
    getRandomColor() {
      return this.colorsArray[
        Math.floor(Math.random() * this.colorsArray.length)
      ];
    },
  },
  getters: {
    numberOfPeons() {
      return toRaw(this.rows).flat().length / toRaw(this.rows).length;
    },
    tryAndSolutionComparison() {
      console.log("tryAndSolutionComparison");
    },
  },
});
