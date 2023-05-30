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
            arrayOfChosenPeons: reactive([]),
            solutionColors: [],
            resultColors: reactive([]),
        };
    },
    actions: {
        getRandomColors(number) {
            this.solutionColors.push(this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)]);
            return this.solutionColors[number];
        },
        addColorToStore(color) {
            this.choiceOfColor.length = 0;
            this.choiceOfColor.push(color);
        },
        getColorFromStore(chosenRow, chosenPeon) {
            const rowFillingMonitor = toRaw(this.rows[chosenRow]);
            this.rows[chosenRow][chosenPeon].class = Object.values(this.choiceOfColor).toString();
            rowFillingMonitor.map((x) => {
                const peonColorValueCheck = toRaw(Object.values(x)).join("");
                peonColorValueCheck !== ""
                    ? this.arrayOfChosenPeons.push(peonColorValueCheck)
                    : "";
            });
            this.arrayOfChosenPeons.length == this.numberOfPeons
                ? this.checkColorsPlaces()
                : (this.arrayOfChosenPeons.length = 0);
        },
        checkColorsPlaces() {
            this.resultColors.length = 0;
            this.arrayOfChosenPeons.map((x, i, a) => {
                console.log(x);
                if (this.solutionColors[i] === x) {
                    this.resultColors.push("black");
                }
                else if (this.solutionColors.includes(x)) {
                    this.solutionColors.filter((y) => y === x).length ===
                        a.filter((y) => y === x).length
                        ? this.resultColors.push("grey")
                        : this.resultColors.push("none");
                }
                else {
                    this.resultColors.push("none");
                }
            });
            console.log(this.resultColors.sort());
            return this.resultColors.sort();
        },
    },
    getters: {
        numberOfPeons() {
            return toRaw(this.rows).flat().length / toRaw(this.rows).length;
        },
    },
});
//# sourceMappingURL=ColorStore.js.map