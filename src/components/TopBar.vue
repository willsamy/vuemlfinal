<template>
    <div id="topbar" :style="{ width: topbarWidth }">
      <span>Mâncio Lima - Banco de Dados</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isExpandedItem: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      topbarWidth() {
        return this.isExpandedItem ? '350px' : '300px';
      }
    }
  };
  </script>
  
  <style scoped>
  #topbar {
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    background-color: #dedede;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    transition: width 0.3s;
  }
  </style>
  