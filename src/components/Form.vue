<template>
  <h3>Add Employee <button @click="emit('close')">close</button></h3>
  <label>
    Name: <input type="text" v-model="name" placeholder="Enter Your Name" />
  </label>
  <label>
    Age: <input type="number" v-model="age" placeholder="Enter Your Age" />
  </label>
  <label>
    Gender:
    <select v-model="gender">
      <option value="">--Select Gender--</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  </label>
  <label>
    Date of Joining:
    <input type="text" v-model="DOJ" placeholder="Enter DOJ (01 Jan 2024)" />
  </label>
  <label>
    Department:
    <select v-model="department">
      <option value="">--Select Department--</option>
      <option value="Accounts">Accounts</option>
      <option value="IT">IT</option>
      <option value="Admin">Admin</option>
      <option value="Sales">Sales</option>
      <option value="Marketing">Marketing</option>
    </select>
  </label>
  <button @click="save">Save</button>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
const emit = defineEmits(["close"]);
const store = useStore();
const name = ref("");
const age = ref(null);
const DOJ = ref("");
const gender = ref("");
const department = ref("");
const save = () => {
  let item = {
    name: name.value,
    age: age.value,
    DOJ: DOJ.value,
    gender: gender.value,
    department: department.value,
  };
  store.commit("add", item);
};
</script>
