// layerManager.js

export const updateLayer = (urlRef, layerName) => {
    const baseUrl = "http://38.50.58.66:8081/geoserver/mlserver/ows";
    const params = {
      service: "WFS",
      version: "1.0.0",
      request: "GetFeature",
      typeName: `mlserver:${layerName}`,
      maxFeatures: 50,
      outputFormat: "application/json"
    };
    const queryString = new URLSearchParams(params).toString();
    urlRef.value = `${baseUrl}?${queryString}`;
  };
  
  export const addLayer = (activeLayers, url, layerName) => {
    if (!activeLayers.value.includes(layerName)) {
      activeLayers.value.push(layerName);
      updateLayer(url, layerName);
    }
  };
  
  export const removeLayer = (activeLayers, url, layerName) => {
    const index = activeLayers.value.indexOf(layerName);
    if (index > -1) {
      activeLayers.value.splice(index, 1);
      if (activeLayers.value.length > 0) {
        updateLayer(url, activeLayers.value[activeLayers.value.length - 1]);
      } else {
        url.value = null; // Nenhuma camada ativa
      }
    }
  };
  