<!-- views/UploadView.vue -->
<template>
    <div class="home-container">
        <el-row :gutter="20">
            <el-col>this is upload
            </el-col>
        </el-row>
        <el-pagination background layout="prev, pager, next" :total="total" @current-change="handlePageChange" />
    </div>
</template>