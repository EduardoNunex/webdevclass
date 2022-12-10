import { createStore } from 'vuex'

export default createStore({
  state: {
      user:'ExempleUser',
      btnCheckValue:true
  },
  getters: {
  },
  mutations: {
    changeBtn(state,valorBtn){
      if(valorBtn=='No'){
        state.btnCheckValue=true
      }else{
        state.btnCheckValue=false
      }
      
    }
  },
  actions: {
  },
  modules: {
  }
})
