import { SHARE_CREATE, SHARE_LOAD, SHARE_ERROR, SHARE_SUCCESS } from '../action/share'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Authorization, Content-Type'

const state = {
  status: ''
}

const getters = {
  getStatus: () => state.status
}

const addShare = (share) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(axios.post('/api/share/add', share))
      } catch (err) {
        reject(new Error(err))
      }
    }, 1000)
  })
}

const loadShares = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(axios.get('/api/share/load'))
      } catch (err) {
        reject(new Error(err))
      }
    }, 1000)
  })
}

const actions = {
  [SHARE_CREATE]: ({ commit }, share) => {
    return new Promise((resolve, reject) => {
      commit(SHARE_CREATE)
      addShare(share)
        .then(resp => {
          const share = resp.data.share
          commit(SHARE_SUCCESS)
          resolve(share)
        })
        .catch(err => {
          commit(SHARE_ERROR)
          reject(err)
        })
    })
  },
  [SHARE_LOAD]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit(SHARE_LOAD)
      loadShares()
        .then(resp => {
          const articles = resp.data.articles
          commit(SHARE_SUCCESS)
          resolve(articles)
        })
        .catch(err => {
          commit(SHARE_ERROR)
          reject(err)
        })
    })
  }
}

const mutations = {
  [SHARE_CREATE]: (state) => {
    state.status = 'loading'
  },
  [SHARE_SUCCESS]: (state) => {
    state.status = 'success'
  },
  [SHARE_LOAD]: (state) => {
    state.status = 'loaded'
  },
  [SHARE_ERROR]: (state) => {
    state.status = 'error'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
