import { defineStore } from "pinia";
import { reactive, toRaw } from "vue";
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
      console.log("getRandomColors");
      if (this.solution.length < this.numberOfPeons) {
        this.solution.push(
          this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)]
        );
      }

      console.log(this.solution);

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
    checkColorsPlaces(chosenRow: number) {
      let countBlack = 0;
      this.chosenPeons.map((x, i, a) => {
        const solution = this.solution;
        const matchingInSolution = solution.filter((y) => y === x).length;
        const matchingInPlayerChoice = a.filter((z) => z === x).length;

        if (solution[i] === x) {
          this.resultColors[chosenRow].push("black");
          console.log("countBlack: " + countBlack);
          countBlack++;
          console.log("countBlack: " + countBlack);
        } else if (solution.includes(x)) {
          console.log("matchingInSolution: " + matchingInSolution);
          console.log("matchingInPlayerChoice: " + matchingInPlayerChoice);
          //console.log(a.filter((s) => s[i] === solution[i]).length);
          console.log("countBlack: " + countBlack);

          matchingInSolution < matchingInPlayerChoice
            ? this.resultColors[chosenRow].push("none") *
              (matchingInPlayerChoice - matchingInSolution)
            : this.resultColors[chosenRow].push("grey");
        } else {
          this.resultColors[chosenRow].push("none");
        }
      });

      this.endOfGame();

      return this.resultColors.map((x) => x);
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
