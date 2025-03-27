// api/aliyun.ts
import axios from '@/utils/axios'

export const getFile = (params: PaginationParams) => 
  axios.get('/videos', { params })

export const openFile = (formData: FormData) => 
  axios.post('https://openapi.alipan.com/adrive/v1.0/openFile/list', formData)