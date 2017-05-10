import Vue from "vue";
import Vuex from "vuex";
import * as actions from './actions'

Vue.use(Vuex);

// 应用初始状态
const state = {
    count: 10,
    loading:false
}


// 定义所需的 mutations
const mutations = {
    increment(state) {
        state.count++
    },
    todolist(state) {
        state.count--
    },
    changeLoading(state){
    	state.loading = !state.loading;
    }
}

// 创建 store 实例
export default new Vuex.Store({
   
  state,
  mutations,
  actions

})
