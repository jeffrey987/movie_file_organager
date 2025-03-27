// api/tmdb.ts
import axios from 'axios' // 引入axios
import { ElMessage, ElMessageBox } from 'element-plus'
import { useUserStore } from '@/pinia/modules/user'
import router from '@/router/index'

export const getVideos = (params: PaginationParams) => 
  axios.get('/videos', { params })

export const getDiscover = (params: PaginationParams) => 
  axios.get('https://api.themoviedb.org/3/discover/movie', params, {
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2EyYTU0NWVmNjAwNTVjNjU0OTUyNGExNmU2OGRhNSIsIm5iZiI6MTczOTM3MjA0My45NzgsInN1YiI6IjY3YWNiNjBiZTA5ZDZjOTE5MGIwYTRhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O97KTBFbCV8rCwAJgmW6hNe6moQZqGFf3Y69uULCeEI",
    }
  })