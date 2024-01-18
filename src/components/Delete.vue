<template>
  <h3>Delete Details <button @click="emit('close')">close</button></h3>

  <h3>Do you want to delete</h3>
  <button @click="remove">Yes</button>
  <button @click="emit('close')">No</button>
</template>
<script setup lang="ts">
import { useStore } from "vuex";
const { idx } = defineProps({
  idx: Number,
});
const store = useStore();
const emit = defineEmits(["close"]);

const remove = () => {
  store.commit("delete", idx);
  emit("close");
};
</script>
