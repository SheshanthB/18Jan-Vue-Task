<template>
  <div :class="{ blocks: true }">
    <div style="border: 1px solid">
      <h3>Add Employee <button @click="emit('close')">close</button></h3>
    </div>
    <p>
      Name: <input type="text" v-model="name" placeholder="Enter Your Name" />
    </p>
    <p>
      Age: <input type="number" v-model="age" placeholder="Enter Your Age" />
    </p>
    <p>
      Gender:
      <select v-model="gender">
        <option value="">--Select Gender--</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </p>
    <p>
      Date of Joining:
      <input type="text" v-model="DOJ" placeholder="Enter DOJ (01 Jan 2024)" />
    </p>
    <p>
      Department:
      <select v-model="department">
        <option value="">--Select Department--</option>
        <option value="Accounts">Accounts</option>
        <option value="IT">IT</option>
        <option value="Admin">Admin</option>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
      </select>
    </p>
    <button @click="save">Save</button>
  </div>
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
<style>
.blocks {
  border: 1px solid;
  width: 300px;
  padding: 4px;
}
</style>
