// api/tmdb.ts
// api/axios.ts
import axios from 'axios'

const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
})

export const getDiscover = (params: PaginationParams) => 
  tmdbApi.get('/discover/movie', { params })
export const getVideos = (params: PaginationParams) => 
  axios.get('/videos', { params })

