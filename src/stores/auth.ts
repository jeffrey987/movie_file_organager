// stores/auth.ts
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: localStorage.getItem('token') || ''
  }),
  actions: {
    async login(form: LoginForm) {
      const { data } = await axios.post('/api/login', form)
      this.token = data.token
      this.user = data.user
      localStorage.setItem('token', data.token)
    },
    logout() {
      this.token = ''
      this.user = null
      localStorage.removeItem('token')
    }
  }
})