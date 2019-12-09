import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../action/auth'
import axios from 'axios'

const state = {
  token: localStorage.getItem('token') || '',
  status: '',
  hasLoadedOnce: false
}

const getters = {
  isAuthenticated: () => !!state.token,
  authStatus: () => state.status
}

const tokenGetter = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(axios.post('/api/get_token', user))
      } catch (err) {
        reject(new Error(err))
      }
    }, 1000)
  })
}

const actions = {
  [AUTH_REQUEST]: ({ commit }, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST)
      tokenGetter(user)
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit(AUTH_SUCCESS, { token, user })
          resolve(token)
        })
        .catch(err => {
          commit(AUTH_ERROR)
          localStorage.removeItem('token')
          reject(err)
        })
    })
  },
  [AUTH_LOGOUT]: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGOUT)
      localStorage.removeItem('token')
      resolve()
    })
  }
}

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success'
    state.token = resp.token
    state.hasLoadedOnce = true
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error'
    state.hasLoadedOnce = true
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
