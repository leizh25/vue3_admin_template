<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider" :class="{ fold: layoutSettingStore.fold ? true : false }">
      <Logo></Logo>
      <!-- 展示菜单 -->
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu
          background-color="#00152b"
          text-color="white"
          active-text-color="yellowgreen"
          :default-active="$route.path"
          :collapse="layoutSettingStore.fold ? true : false"
        >
          <!-- 根据路由动态生成菜单 -->
          <MyMenu :menuList="userStore.menuRoutes"></MyMenu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar" :class="{ fold: layoutSettingStore.fold ? true : false }">
      <!-- layout组件的顶部导航Tabbar -->
      <Tabbar></Tabbar>
    </div>
    <!-- 内容展示区 -->
    <div class="layout_main" :class="{ fold: layoutSettingStore.fold ? true : false }">
      <Main></Main>
    </div>
  </div>
</template>
<script setup lang="ts">
//获取路由对象
import { useRoute } from 'vue-router'
//引入左侧菜单子组件
import Logo from './Logo/Logo.vue'
import MyMenu from './Menu/MyMenu.vue'
//右侧内容展示区域
import Main from './Main/Main.vue'
//获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
//引入顶部Tabbar组件
import Tabbar from './Tabbar/Tabbar.vue'
import useLayoutSettingStore from '@/store/modules/setting'
//获取layout组件配置仓库
let layoutSettingStore = useLayoutSettingStore()
let userStore = useUserStore()
//获取路由对象
let $route = useRoute()
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    color: #fff;
    background-color: $base-menu-background;
    transition: all 0.3s;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }
    &.fold {
      width: $base-menu-min-width;
    }
  }
  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
  .layout_main {
    position: absolute;
    left: $base-menu-width;
    top: $base-tabbar-height;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
