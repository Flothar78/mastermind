import { defineStore } from "pinia";
import { reactive, toRaw } from "vue";
export const useColorStore = defineStore("ColorStore", {
  state: () => {
    return {
      rows: reactive([
        [{ class: "" }, { class: "" }, { class: "" }, { class: "" }],
        [{ class: "" }, { class: "" }, { class: "" }, { class: "" }],
        [{ class: "" }, { class: "" }, { class: "" }, { class: "" }],
        [{ class: "" }, { class: "" }, { class: "" }, { class: "" }],
        [{ class: "" }, { class: "" }, { class: "" }, { class: "" }],
      ]),
      colorsArray: ["red", "blue", "green"],
      choiceOfColor: <string[]>[],
      arrayOfChosenPeons: reactive(<string[]>[]),
      solutionColors: <string[]>[],
      resultColors: reactive(<string[]>[]),
    };
  },
  actions: {
    getRandomColors(number: number) {
      this.solutionColors.push(
        this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)]
      );
      return this.solutionColors[number];
    },
    addColorToStore(color: string) {
      this.choiceOfColor.length = 0;
      this.choiceOfColor.push(color);
    },
    getColorFromStore(chosenRow: number, chosenPeon: number) {
      console.log(this.choiceOfColor);
      const rowFillingMonitor = toRaw(this.rows[chosenRow]);
      this.rows[chosenRow][chosenPeon].class = Object.values(
        this.choiceOfColor
      ).toString();
      rowFillingMonitor.map((x) => {
        const peonColorValueCheck = toRaw(Object.values(x)).join("");
        peonColorValueCheck !== ""
          ? this.arrayOfChosenPeons.push(peonColorValueCheck)
          : "";
      });
      this.arrayOfChosenPeons.length == this.numberOfPeons
        ? this.checkColorsPlaces()
        : (this.arrayOfChosenPeons.length = 0);
    },
    checkColorsPlaces() {
      this.resultColors.length = 0;
      this.arrayOfChosenPeons.map((x, i) => {
        if (this.solutionColors[i] === x) {
          this.resultColors.push("black");
        } else if (this.solutionColors.includes(x)) {
          this.resultColors.push("grey");
        } else {
          this.resultColors.push("none");
        }
      });
      console.log(this.resultColors.sort());

      return this.resultColors.sort();
    },
  },
  getters: {
    numberOfPeons(): number {
      return toRaw(this.rows).flat().length / toRaw(this.rows).length;
    },
  },
});
