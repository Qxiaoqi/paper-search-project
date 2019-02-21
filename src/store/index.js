import Vue from "vue";
import Vuex from "vuex";
import conditions from "./modules/conditions";
import periodical from "./modules/periodical";
import checkedArticle from "./modules/checkedArticle";
import loading from "./modules/loading"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    conditions,
    periodical,
    checkedArticle,
    loading
  }
});
