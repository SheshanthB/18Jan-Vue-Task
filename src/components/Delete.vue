<template>
  <div :class="{ blocks: true }">
    <div style="border: 1px solid">
      <h3>Delete Details <button @click="emit('close')">close</button></h3>
    </div>
    <h3>Do you want to delete</h3>
    <button @click="remove">Yes</button>
    <button @click="emit('close')">No</button>
  </div>
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
