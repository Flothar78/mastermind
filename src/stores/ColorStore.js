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
            solutionColors: reactive([]),
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
            this.arrayOfChosenPeons.length == this.rows[0].length
                ? this.checkColorsPlaces()
                : (this.arrayOfChosenPeons.length = 0);
        },
        checkColorsPlaces() {
            const choicePlayer = toRaw(this.arrayOfChosenPeons);
            const solutionCombination = toRaw(this.solutionColors);
            choicePlayer.map((x, i) => {
                if (solutionCombination[i] === x) {
                    this.resultColors.push("black");
                }
                else if (solutionCombination.includes(x)) {
                    this.resultColors.push("grey");
                }
                else {
                    this.resultColors.push("none");
                }
            });
            console.log(this.resultColors);
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