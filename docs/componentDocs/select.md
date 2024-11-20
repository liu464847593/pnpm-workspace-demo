# select
下拉组件

### 示例：
<script setup>
import {ref} from 'vue';
import {CsSelect} from '@l-org/pnpm-workspace-demo-components';
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
<cs-select v-model="selectValue" :options="options" style="width: 200px"></cs-select>


### 代码：

```html
<template>
  <cs-select v-model="selectValue" :options="options" style="width: 200px"></cs-select>
</template>
```

## Attributes
|  参数  | 说明     | 类型     | 是否必要  |  默认值  |
|  ----  |--------|--------|-------|  ----  |
| v-model  | 选中项绑定值 | Number | false | - |
| options  | 选项的数组  | Array  | true  | - |
