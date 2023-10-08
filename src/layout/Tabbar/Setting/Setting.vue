<template>
  <el-button size="small" circle icon="Refresh" @click="updateRefresh"></el-button>
  <el-button size="small" circle icon="FullScreen" @click="fullScreen"></el-button>
  <el-button size="small" circle icon="Setting"></el-button>
  <img :src="userStore.avatar" style="width: 24px; height: 24px; margin: 0 10px; border-radius: 50%" />
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.userName }}
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
//过去layout小仓库
import useLayoutSettingStore from '@/store/modules/setting'
//获取用户相关小仓库
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()
const layoutSettingStore = useLayoutSettingStore()
//刷新按钮点击的回调
const updateRefresh = () => {
  layoutSettingStore.refresh = !layoutSettingStore.refresh
}
//点击全屏按钮的回调
const fullScreen = () => {
  //DOM对象的一个属性, 可以用来判断当前是不是全屏模式[全屏:true,不是全屏:null]
  let full = document.fullscreenElement
  //切换全屏模式  文档根节点的方法requestFullscreen()实现全屏模式
  if (!full) document.documentElement.requestFullscreen()
  else document.exitFullscreen()
}
</script>
<style scoped></style>
