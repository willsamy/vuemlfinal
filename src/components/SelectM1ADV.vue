<template>
    <div class="card flex justify-content-center">
      <Dropdown v-model="selectedLayer" :options="layers" optionLabel="name" placeholder="Select a Layer" class="w-full md:w-14rem" />
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from "vue";
  import { useStore } from "vuex";
  import Dropdown from "primevue/dropdown";
  
  const store = useStore();
  const selectedLayer = ref(null);
  
  const layers = ref([
    { name: 'Terras Indigenas', code: 'ML_Aldeias_Indigenas.geojson' },
    { name: 'Unidades de Conservação', code: 'ML_Planet_Jun2023.wms' },
    { name: 'Assentamentos Rurais', code: 'ML_Assentamentos_Rurais.geojson' },
    { name: 'Imóveis Rurais (Ins. no CAR)', code: 'ML_Imoveis_Rurais.wms' },
    // Adicione mais opções conforme necessário
  ]);
  
  watch(selectedLayer, (newValue) => {
    if (newValue) {
      store.dispatch('updateCurrentLayer', newValue.code);
    }
  });
  </script>
  