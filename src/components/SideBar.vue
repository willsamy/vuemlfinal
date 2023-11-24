<template>
  <div id="sidebar">
    <ul>
      <li
        @mouseover="tooltip = 'Home'"
        @mouseout="tooltip = ''"
        @click="toggleExpand('home')"
      >
        <i class="fas fa-home"></i>
        <span class="tooltip-text" v-show="tooltip === 'Home'">Home</span>
      </li>
      <transition name="slice-fade">

        <div class="expanded-content" v-if="expandedItem === 'home'">
          <p>Conteúdo expandido de Home</p>
          
        </div>
      </transition>

      <li
        @mouseover="tooltip = 'Categorias Fundiárias'"
        @mouseout="tooltip = ''"
        @click="toggleExpand('road')"
      >
        <i class="fas fa-road"></i>
        <span class="tooltip-text" v-show="tooltip === 'Categorias Fundiárias'"
          >Categorias Fundiárias</span
        >
      </li>
      <transition name="slide">
        <div class="expanded-content" v-if="expandedItem === 'road'">
          <p>Conteúdo expandido para Categorias Fundiárias</p>
          <SelectM1ADV></SelectM1ADV>
        </div>
      </transition>

      <li
        @mouseover="tooltip = 'Infraestrutura e Logística'"
        @mouseout="tooltip = ''"
        @click="toggleExpand('bridge')"
      >
        <i class="fas fa-archway"></i>
        <span
          class="tooltip-text"
          v-show="tooltip === 'Infraestrutura e Logística'"
          >Infraestrutura e Logística</span
        >
      </li>
      <transition name="slide">
        <div class="expanded-content" v-if="expandedItem === 'bridge'">
          <p>Conteúdo expandido para Infraestrutura e Logística</p>
        </div>
      </transition>

      <li
        @mouseover="tooltip = 'Sistemas Produtivos'"
        @mouseout="tooltip = ''"
        @click="toggleExpand('land-use')"
      >
        <i class="fas fa-seedling"></i>
        <span class="tooltip-text" v-show="tooltip === 'Sistemas Produtivos'"
          >Sistemas Produtivos</span
        >
      </li>
      <transition name="slide">
        <div class="expanded-content" v-if="expandedItem === 'land-use'">
          <p>Conteúdo expandido para Sistemas Produtivos</p>
        </div>
      </transition>

      <li
        @mouseover="tooltip = 'Cobertura do Solo'"
        @mouseout="tooltip = ''"
        @click="toggleExpand('tree')"
      >
        <i class="fas fa-tree"></i>
        <span class="tooltip-text" v-show="tooltip === 'Cobertura do Solo'"
          >Cobertura do Solo</span
        >
      </li>
      <transition name="slide">
        <div class="expanded-content" v-if="expandedItem === 'tree'">
          <p>Conteúdo expandido para Cobertura do Solo</p>
        </div>
      </transition>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import SelectM1ADV from "../components/SelectM1ADV.vue";

export default {
  components: {
    SelectM1ADV
  },
  setup(_, { emit }) {
    const expandedItem = ref(null);
    const tooltip = ref("");

    const toggleExpand = (item) => {
      expandedItem.value = expandedItem.value === item ? null : item;
      emit("update:isExpandedItem", expandedItem.value !== null);
    };

    return { expandedItem, toggleExpand, tooltip };
  },
};
</script>

<style scoped>
#sidebar {
  position: fixed;
  top: 50px;
  left: 0;
  height: calc(100% - 50px);
  width: 50px;
  background-color: #dedede;
  z-index: 2;
}

#sidebar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#sidebar ul li {
  position: relative;
  text-align: center;
  margin: 20px 0;
}

#sidebar ul li i {
  color: black;
  font-size: 24px;
  cursor: pointer;
}

#sidebar ul li i:hover {
  color: #00c281;
}

.expanded-content {
  display: block;
  position: absolute;
  left: 50px;
  top: 0;
  background: rgb(40, 158, 132);
  color: white;
  width: 250px;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
  overflow: auto;
  transition: width 0.3s ease, opacity 0.3s ease;
  z-index: 1;
  opacity: 1;
}

.tooltip-text {
  visibility: hidden;
  background-color: #ffa500;
  color: #000000;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  position: absolute;
  z-index: 4;
  left: 60px;
  top: 50%;
  white-space: nowrap;
  transform: translateY(-50%);
}

#sidebar ul li:hover .tooltip-text {
  visibility: visible;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.slice-fade-enter-active,
.slice-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slice-fade-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.slice-fade-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
