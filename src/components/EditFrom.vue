<template>
  <div :class="{ blocks: true }">
    <div style="border: 1px solid">
      <h3>Edit Employee <button @click="emit('close')">close</button></h3>
    </div>
    <p>Name: <input type="text" v-model="obj[idx].name" /></p>
    <p>Age: <input type="number" v-model="obj[idx].age" /></p>
    <p>
      Gender:
      <select v-model="obj[idx].gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </p>
    <p>Date of Joining: <input type="text" v-model="obj[idx].DOJ" /></p>
    <p>
      Department:
      <select v-model="obj[idx].department">
        <option value="Accounts">Accounts</option>
        <option value="IT">IT</option>
        <option value="Admin">Admin</option>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
      </select>
    </p>
    <!-- <button @click="save">Save</button> -->
  </div>
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
