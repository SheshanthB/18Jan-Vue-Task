<template>
  <h3>Edit Employee <button @click="emit('close')">close</button></h3>
  <label> Name: <input type="text" v-model="obj[idx].name" /> </label>
  <label> Age: <input type="number" v-model="obj[idx].age" /> </label>
  <label>
    Gender:
    <select v-model="obj[idx].gender">
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  </label>
  <label> Date of Joining: <input type="text" v-model="obj[idx].DOJ" /> </label>
  <label>
    Department:
    <select v-model="obj[idx].department">
      <option value="Accounts">Accounts</option>
      <option value="IT">IT</option>
      <option value="Admin">Admin</option>
      <option value="Sales">Sales</option>
      <option value="Marketing">Marketing</option>
    </select>
  </label>
  <!-- <button @click="save">Save</button> -->
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
const emit = defineEmits(["close"]);
const { idx } = defineProps({
  idx: Number,
});
const store = useStore();
const obj = store.state.details;
// const name = ref("");
// const age = ref(0);
// const DOJ = ref("");
// const gender = ref("");
// const department = ref("");
// const save = () => {
//   let item = {
//     name: obj[idx].value.name,
//     age: obj[idx].value.age,
//     DOJ: obj[idx].value.DOJ,
//     gender: obj[idx].value.gender,
//     department: obj[idx].value.department,
//   };
//   console.log(item);

//   store.commit("edit", item);
//   console.log(store.state.details);
// };
</script>
