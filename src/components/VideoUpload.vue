<!-- components/VideoUpload.vue -->
<template>
    <el-upload class="upload-demo" action="/api/upload" :before-upload="beforeUpload" :on-success="handleSuccess"
        :limit="1" accept="video/*">
        <el-button type="primary">点击上传视频</el-button>
        <template #tip>
            <div class="el-upload__tip">
                支持MP4/AVI/MOV格式，大小不超过2GB
            </div>
        </template>
    </el-upload>
</template>

<script setup lang="ts">
const beforeUpload = (file: File) => {
    const isVideo = file.type.startsWith('video/')
    const isLt2G = file.size / 1024 / 1024 / 1024 < 2

    if (!isVideo) {
        ElMessage.error('只能上传视频文件!')
        return false
    }
    if (!isLt2G) {
        ElMessage.error('视频大小不能超过2GB!')
        return false
    }
    return true
}

const handleSuccess = (response: any) => {
    ElMessage.success('上传成功!')
    // 处理上传后的逻辑
}
</script>