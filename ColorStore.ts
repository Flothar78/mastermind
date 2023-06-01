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
      this.arrayOfChosenPeons.map((x, i, a) => {
        if (this.solutionColors[i] === x) {
          this.resultColors.push("black");
        } else if (this.solutionColors.includes(x)) {
          this.solutionColors.filter((y) => y === x).length >=
          a.filter((z) => z === x).length -
            a.filter((s) => s === this.solutionColors[i]).length
            ? this.resultColors.push("grey")
            : this.resultColors.push("none");
        } else {
          this.resultColors.push("none");
        }
      });
      console.log(this.resultColors);
      return this.resultColors;
    },
  },
  getters: {
    numberOfPeons(): number {
      return toRaw(this.rows).flat().length / toRaw(this.rows).length;
    },
  },
});
