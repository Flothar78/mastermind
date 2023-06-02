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
      resultColors: <string[][]>[[], [], [], [], []],
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
    getColorFromStore(
      chosenRow: number,
      chosenPeon: number,
      checkColorsPlaces: Function
    ) {
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
        ? this.checkColorsPlaces(chosenRow)
        : (this.arrayOfChosenPeons.length = 0);
    },
    checkColorsPlaces(chosenRow: number) {
      this.arrayOfChosenPeons.map((x, i, a) => {
        if (this.solutionColors[i] === x) {
          this.resultColors[chosenRow].push("black");
        } else if (this.solutionColors.includes(x)) {
          this.solutionColors.filter((y) => y === x).length >=
          a.filter((z) => z === x).length -
            a.filter((s) => s === this.solutionColors[i]).length
            ? this.resultColors[chosenRow].push("grey")
            : this.resultColors[chosenRow].push("none");
        } else {
          this.resultColors[chosenRow].push("none");
        }
      });
      console.log(this.resultColors[chosenRow]);
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
