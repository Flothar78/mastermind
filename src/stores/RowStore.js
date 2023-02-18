import { defineStore } from "pinia";
import { ref } from "vue";
export const useRowStore = defineStore("RowStore", {
  state: () => {
    return {
      rowsOneByOne: {
        firstRow: {
          id: 1,
        },
        secondRow: {
          id: 2,
        },
        thirdRow: {
          id: 3,
        },
      },
    };
  },

  actions: {
    getRowsOneByOne(id) {
      console.log(id);
    },
  },
});
