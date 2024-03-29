import { setActivePinia, createPinia } from "pinia";
import { useColorStore } from "./ColorStore.js";
import { describe, beforeEach, it, expect } from "vitest";

describe("Color Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  ////////////////////////////////////////////////////////////////

  it("solution: ['orange', 'red', 'yellow', 'green']", () => {
    // Set up initial state or mock data
    const color_store = useColorStore();
    color_store.chosenPeons = ["yellow", "red", "green", "yellow"];
    color_store.solution = ["orange", "red", "yellow", "green"];
    const chosenRow = 0;

    // Invoke the function
    color_store.checkColorsPlaces(chosenRow);

    // Assert the expected results
    expect(color_store.resultColors[chosenRow]).toEqual([
      "black",
      "grey",
      "grey",
      "none",
    ]);
  });

  //////////////////////////////////////////////////////////////

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

  it("solution: ['green', 'black','orange','green']", () => {
    // Set up initial state or mock data
    const color_store = useColorStore();
    color_store.solution = ["green", "black", "orange", "green"];
    color_store.chosenPeons = ["blue", "black", "orange", "blue"];
    const chosenRow = 0;

    // Invoke the function
    color_store.checkColorsPlaces(chosenRow);

    // Assert the expected results
    expect(color_store.resultColors[chosenRow]).toEqual([
      "black",
      "black",
      "none",
      "none",
    ]);
  });

  ///////////////////////////////////////////////////////////////

  it("solution: ['red', 'yellow', 'blue', 'green']", () => {
    // Set up initial state or mock data
    const color_store = useColorStore();
    color_store.chosenPeons = ["blue", "yellow", "green", "blue"];
    color_store.solution = ["red", "yellow", "blue", "green"];
    const chosenRow = 0;

    // Invoke the function
    color_store.checkColorsPlaces(chosenRow);

    // Assert the expected results
    expect(color_store.resultColors[chosenRow]).toEqual([
      "black",
      "grey",
      "grey",
      "none",
    ]);
  });

   ///////////////////////////////////////////////////////////////

   it("solution: ['red', 'yellow', 'orange', 'blue']", () => {
    // Set up initial state or mock data
    const color_store = useColorStore();
    color_store.chosenPeons = ["yellow", "yellow", "yellow", "yellow"];
    color_store.solution = ["red", "yellow", 'orange', 'blue'];
    const chosenRow = 0;

    // Invoke the function
    color_store.checkColorsPlaces(chosenRow);

    // Assert the expected results
    expect(color_store.resultColors[chosenRow]).toEqual([
      "black",
      "none",
      "none",
      "none",
    ]);
  });

  ///////////////////////////////////////////////////////////////

  it("solution: ['blue', 'yellow', 'orange', 'red']", () => {
    // Set up initial state or mock data
    const color_store = useColorStore();
    color_store.chosenPeons = ["red", "green", "green", "green"];
    color_store.solution = ["blue", "yellow", "orange", "red"];
    const chosenRow = 0;

    // Invoke the function
    color_store.checkColorsPlaces(chosenRow);

    // Assert the expected results
    expect(color_store.resultColors[chosenRow]).toEqual([
      "grey",
      "none",
      "none",
      "none",
    ]);
  });

   ///////////////////////////////////////////////////////////////

   it("solution: ['blue', 'orange', 'yellow', 'orange']", () => {
    // Set up initial state or mock data
    const color_store = useColorStore();
    color_store.chosenPeons = ["orange", "blue", "orange", "yellow"];
    color_store.solution = ['blue', 'orange', 'yellow', 'orange'];
    const chosenRow = 0;

    // Invoke the function
    color_store.checkColorsPlaces(chosenRow);

    // Assert the expected results
    expect(color_store.resultColors[chosenRow]).toEqual([
      "grey",
      "grey",
      "grey",
      "grey",
    ]);
  });
  ///////////////////////////////////////////////////////////////

  it("solution: ['yellow', 'red', 'green', 'orange']", () => {
    // Set up initial state or mock data
    const color_store = useColorStore();
    color_store.chosenPeons = ["green", "blue", "blue", "blue"];
    color_store.solution = ['yellow', 'red', 'green', 'orange'];
    const chosenRow = 0;

    // Invoke the function
    color_store.checkColorsPlaces(chosenRow);

    // Assert the expected results
    expect(color_store.resultColors[chosenRow]).toEqual([
      "grey",
      "none",
      "none",
      "none",
    ]);
  });
});
