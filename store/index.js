import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import axios from '@/plugins/axios'

const resultsPerPage = 10

// "/videos?part=snippet%2CcontentDetails%2Cstatistics%2CtopicDetails&chart=mostPopular&key=AIzaSyBja-ElTLPls0Ja125lVoNtFZhcCfBzXAE"

const createStore = () => {
  return new Vuex.Store({
    state: {
      videos: [],
      pageIndex: 0,
      totalResults: 0,
      resultsPerPage,
      loading: false
    },
    // plugins: [createPersistedState()],
    mutations: {
      setVideos: (state, data) => {
        state.videos = data.items
        state.totalResults = data.pageInfo.totalResults
        state.resultsPerPage = data.pageInfo.resultsPerPage
        state.nextPageToken = data.nextPageToken
        state.pageIndex = 0
        state.loading = false
      },
      setMoreVideos: (state, data) => {
        state.videos = [...state.videos, ...data.items]
        state.totalResults = data.pageInfo.totalResults
        state.resultsPerPage = data.pageInfo.resultsPerPage
        state.nextPageToken = data.nextPageToken
        state.pageIndex++
        state.loading = false
      },
      loadVideos: (state) => {
        state.loading = true
      }
    },
    actions: {
      async loadVideos ({ commit }) {
        commit('loadVideos')
        const { data } = await axios.get(`/videos?part=snippet%2CcontentDetails%2Cstatistics%2CtopicDetails&maxResults=${resultsPerPage}&chart=mostPopular&key=AIzaSyBja-ElTLPls0Ja125lVoNtFZhcCfBzXAE`)
        console.log('data: ', data)
        commit('setVideos', data)
      },
      async loadMoreVideos ({ commit, state }) {
        commit('loadVideos')
        const { data } = await axios.get(`/videos?part=snippet%2CcontentDetails%2Cstatistics%2CtopicDetails&maxResults=${resultsPerPage}&pageToken=${state.nextPageToken}&chart=mostPopular&key=AIzaSyBja-ElTLPls0Ja125lVoNtFZhcCfBzXAE`)
        console.log('data: ', data)
        commit('setMoreVideos', data)
      },
      async nuxtServerInit ({ commit }, { store, isClient, isServer, route, params }) {
        if (isServer && route.name === '/') {
          commit('loadVideos')
          const { data } = await axios.get(`/videos?part=snippet%2CcontentDetails%2Cstatistics%2CtopicDetails&maxResults=${resultsPerPage}&chart=mostPopular&key=AIzaSyBja-ElTLPls0Ja125lVoNtFZhcCfBzXAE`)
          commit('setVideos', data)
        }
        // if (isServer && params.id) {
        //   let {data} = await axios.get(`posts/${params.id}`)
        //   commit('setCurrentPost', data)
        // }
      }
    }
  })
}

export default createStore
