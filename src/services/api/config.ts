import axios from 'axios'
import { store } from '../../store/store'

export const setToken = (newToken: string | null) => {
   axios.defaults.headers.common['Authorization'] = newToken
      ? `Token ${newToken}`
      : ''
   newToken ? localStorage.setItem('token', newToken) : clearToken()
}

const clearToken = () => {
   localStorage.removeItem('token')
}

axios.interceptors.response.use(
   (response) => response,

   (error) => {
      if (error.response.status === 400) {
         clearToken()
         store.dispatch('handleLogout')
         alert(
            `Неправильные данные. ${error.response.data.data.non_field_errors[0]}`,
         )
      }

      return Promise.reject(error)
   },
)

export default {
   setToken,
   clearToken,
}
