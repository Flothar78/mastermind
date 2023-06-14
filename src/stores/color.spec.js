import { setActivePinia, createPinia } from "pinia";
import { useColorStore } from "./ColorStore.js";
import { describe, beforeEach, it, expect } from "vitest";

describe("Color Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("solution: ['blue', 'red', 'blue', 'blue']", () => {
    // Set up initial state or mock data
    const color_store = useColorStore();
    color_store.chosenPeons = ["red", "blue", "red", "red"];
    color_store.solution = ["blue", "red", "blue", "blue"];
    const chosenRow = 0;

    // Invoke the function
    color_store.checkColorsPlaces(chosenRow);

    // Assert the expected results
    expect(color_store.resultColors[chosenRow]).toEqual([
      "grey",
      "grey",
      "none",
      "none",
    ]);
  });

  ///////////////////////////////////////////////////////////////

  it("solution: ['black', 'yellow','red','orange']", () => {
    // Set up initial state or mock data
    const color_store = useColorStore();
    color_store.chosenPeons = ["black", "orange", "black", "black"];
    color_store.solution = ["black", "yellow", "red", "orange"];
    const chosenRow = 0;

    // Invoke the function
    color_store.checkColorsPlaces(chosenRow);

    // Assert the expected results
    expect(color_store.resultColors[chosenRow]).toEqual([
      "black",
      "grey",
      "none",
      "none",
    ]);
  });

  ///////////////////////////////////////////////////////////////

  it("solution: ['blue', 'red','yellow','red']", () => {
    // Set up initial state or mock data
    const color_store = useColorStore();
    color_store.solution = ["blue", "red", "yellow", "red"];
    color_store.chosenPeons = ["red", "blue", "yellow", "red"];
    const chosenRow = 0;

    // Invoke the function
    color_store.checkColorsPlaces(chosenRow);

    // Assert the expected results
    expect(color_store.resultColors[chosenRow]).toEqual([
      "grey",
      "grey",
      "black",
      "black",
    ]);
  });
});
