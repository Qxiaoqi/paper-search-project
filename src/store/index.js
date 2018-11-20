import Vue from "vue";
import Vuex from "vuex";
import conditions from "./modules/conditions";
import periodical from "./modules/periodical";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    conditions,
    periodical
  }
});
