import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import axios from '@/plugins/axios'

// "/videos?part=snippet%2CcontentDetails%2Cstatistics%2CtopicDetails&chart=mostPopular&key=AIzaSyBja-ElTLPls0Ja125lVoNtFZhcCfBzXAE"

const createStore = () => {
  return new Vuex.Store({
    state: {
      videos: []
    },
    // plugins: [createPersistedState()],
    mutations: {
      setVideos: (state, videos) => {
        state.videos = videos
      }
    },
    actions: {
      async getVideos ({ commit }) {
        const { data } = await axios.get(`/videos?part=snippet%2CcontentDetails%2Cstatistics%2CtopicDetails&chart=mostPopular&key=AIzaSyBja-ElTLPls0Ja125lVoNtFZhcCfBzXAE`)
        console.log('data: ', data)
        commit('setVideos', data.items)
      },
      async nuxtServerInit ({ commit }, { store, isClient, isServer, route, params }) {
        if (isServer && route.name === '/') {
          const { data } = await axios.get('/videos?part=snippet%2CcontentDetails%2Cstatistics%2CtopicDetails&chart=mostPopular&key=AIzaSyBja-ElTLPls0Ja125lVoNtFZhcCfBzXAE')
          console.log('data: ', data)
          commit('setVideos', data.items)
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
