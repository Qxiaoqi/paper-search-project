import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    conditionTotal: 0,
    conditionList: [
      {
        id: 1,
        value: "一月"
      },
      {
        id: 11,
        value: "2018"
      }
    ]
  },
  mutations: {},
  actions: {}
});
