import { auth } from '../services/api'
import { setToken } from '../services/api/config'
import router from '../router'
import { LoginData } from '../types/auth'
import Vue from 'vue'
import Vuex from 'vuex'
import { appeals } from '../services/api'
import type { Appeal } from '../types/appeal'

Vue.use(Vuex)

interface RootState {
   token: string | null
   appealsList: Appeal[]
   params: string
   isLoading: boolean
}

const getInitialState = (): RootState => ({
   token: localStorage.getItem('token') || null,
   appealsList: [],
   params: '',
   isLoading: true,
})

export const store = new Vuex.Store<RootState>({
   state: getInitialState(),
   mutations: {
      SET_APPEALS(state, data: Appeal[]) {
         state.appealsList = data
      },
      SET_LOADING(state, isLoading: boolean) {
         state.isLoading = isLoading
      }
   },
   actions: {
      handleAuth({ commit }, data: LoginData) {
         return auth.login(data).then(({ data }) => {
            commit('setToken', data.key)
            setToken(data.key)
         })
      },
      handleLogout({ commit }) {
         commit('clearToken')
         setToken(null)
         if (router.currentRoute.name !== 'AuthPage') {
            router.push({ name: 'AuthPage' })
         }
      },
      FETCH_ALL_APPEALS({ commit }, params) {
         return appeals.fetchAppeals(params).then(({ data }) => {
            commit('SET_APPEALS', data.results)
         })
      },
      FETCH_FROM_SEARCH_APPEALS({ commit }, search: string) {
         return appeals.fetchFromSearchAppeals(search).then(({ data }) => {
            commit('SET_APPEALS', data.results)
         })
      },
      FETCH_BY_PREMISE_APPEALS({ commit }, params) {
         const { page_size, page, premise_id } = params

         return appeals
            .fetchByPremiseIdAppeals(
               { page_size: page_size, page: page },
               premise_id,
            )
            .then(({ data }) => {
               commit('SET_APPEALS', data.results)
            })
      },
   },
})
