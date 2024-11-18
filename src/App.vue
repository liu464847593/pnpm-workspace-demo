<script setup>
import {ref} from 'vue'
let selectValue = ref(1);
const options = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  }
]
</script>

<template>
  <div>
    <cs-select v-model="selectValue" :options="options" style="width: 200px"></cs-select>
  </div>
</template>

<style scoped>

</style>
