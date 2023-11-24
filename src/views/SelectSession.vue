<template>
  <div id="app" class="container">
    <div class="card-wrap"
      data-video="./MLVideo.mp4"
      @click="redirectTo('/dash-board-adv')">
      <div class="card">
        <div class="card-bg" :style="cardBgStyle"></div>
        <div class="card-info">
            <h1>Turísmo</h1>
            <p>Tour pela natureza e cultura de Mâncio Lima. Visita às florestas, rios e comunidades ribeirinhas da região.</p>
          </div>
      </div>
    </div>

    <div class="card-wrap"
      data-image="./mapimage.jpg"

      @click="redirectToExternal('https://v03.willsamy.repl.co/')">
      <div class="card">
        <div class="card-bg" :style="cardBgStyle"></div>
        <div class="card-info">
            <h1>Banco de Dados</h1>
            <p>Dados geo sobre a região de Mâncio Lima.</p>
          </div>
      </div>
    </div>
  </div>
</template>

  
<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const cardBgStyle = ref('transform: translateX(0px) translateY(0px);');
    const router = useRouter();

    onMounted(() => {
      const cardWraps = document.querySelectorAll('.card-wrap');

      cardWraps.forEach((cardWrap, index) => {
        let width = cardWrap.querySelector('.card').offsetWidth;
        let height = cardWrap.querySelector('.card').offsetHeight;

        const videoSrc = cardWrap.getAttribute('data-video');
        const bgImage = cardWrap.getAttribute('data-image');
        if (bgImage) {
          cardWrap.querySelector('.card-bg').style.backgroundImage = `url(${bgImage})`;
        }

        cardWrap.addEventListener('mousemove', (e) => handleMouseMove(e, cardWrap, width, height));
        cardWrap.addEventListener('mouseenter', () => clearTimeout(mouseLeaveDelay));
        cardWrap.addEventListener('mouseleave', () => handleMouseLeave(cardWrap));
        
        if (videoSrc && index === 0) {
          const video = document.createElement('video');
          video.src = videoSrc;
          video.autoplay = true;
          video.muted = true;
          video.loop = true;
          video.classList.add('data-video');
  
          cardWrap.querySelector('.card-bg').appendChild(video);
        }
      });
    });

    let mouseLeaveDelay = null;

    function handleMouseMove(e, cardWrap, width, height) {
      let mouseX = e.pageX - cardWrap.offsetLeft - width / 5;
      let mouseY = e.pageY - cardWrap.offsetTop - height / 2;

      const mousePX = mouseX / width;
      const mousePY = mouseY / height;

      const rX = mousePX * 30;
      const rY = mousePY * -30;
      cardWrap.querySelector('.card').style.transition = "transform 0.5s ease";
      cardWrap.querySelector('.card').style.transform = `rotateY(${rX}deg) rotateX(${rY}deg)`;

      const tX = mousePX * -40;
      const tY = mousePY * -40;
      cardWrap.querySelector('.card-bg').style.transition = "transform 0.5s ease";
      cardWrap.querySelector('.card-bg').style.transform = `translateX(${tX}px) translateY(${tY}px)`;
    }

    function handleMouseLeave(cardWrap) {
      cardWrap.querySelector('.card').style.transition = "transform 0.5s ease";
      cardWrap.querySelector('.card').style.transform = "rotateY(0deg) rotateX(0deg)";
      cardWrap.querySelector('.card-bg').style.transition = "transform 0.5s ease";
      cardWrap.querySelector('.card-bg').style.transform = "translateX(0px) translateY(0px)";

      mouseLeaveDelay = setTimeout(() => {
        cardWrap.querySelector('.card').style.transition = "";
        cardWrap.querySelector('.card-bg').style.transition = "";
      }, 500);
    }

    function redirectTo(url) {
      router.push(url); // Usando Vue Router para navegação interna
    }

    function redirectToExternal(url) {
      window.location.href = url; // Para URLs externas
    }

    return {
      cardBgStyle,
      redirectTo,
      redirectToExternal
    };
  }
};
</script>

  
  <style scoped>
  /* Estilos CSS aqui */
  </style>

<style scoped>
body {
  margin: 40px 0;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  background-color: #242424;
  -webkit-font-smoothing: antialiased;
  
}


.title {
  
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
  color: #d9d9d9;
  text-align: center;
  
}

p {
  line-height: 1.5em;
  color: white;
  
  
}

h1+p, p+p {
  margin-top: 10px;
  
  
}

.container {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  
}

.card-wrap {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  
  
  
}

.card-wrap:hover .card-info {
  transform: translateY(0);
}

.card-wrap:hover .card-info p {
  opacity: 1;
}

.card-wrap:hover .card-info,
.card-wrap:hover .card-info p {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  
}

.card-wrap:hover .card-info:after {
  transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 1;
  transform: translateY(0);
}

.card-wrap:hover .card-bg {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 0.5;
}

.card {
  position: relative;
  flex: 0 0 240px;
  width: 300px;
  height: 600px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow:
  rgba(black, 0.66) 0 30px 60px 0,
  inset #333 0 0 0 5px,
  inset rgba(white, 0.5) 0 0 0 6px;
  
  
}

.card-bg {
  opacity: 0.5;
  position: relative;
  top: -20px; left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat:no-repeat;
  background-position: center;
  background-size: cover;
  
}

.card-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  overflow: scroll ;
}

.card-info p {
  opacity: 0;
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  margin: 0;
}

.card-info:after {
  content: "";
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  transform: translateY(100%);
  opacity: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: #FFF transparent transparent transparent;
  transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
}

.card-info h1 {
  font-family: "Playfair Display";
  font-size: 36px;
  font-weight: 700;
  text-shadow: rgba(black, 0.5) 0 10px 10px;
  color: #FFF;
  margin: 0 0 10px;
  
}

.data-image {
  z-index: -1;
  
}
.data-video {
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>