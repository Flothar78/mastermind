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
            const rowMonitor = this.rows[chosenRow];
            const chosenPeons = this.chosenPeons;
            const trucTestArray = Object.values(toRaw(this.rows)[chosenRow]);
            rowMonitor[chosenPeon].class = Object.values(this.choiceOfColor).toString();
            rowMonitor.map((x) => {
                const peonCheck = Object.values(x).join("");
                peonCheck !== "" ? chosenPeons.push(peonCheck) : "";
            });
            chosenPeons.length == this.numberOfPeons
                ? this.checkColorsPlaces(chosenRow)
                : (chosenPeons.length = 0);
            console.log(trucTestArray.flat().every((x) => Object.values(x).toString() !== ""));
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
            return this.resultColors;
        },
    },
    getters: {
        numberOfPeons() {
            return toRaw(this.rows).flat().length / toRaw(this.rows).length;
        },
    },
});
//# sourceMappingURL=ColorStore.js.map