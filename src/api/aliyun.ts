// api/video.ts
import axios from '@/utils/axios'

export const getFile = (params: PaginationParams) => 
  axios.get('/videos', { params })

export const uploadVideo = (formData: FormData) => 
  axios.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })