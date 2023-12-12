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
    previouslyCountedColor(colorName) {
      this.solutionObject[colorName] > 0
        ? this.solutionObject[colorName]--
        : "";
    },
    checkColorsPlaces(chosenRow) {
      console.log(this.solutionObject);
      this.solutionObject;
      console.log(this.solutionObject);
      this.chosenPeons.map((x, i) => {
        // console.log("map côté black: " + this.chosenPeonsObject[x],this.solutionObject[x]);
        if (this.solution[i] === x) {
          this.resultColors[chosenRow].push("black");
          this.previouslyCountedColor(x);
        }
      }),
        this.chosenPeons.map((x, i) => {
          if (this.solution.includes(x) && this.solution[i] !== x) {
            //    console.log(this.chosenPeonsObject[x], this.solutionObject[x]);
            this.solutionObject[x] === 0
              ? this.resultColors[chosenRow].push("none")
              : this.resultColors[chosenRow].push("grey") &&
                this.previouslyCountedColor(x);
          } else if (!this.solution.includes(x)) {
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
    chosenPeonsObject() {
      const chosenPeons = this.chosenPeons;
      const chosenPeonsObj = chosenPeons.reduce(
        (map, peon) => ({
          ...map,
          [peon]: (map[peon] || 0) + 1,
        }),
        {}
      );
      return chosenPeonsObj;
    },
    solutionObject() {
      const solution = this.solution;
      const solutionObj = solution.reduce(
        (map, peon) => ({
          ...map,
          [peon]: (map[peon] || 0) + 1,
        }),
        {}
      );
      return solutionObj;
    },
  },
});
//# sourceMappingURL=ColorStore.js.map
