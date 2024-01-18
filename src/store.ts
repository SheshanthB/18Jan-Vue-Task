import { createStore } from "vuex";

const store = createStore({
  state: {
    details: [
      {
        name: "Raju",
        age: 23,
        DOJ: "23 Aug 2022",
        gender: "Male",
        department: "Accounts",
      },
      {
        name: "Rani",
        age: 22,
        DOJ: "03 Jan 2023",
        gender: "Female",
        department: "IT",
      },
      {
        name: "Kumar",
        age: 25,
        DOJ: "13 Dec 2021",
        gender: "Male",
        department: "Admin",
      },
    ],
  },
  mutations: {
    add(state, item: {}) {
      state.details.push(item);
    },
    delete(state, index: number) {
      state.details.splice(index, 1);
    },
    edit(state, index: number, item: {}) {
      state.details[index] = item;
    },
  },
});

export default store;
