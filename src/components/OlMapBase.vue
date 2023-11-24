<template>
    <ol-map
      :loadTilesWhileAnimating="true"
      :loadTilesWhileInteracting="true"
      style="height: 100vh; width: 100vw"
    >
      <ol-view
        ref="view"
        :center="center"
        :zoom="zoom"
        :rotation="rotation"
        :projection="projection"
      />
      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>
      
      <!-- Camada GeoJSON -->
      <ol-vector-layer v-if="isGeoJSONLayer">
        <ol-source-vector :url="currentLayerUrl" :format="geoJson"></ol-source-vector>
      </ol-vector-layer>
  
      <!-- Camada WMS -->
      <ol-tile-layer v-if="isWMSLayer">
        <ol-source-tile-wms :url="currentWMSUrl" :params="wmsParams"></ol-source-tile-wms>
      </ol-tile-layer>
    </ol-map>
  </template>
  
  <script setup>
  import { computed, inject, ref, watch } from "vue";
  import { useStore } from "vuex";
  
  const store = useStore();
  const format = inject("ol-format");
  const geoJson = new format.GeoJSON();
  
  const center = ref([-72.89583, -7.61452]);
  const projection = ref("EPSG:4326");
  const zoom = ref(8);
  const rotation = ref(0);
  
  // Computado para determinar se a camada atual é GeoJSON
  const isGeoJSONLayer = computed(() => {
    return store.state.currentLayer?.endsWith('.geojson');
  });
  
  // Computado para determinar se a camada atual é WMS
  const isWMSLayer = computed(() => {
    return store.state.currentLayer?.endsWith('.wms');
  });
  
  // URL da camada atual para GeoJSON
  const currentLayerUrl = computed(() => {
    if (isGeoJSONLayer.value) {
      const layerName = store.state.currentLayer.replace('.geojson', '');
      return `http://38.50.58.66:8081/geoserver/mlserver/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=mlserver:${layerName}&maxFeatures=50&outputFormat=application%2Fjson`;
    }
    return null;
  });
  
  // URL da camada atual para WMS
  const currentWMSUrl = computed(() => {
    if (isWMSLayer.value) {
      return 'http://38.50.58.66:8081/geoserver/mlserver/wms';
    }
    return null;
  });
  
  // Parâmetros para a camada WMS
  const wmsParams = computed(() => {
  if (isWMSLayer.value) {
    const layerName = store.state.currentLayer.replace('.wms', '');
    return {
      'LAYERS': `mlserver:${layerName}`,
      'TILED': true,
      'VERSION': '1.1.0',
      'FORMAT': 'application/atom xml',
      'SRS': 'EPSG:3857',
      // Adicione outros parâmetros conforme necessário
    };
  }
  return {};
  });
  
  watch(() => store.state.currentLayer, () => {
    // Adicione lógica adicional se necessário
  });
  </script>
  