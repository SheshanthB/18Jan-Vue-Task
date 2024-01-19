<template>
  <header :class="{ top: true }" style="border: 1px solid">
    <div style="display: flex">
      <img src="./assets/logo.svg" style="width: 50px" />
      <h1>Vue</h1>
    </div>
    <div style="width: 300px">
      <h3 style="border: solid 2px">Login Name: Sheshanth</h3>
    </div>
  </header>
  <main style="margin-top: 10px">
    <div :class="{ top: true }">
      <input
        type="text"
        v-model="searchItem"
        placeholder="Search"
        style="border-radius: 5px"
      />

      <button @click="showAddComponent = true" :class="{ addButton: true }">
        Add Employee
      </button>
    </div>
    <ul v-if="searchItem.length > 0" :class="{ listStyle: true }">
      <li v-for="item in filteredItems" :key="item.id">
        {{ item.name }} - {{ item.department }} - {{ item.DOJ }}
      </li>
    </ul>
    <!-- <p v-else>No results found.</p> -->
    <table>
      <tr>
        <th>S.No.</th>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Date of Joining</th>
        <th>Department</th>
        <th>Action</th>
      </tr>

      <tr v-for="(item, index) in store.state.details">
        <td style="width: 50px">{{ index + 1 }}</td>
        <td style="width: 500px">{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.gender }}</td>
        <td>{{ item.DOJ }}</td>
        <td>{{ item.department }}</td>
        <td>
          <button @click="(showEditComponent = true), (idx = index)">
            edit
          </button>
          <button @click="(showDeleteComponent = true), (idx = index)">
            delete
          </button>
        </td>
      </tr>
    </table>

    <div :class="{ comp: true }">
      <Form v-if="showAddComponent" @close="showAddComponent = false" />

      <EditForm
        v-if="showEditComponent"
        @close="showEditComponent = false"
        :idx="idx"
      />

      <Delete
        v-if="showDeleteComponent"
        @close="showDeleteComponent = false"
        :idx="idx"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { ref, computed } from "vue";
import Form from "./components/Form.vue";
import EditForm from "./components/EditFrom.vue";
import Delete from "./components/Delete.vue";
const store = useStore();
const showAddComponent = ref(false);
const showEditComponent = ref(false);
const showDeleteComponent = ref(false);
const idx = ref(0);

const searchItem = ref("");

const filteredItems = computed(() => {
  return store.state.details.filter((item: any) => {
    return item.name.toLowerCase().includes(searchItem.value.toLowerCase());
  });
});
</script>

<style scoped>
.top {
  display: flex;
  justify-content: space-between;
}

.addButton {
  width: 200px;
  border-radius: 5px;
  padding: 5px 10px;
}
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
table {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
}
.listStyle {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.comp {
  margin: 10px;
  display: flex;
  justify-content: space-evenly;
}
</style>
