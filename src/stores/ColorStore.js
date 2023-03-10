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
      arrayOfChosenPeons: reactive([]),
      solutionColors: reactive([]),
    };
  },
  actions: {
    getRandomColors(number) {
      this.solutionColors.push(
        this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)]
      );
      return this.solutionColors[number];
    },
    addColorToStore(color) {
      this.choiceOfColor.length = 0;
      this.choiceOfColor.push(color);
    },
    getColorFromStore(chosenRow, chosenPeon) {
      let rowFillingMonitor = toRaw(this.rows[chosenRow]);
      this.rows[chosenRow][chosenPeon].class = Object.values(
        this.choiceOfColor
      );
      rowFillingMonitor.map((x) => {
        let peonColorValueCheck = toRaw(Object.values(x)).join``;
        peonColorValueCheck !== ""
          ? this.arrayOfChosenPeons.push(peonColorValueCheck)
          : "";
      });
      this.arrayOfChosenPeons.length == this.rows[0].length
        ? this.samePlaceAndColor()
        : (this.arrayOfChosenPeons.length = 0);
    },
    samePlaceAndColor() {
      const choicePlayer = toRaw(this.arrayOfChosenPeons);
      const solutionCombination = toRaw(this.solutionColors);

      console.log(choicePlayer);
      console.log(solutionCombination);
      let resultColors = choicePlayer.map((x, i) => {
        if (solutionCombination[i].includes(x)) {
          return "black";
        } else if (
          !solutionCombination[i].includes(x) &&
          solutionCombination.includes(x)
        ) {
          return "white";
        } else {
          return "none";
        }
      });

      console.log(resultColors);
      console.log(resultColors.filter((y) => y == "black").length);
    },
  },
  getters: {
    numberOfPeons() {
      return toRaw(this.rows).flat().length / toRaw(this.rows).length;
    },
  },
});
