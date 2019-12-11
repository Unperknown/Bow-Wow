import { USER_CREATE, USER_LOAD, USER_ERROR, USER_SUCCESS } from '../action/user'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Authorization, Content-Type'

const state = {
  status: '',
  user: {},
  profile: {},
  hasLoadedOnce: false
}

const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile.name
}

const sendUserInfo = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(axios.post('/api/user/add', user))
      } catch (err) {
        reject(new Error(err))
      }
    }, 1000)
  })
}

const loadUserInfo = (token) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(axios.get(`/api/user/get?accessToken=${token}`))
      } catch (err) {
        reject(new Error(err))
      }
    }, 1000)
  })
}

const actions = {
  [USER_CREATE]: ({ commit }, user) => {
    return new Promise((resolve, reject) => {
      commit(USER_CREATE)
      sendUserInfo(user)
        .then(resp => {
          const user = resp.data.user

          if (user === {}) {
            commit(USER_ERROR)
            reject(resp.data.error)
          }

          commit(USER_SUCCESS, { user })
          resolve(user)
        })
        .catch(err => {
          commit(USER_ERROR)
          reject(err)
        })
    })
  },
  [USER_LOAD]: ({ commit }, token) => {
    return new Promise((resolve, reject) => {
      commit(USER_LOAD)
      loadUserInfo(token)
        .then(resp => {
          const user = resp.data.user
          resolve(user)
        })
        .catch(err => {
          commit(USER_ERROR)
          reject(err)
        })
    })
  }
}

const mutations = {
  [USER_CREATE]: (state) => {
    state.status = 'loading'
  },
  [USER_SUCCESS]: (state, resp) => {
    state.status = 'success'
    state.user = resp.user
    state.hasLoadedOnce = true
  },
  [USER_LOAD]: (state) => {
    state.status = 'loaded'
  },
  [USER_ERROR]: (state) => {
    state.status = 'error'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
