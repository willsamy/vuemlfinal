import { createStore } from "vuex";

export default createStore({
  state: {
    currentLayer: null,  // Nome da camada atual com a extensão (ex: 'ML_Aldeias_Indigenas.geojson')
  },
  mutations: {
    // Mutação para atualizar o nome da camada atual
    setCurrentLayer(state, layerName) {
      state.currentLayer = layerName;
    },
  },
  actions: {
    // Ação para atualizar o nome da camada atual
    updateCurrentLayer({ commit }, layerName) {
      commit('setCurrentLayer', layerName);
    },
  },
});
