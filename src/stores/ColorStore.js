import { defineStore } from "pinia";
import { ref } from "vue";
export const useColorStore = defineStore("ColorStore", {
  state: () => {
    return {
      choiceOfColor: [],
      classColor1: ref([]),
      classColor2: ref([]),
      classColor3: ref([]),
    };
  },

  actions: {
    addColorToStore(className) {
      this.choiceOfColor.length = 0;
      this.choiceOfColor.push(className);
    },
    getColor1FromStore() {
      this.classColor1.length = 0;
      this.classColor1.push(Object.values(this.choiceOfColor));
      return this.classColor1.join``;
    },
    getColor2FromStore() {
      this.classColor2.length = 0;
      this.classColor2.push(Object.values(this.choiceOfColor));
      return this.classColor2.join``;
    },
    getColor3FromStore() {
      this.classColor3.length = 0;
      this.classColor3.push(Object.values(this.choiceOfColor));
      return this.classColor3.join``;
    },
  },
});
