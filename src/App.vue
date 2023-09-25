<template>
  <div class="box">
    <el-button type="primary" size="small" :icon="Plus">主要按钮</el-button>
    <el-button type="success" size="deault" :icon="Edit">编辑按钮</el-button>
    <el-button type="danger" size="large" :icon="Delete">删除按钮</el-button>
    <el-pagination layout="prev, pager, next, jumper" :total="1000" />

    <Test></Test>
  </div>
</template>
<script setup lang="ts">
//引入图标组件
import { Plus, Edit, Delete } from '@element-plus/icons-vue'
import Test from '@/components/Test.vue'
console.log(import.meta.env)
</script>
<style scoped lang="scss"></style>
