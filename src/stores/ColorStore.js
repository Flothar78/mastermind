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
            this.solution.push(this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)]);
            console.log(this.solution);
            return this.solution[number];
        },
        addColorToStore(color) {
            console.log("addColorToStore");
            this.choiceOfColor.length = 0;
            this.choiceOfColor.push(color);
        },
        getColorFromStore(chosenRow, chosenPeon, checkColorsPlaces) {
            console.log("getColorFromStore");
            if (chosenRow === this.playRowId) {
                const row = this.rows[chosenRow];
                const chosenPeons = this.chosenPeons;
                const peonClassArray = this.rows[chosenRow];
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
        },
        checkColorsPlaces(chosenRow) {
            console.log("checkColorsPlaces");
            console.log(this.chosenPeons);
            console.log(this.solution.slice(0, 5));
            const slicedSolution = this.solution.slice(0, 5);
            this.chosenPeons.map((x, i, a) => {
                if (slicedSolution[i] === x) {
                    this.resultColors[chosenRow].push("black");
                }
                else if (slicedSolution.includes(x)) {
                    if (slicedSolution.filter((y) => y === x).length >=
                        a.filter((z) => z === x).length -
                            a.filter((s) => s === slicedSolution[i]).length) {
                        this.resultColors[chosenRow].push("grey");
                    }
                }
                else {
                    this.resultColors[chosenRow].push("none");
                }
            });
            this.endOfGame();
            return this.resultColors;
        },
        endOfGame() {
            if (this.resultColors
                .flat()
                .slice(-4)
                .filter((x) => x === "black").length == this.numberOfPeons) {
                this.playRowId = 10000;
                this.winLooseMessage = "You win !";
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