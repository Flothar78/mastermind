import { defineStore } from "pinia";
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
      if (this.solution.length < this.numberOfPeons) {
        this.solution.push(
          this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)]
        );
      }
      return this.solution[number];
    },
    addColorToStore(color: string) {
      this.choiceOfColor.length = 0;
      this.choiceOfColor.push(color);
    },
    getColorFromStore(chosenRow: number, chosenPeon: number) {
      if (chosenRow === this.playRowId) {
        const row = this.rows[chosenRow];
        const chosenPeons = this.chosenPeons;
        row[chosenPeon] = this.choiceOfColor[0];
        row.map((x: string) => {
          x !== "" ? chosenPeons.push(x) : "";
        });
        row.every((x) => x !== "") ? this.playRowId++ : "";
        row.every((x) => x !== "") && chosenPeons.length == this.numberOfPeons
          ? this.checkColorsPlaces(chosenRow)
          : (chosenPeons.length = 0);
      }
    },
    previouslyCountedColor(colorName: string) {
      this.solutionObject[colorName] > 0
        ? this.solutionObject[colorName]--
        : "";
    },
    checkColorsPlaces(chosenRow: number) {
      Object.assign(
        this.solutionObject,
        this.solution.reduce(
          (map: Record<string, number> = {}, peon) => ({
            ...map,
            [peon]: (map[peon] || 0) + 1,
          }),
          {}
        )
      );
      this.chosenPeons.map((x, i) => {
        if (this.solution[i] === x) {
          this.resultColors[chosenRow].push("black");
          this.previouslyCountedColor(x);
        }
      }),
        this.chosenPeons.map((x, i) => {
          if (this.solution.includes(x) && this.solution[i] !== x) {
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
    numberOfPeons(): any {
      return (
        Object.values(this.rows).flat().length / Object.values(this.rows).length
      );
    },
    solutionObject(): any {
      const solution = this.solution;
      const solutionObj = solution.reduce(
        (map: Record<string, number> = {}, peon) => ({
          ...map,
          [peon]: (map[peon] || 0) + 1,
        }),
        {}
      );
      return solutionObj;
    },
  },
});
