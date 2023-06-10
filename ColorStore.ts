import { defineStore } from "pinia";
import { reactive } from "vue";
export const useColorStore = defineStore("ColorStore", {
  state: () => {
    return {
      rows: <string[][]>[
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
      ],
      colorsArray: ["red", "blue", "green", "yellow", "orange", "black"],
      choiceOfColor: <string[]>[],
      chosenPeons: <string[]>[],
      solution: <string[]>[],
      resultColors: <string[][]>[[], [], [], [], [], [], [], [], [], []],
      playRowId: 0,
      winLooseMessage: "",
    };
  },
  actions: {
    getRandomColors(number: number) {
      this.solution.push(
        this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)]
      );
      return this.solution[number];
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
      if (chosenRow === this.playRowId) {
        const row = this.rows[chosenRow];
        const chosenPeons = this.chosenPeons;
        const peonClassArray = this.rows[chosenRow];
        row[chosenPeon] = this.choiceOfColor[0];
        row.map((x: string) => {
          x !== "" ? chosenPeons.push(x) : "";
        });
        peonClassArray.every((x) => x !== "") ? this.playRowId++ : "";
        peonClassArray.every((x) => x !== "") &&
        chosenPeons.length == this.numberOfPeons
          ? this.checkColorsPlaces(chosenRow)
          : (chosenPeons.length = 0);
      } else {
      }
    },
    checkColorsPlaces(chosenRow: number) {
      this.chosenPeons.map((x, i, a) => {
        if (this.solution[i] === x) {
          this.resultColors[chosenRow].push("black");
        } else if (this.solution.includes(x)) {
          this.solution.filter((y) => y === x).length >=
          a.filter((z) => z === x).length -
            a.filter((s) => s === this.solution[i]).length
            ? this.resultColors[chosenRow].push("grey")
            : this.resultColors[chosenRow].push("none");
        } else {
          this.resultColors[chosenRow].push("none");
        }
      });

      this.endOfGame();
      return this.resultColors;
    },
    endOfGame() {
      if (
        this.resultColors
          .flat()
          .slice(-4)
          .filter((x) => x === "black").length == this.numberOfPeons
      ) {
        this.playRowId = 10000;
        this.winLooseMessage = "You win !";
      }
    },
  },
  getters: {
    numberOfPeons(): number {
      return (
        Object.values(this.rows).flat().length / Object.values(this.rows).length
      );
    },
  },
});
