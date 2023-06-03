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
            choiceOfColor: [],
            chosenPeons: reactive([]),
            solution: [],
            resultColors: [[], [], [], [], []],
            playRowId: 0,
        };
    },
    actions: {
        getRandomColors(number) {
            this.solution.push(this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)]);
            return this.solution[number];
        },
        addColorToStore(color) {
            this.choiceOfColor.length = 0;
            this.choiceOfColor.push(color);
        },
        getColorFromStore(chosenRow, chosenPeon, checkColorsPlaces) {
            if (chosenRow === this.playRowId) {
                const rowMonitor = this.rows[chosenRow];
                const chosenPeons = this.chosenPeons;
                const peonClassArray = Object.values(toRaw(this.rows)[chosenRow]);
                rowMonitor[chosenPeon].class = Object.values(this.choiceOfColor).toString();
                rowMonitor.map((x) => {
                    const peonCheck = Object.values(x).join("");
                    peonCheck !== "" ? chosenPeons.push(peonCheck) : "";
                });
                peonClassArray.flat().every((x) => Object.values(x).toString() !== "")
                    ? this.playRowId++
                    : "";
                chosenPeons.length == this.numberOfPeons
                    ? this.checkColorsPlaces(chosenRow)
                    : (chosenPeons.length = 0);
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
            this.endOfGame();
            return this.resultColors;
        },
        endOfGame() {
            if (this.resultColors
                .flat()
                .slice(-4)
                .filter((x) => x === "black").length == this.numberOfPeons) {
                console.log("You win !");
                this.playRowId = 10000;
            }
        },
    },
    getters: {
        numberOfPeons() {
            return toRaw(this.rows).flat().length / toRaw(this.rows).length;
        },
    },
});
//# sourceMappingURL=ColorStore.js.map