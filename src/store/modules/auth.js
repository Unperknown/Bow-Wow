import { AUTH_GRANT, AUTH_EXPIRED, AUTH_ERROR, AUTH_SUCCESS, AUTH_REVOKE } from '../action/auth'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Authorization, Content-Type'

const state = {
  token: localStorage.getItem('token') || '',
  status: ''
}

const getters = {
  isAuthenticated: () => !!state.token,
  authStatus: () => state.status,
  getToken: () => state.token
}

const generateToken = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(axios.post('/api/token/generate', user))
      } catch (err) {
        reject(new Error(err))
      }
    }, 1000)
  })
}

const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(axios.get(`/api/token/check?accessToken=${token}`))
      } catch (err) {
        reject(new Error(err))
      }
    }, 1000)
  })
}

const actions = {
  [AUTH_GRANT]: ({ commit }, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_GRANT)
      generateToken(user)
        .then(resp => {
          const token = resp.data.token
          localStorage.setItem('token', token)
          commit(AUTH_SUCCESS, token)
          resolve(token)
        })
        .catch(err => {
          commit(AUTH_ERROR)
          localStorage.removeItem('token')
          reject(err)
        })
    })
  },
  [AUTH_EXPIRED]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_EXPIRED)
      checkToken(state.token)
        .then(resp => {
          const message = resp.data.message
          if (message === AUTH_EXPIRED) {
            commit(AUTH_REVOKE)
          }
          resolve(message)
        })
        .catch(err => {
          commit(AUTH_ERROR)
          localStorage.removeItem('token')
          reject(err)
        })
    })
  },
  [AUTH_REVOKE]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REVOKE)
      localStorage.removeItem('token')
      resolve()
    })
  }
}

const mutations = {
  [AUTH_GRANT]: (state) => {
    state.status = 'loading'
  },
  [AUTH_SUCCESS]: (state, token) => {
    state.status = 'success'
    state.token = token
  },
  [AUTH_EXPIRED]: (state) => {
    state.status = 'expired'
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error'
  },
  [AUTH_REVOKE]: (state) => {
    state.status = 'revoked'
    state.token = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
