<template>
  <div class="app-container">
    <header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"> <router-link to="/" class="nav-link">首页</router-link></el-menu-item>
        <el-sub-menu index="2">
          <template #title>文件管理</template>
          <el-menu-item index="2-1"> <router-link to="/upload" class="nav-link">上传视频</router-link>
          </el-menu-item>
          <el-menu-item index="2-2"><router-link to="/list" class="nav-link">文件列表</router-link></el-menu-item>
          <el-menu-item index="2-3">添加网盘</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3" disabled>Info</el-menu-item>
      </el-menu>
      <div class="h-6" />
    </header>

    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style>
.nav-link {
  margin-right: 20px;
  text-decoration: none;
  color: #2c3e50;
}

.router-link-active {
  font-weight: bold;
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>