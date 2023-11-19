import { defineStore } from "pinia";
export const useColorStore = defineStore("ColorStore", {
  state: () => {
    return {
      rows: [
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
      choiceOfColor: [],
      chosenPeons: [],
      solution: [],
      resultColors: [[], [], [], [], [], [], [], [], [], []],
      playRowId: 0,
      winLooseMessage: "",
    };
  },
  actions: {
    getRandomColors(number) {
      if (this.solution.length < this.numberOfPeons) {
        this.solution.push(
          this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)]
        );
      }
      return this.solution[number];
    },
    addColorToStore(color) {
      console.log(`store: ${color}`);
      this.choiceOfColor.length = 0;
      this.choiceOfColor.push(color);
    },
    getColorFromStore(chosenRow, chosenPeon) {
      if (chosenRow === this.playRowId) {
        const row = this.rows[chosenRow];
        const chosenPeons = this.chosenPeons;
        row[chosenPeon] = this.choiceOfColor[0];
        row.map((x) => {
          x !== "" ? chosenPeons.push(x) : "";
        });
        row.every((x) => x !== "") ? this.playRowId++ : "";
        row.every((x) => x !== "") && chosenPeons.length == this.numberOfPeons
          ? this.checkColorsPlaces(chosenRow)
          : (chosenPeons.length = 0);
      }
    },
    checkColorsPlaces(chosenRow) {
      let countBlack = 0;
      this.chosenPeons.map((x, i, a) => {
        const solution = this.solution;
        const matchingInSolution = solution.filter((y) => y === x).length;
        const matchingInPlayerChoice = a.filter((z) => z === x).length;
        if (solution[i] === x) {
          this.resultColors[chosenRow].push("black");
          countBlack++;
        } else if (solution.includes(x)) {
          matchingInSolution < matchingInPlayerChoice
            ? this.resultColors[chosenRow].push("none") *
              (matchingInPlayerChoice - matchingInSolution)
            : this.resultColors[chosenRow].push("grey");
        } else {
          this.resultColors[chosenRow].push("none");
        }
      });
      this.endOfGame();
      return this.resultColors.map((x) => x.sort());
    },
    endOfGame() {
      if (
        this.resultColors
          .flat()
          .slice(-4)
          .filter((x) => x === "black").length == this.numberOfPeons
      ) {
        this.playRowId = 10000;
        this.winLooseMessage = "Win !";
      }
    },
  },
  getters: {
    numberOfPeons() {
      return (
        Object.values(this.rows).flat().length / Object.values(this.rows).length
      );
    },
  },
});
//# sourceMappingURL=ColorStore.js.map
