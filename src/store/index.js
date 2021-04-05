import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,
    count: 1,
    birds: {},
    correctBird: {}
  },
  mutations: {
    setBirds (state, birds) {
      state.birds = birds
    },
    setScore (state, score) {
      state.score = score
    },
    setCount (state, count) {
      state.count = count
    },
    setCorrectBird (state, bird) {
      state.correctBird = bird
    },
    incrementScore (state) {
      state.score++
    },
    incrementCount (state) {
      state.count++
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
