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
            winLoseMessage: "",
        };
    },
    actions: {
        getRandomColors(number) {
            this.solution.push(this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)]);
            return this.solution[number];
        },
        addColorToStore(color) {
            console.log("addColorToStore");
            this.choiceOfColor.length = 0;
            this.choiceOfColor.push(color);
            console.log(this.choiceOfColor);
        },
        getColorFromStore(chosenRow, chosenPeon, checkColorsPlaces) {
            console.log("chosenRow:", chosenRow);
            console.log("chosenPeon:", chosenPeon);
            console.log("playRowId", this.playRowId);
            if (chosenRow === this.playRowId) {
                const row = this.rows[chosenRow];
                const chosenPeons = this.chosenPeons;
                const peonClassArray = this.rows[chosenRow];
                console.log(this.choiceOfColor[0]);
                row[chosenPeon] = this.choiceOfColor[0];
                row.map((x) => {
                    x !== "" ? chosenPeons.push(x) : "";
                });
                peonClassArray.every((x) => x !== "") ? this.playRowId++ : "";
                peonClassArray.every((x) => x !== "") &&
                    chosenPeons.length == this.numberOfPeons
                    ? this.checkColorsPlaces(chosenRow)
                    : (chosenPeons.length = 0);
            }
            else {
                console.log("if marche pas ici");
            }
        },
        checkColorsPlaces(chosenRow) {
            this.chosenPeons.map((x, i, a) => {
                if (this.solution[i] === x) {
                    this.resultColors[chosenRow].push("black");
                }
                else if (this.solution.includes(x)) {
                    this.solution.filter((y) => y === x).length >=
                        a.filter((z) => z === x).length -
                            a.filter((s) => s === this.solution[i]).length
                        ? this.resultColors[chosenRow].push("grey")
                        : this.resultColors[chosenRow].push("none");
                }
                else {
                    this.resultColors[chosenRow].push("none");
                }
            });
            console.log("checkColorsPlaces");
            this.endOfGame();
            return this.resultColors;
        },
        endOfGame() {
            if (this.resultColors
                .flat()
                .slice(-4)
                .filter((x) => x === "black").length == this.numberOfPeons) {
                this.playRowId = 10000;
                this.winLoseMessage = "You win !";
            }
        },
    },
    getters: {
        numberOfPeons() {
            return (Object.values(this.rows).flat().length / Object.values(this.rows).length);
        },
    },
});
//# sourceMappingURL=ColorStore.js.map