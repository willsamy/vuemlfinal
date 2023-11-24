<template>
  <TopBar :isExpandedItem="isSidebarExpanded" />
  <SideBar @update:isExpandedItem="isSidebarExpanded = $event" />
  <OlMapBase />
  <!-- Outros componentes -->
</template>

<script>
import TopBar from "../components/TopBar.vue";
import SideBar from "../components/SideBar.vue";
import OlMapBase from "../components/OlMapBase.vue";

export default {
  components: {
    TopBar,
    SideBar,
    OlMapBase,
  },
  data() {
    return {
      isSidebarExpanded: false,
    };
  },
};
</script>
