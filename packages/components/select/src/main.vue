<script setup>
defineOptions({
  name: 'CsSelect',
})
import {reactive} from 'vue';
const value = defineModel();
const props = defineProps({
  options:{
    required: true,
    type: Array,
    default: () => reactive([])
  }
})

</script>

<template>
  <el-select v-model="value">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
  </el-select>
</template>

