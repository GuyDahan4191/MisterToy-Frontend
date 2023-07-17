import { createStore } from 'vuex'
import { toyStore } from './toy.store.js'

export const store = createStore({
  strict: true,
  modules: {
    toyStore,
  },
})

export default store
