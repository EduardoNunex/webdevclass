import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      name:'',
      email:'',
      pass:''
    },
    btnCheckValue: true
  },
  getters: {
  },
  mutations: {
    changeBtn(state, valorBtn) {
      if (valorBtn == 'No') {
        state.btnCheckValue = true
      } else {
        state.btnCheckValue = false
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
