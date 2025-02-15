<!-- views/HomeView.vue -->
<template>
    <div class="home-container">
        <el-row :gutter="20">
            <el-col v-for="video in videoList" :key="video.id" :xs="24" :sm="12" :md="8" :lg="6">
                <el-card class="video-card">
                    <router-link :to="`/video/${video.id}`">
                        <img :src="video.thumbnail" class="video-thumbnail" />
                        <h3 class="video-title">{{ video.title }}</h3>
                        <div class="video-info">
                            <span>{{ video.author }}</span>
                            <span>{{ video.views }}次播放</span>
                        </div>
                    </router-link>
                </el-card>
            </el-col>
        </el-row>
        <el-pagination background layout="prev, pager, next" :total="total" @current-change="handlePageChange" />
    </div>
</template>
<!-- HomeView.vue -->
<script setup lang="ts">
import { ref } from 'vue'

interface VideoItem {
    id: number
    title: string
    thumbnail: string
    author: string
    views: number
}

// 使用 ref 创建响应式数据
const videoList = ref<VideoItem[]>([
    {
        id: 1,
        title: 'Vue3 入门教程',
        thumbnail: 'https://iph.href.lu/400x400?text=技术小站',
        author: '技术小站',
        views: 12345
    },
    {
        id: 2,
        title: 'Element Plus 实战',
        thumbnail: 'https://iph.href.lu/400x400?text=前端达人',
        author: '前端达人',
        views: 8560
    }
])
</script>