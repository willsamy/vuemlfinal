<template>
  <div class="container" @animationend="startRedirectTimer">
    <img
      class="animate__animated animate__backInDown animate__delay-1s image"
      src="./img/v1.png"
      id="image1"
    />

    <img
      class="animate__animated animate__backInDown animate__delay-2s image"
      src="./img/v2.png"
      id="image2"
    />
    <img
      class="animate__animated animate__backInDown animate__delay-3s image"
      src="./img/v3.png"
      id="image3"
    />
    <img
      class="animate__animated animate__backInDown animate__delay-4s image"
      src="./img/v4.png"
      id="image4"
    />
  </div>
</template>

<script>
export default {
  name: 'InicialPage',
  mounted() {
    const container = document.querySelector('.container');
    container.addEventListener('animationend', this.startRedirectTimer);
  },
  methods: {
    startRedirectTimer() {
      setTimeout(() => {
        this.$router.push('/select-session');
      }, 3500);
    }
  }
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.image {
  width: auto;
  height: auto;
  min-width: 50px;
  min-height: 50px;
  margin: 1%;
  border-radius: 5px;
  border: 5px solid #FFFFFF;
}

body {
  background-color: #1c1c1c;
}

/* Correção no seletor de borda para aplicar a cor laranja */
.image {
  border-color: rgb(255, 255, 255);
}
</style>