<template>
  <el-button size="small" circle icon="Refresh"></el-button>
  <el-button size="small" circle icon="FullScreen"></el-button>
  <el-button size="small" circle icon="Setting"></el-button>
  <img src="../../../../public/logo.png" style="width: 24px; height: 24px; margin: 0 10px" />
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      Admin
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts"></script>
<style scoped></style>
