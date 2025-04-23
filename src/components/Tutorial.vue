<script setup>
import { ref } from "vue";

const currentSlide = ref(0);

const slides = [
  {
    text: "En haut du plateau de jeu, il y a la solution qui est cachée.",
    img: new URL("/solution.png", import.meta.url).href,
    alt: "Solution de la combinaison de couleurs à deviner",
  },
  {
    text: "En bas du plateau de jeu, il y a une réserve de couleurs disponibles.",
    img: new URL("/reserve_de_couleurs.png", import.meta.url).href,
    alt: "Réserve de couleurs disponibles pour le jeu",
  },
  {
    text:
      "Il faut deviner la bonne combinaison en faisant des propositions, dans les rangées de gauche.",
    img: new URL("/combinaison_couleurs.png", import.meta.url).href,
    alt: "Rangée pour proposer des combinaisons de couleurs",
  },
  {
    text: `
      Dans les rangées de droite, on vous aide à chaque tentative. `,
    img: new URL("/check_peons.png", import.meta.url).href,
    alt: "Vérification du nombre de pions présents et/ou bien placés.",
  },
  {
    text: ` 
      Les pions noirs indiquent le nombre de couleurs bien placées.`,
    img: new URL("/check_peons.png", import.meta.url).href,
    alt: "Vérification du nombre de pions présents et/ou bien placés.",
  },
  {
    text: `
      Les pions blancs indiquent le nombre de couleurs présentes mais mal placées.  `,
    img: new URL("/check_peons.png", import.meta.url).href,
    alt: "Vérification du nombre de pions présents et/ou bien placés.",
  },
  {
    text: `  
      ATTENTION: Les pions blancs et noirs indiquent uniquement le nombre de couleurs présentes ou bien placées, pas leur emplacement.`,
    img: new URL("/check_peons.png", import.meta.url).href,
    alt: "Vérification du nombre de pions présents et/ou bien placés.",
  },
];

const nextSlide = () => {
  if (currentSlide.value < slides.length - 1) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0;
  }
};
</script>

<template>
  <div class="tuto-container">
    <div class="tuto-title">
      COMMENT JOUER AU MASTERMIND ?
      <div>{{ currentSlide + 1 }} / {{ slides.length }}</div>
    </div>
    <div class="tuto-text">
      <div v-html="slides[currentSlide].text.replace(/\n/g, '<br>')"></div>
      <div>
        <img :src="slides[currentSlide].img" :alt="slides[currentSlide].alt" />
      </div>
    </div>
    <button class="next-button" @click="nextSlide">Suivant</button>
  </div>
</template>
<style scoped>
.tuto-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 90vh;
  width: 90vw;
  max-width: 1487px;
  margin: auto;
  padding: 5vh 5vw;
  background-color: #bdd5ea;
  font-family: sans-serif;
  font-size: 1.4rem;
  opacity: 0.95;
  text-align: center;
  z-index: 10;
  overflow: hidden;
}
.tuto-title {
  position: absolute;
  top: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  color: #424b54;
  font-size: 1.5rem;
  font-weight: bold;
}
.tuto-text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 50%;
  width: 75%;
  max-width: 1117px;
  border: 4px #424b54 solid;
  border-radius: 10%;
  box-shadow: 2px 2px 8px, -2px -2px 8px;
  background-color: white;
}
.tuto-text > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  padding: 0 8vw;
  text-align: center;
}

img {
  width: 90%;
  max-height: 150px;
  max-width: 800px;
  object-fit: contain;
}
.next-button {
  position: absolute;
  bottom: 2vh;
  padding: 0.8rem 1.2rem;
  border: none;
  background-color: #424b54;
  color: white;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
}
@media screen and (max-width: 759px) {
  .tuto-container {
    font-size: 1.2rem;
  }
  .tuto-title {
    top: 12vh;
    justify-content: space-between;
    height: 8vh;
    font-size: 1.1rem;
  }
  .tuto-text {
    top: 58vh;
    height: 40vh;
    padding: 4vh 4vw;
    border-radius: 5%;
  }
  .tuto-text > div:nth-child(1) {
    justify-content: center;
    border-bottom: #424b54 solid 2px;
  }
  .tuto-text > div:nth-child(2) {
    justify-content: end;
  }
  img {
    width: 100%;
    max-height: 100px;
    max-width: 800px;
    object-fit: contain;
  }
  .next-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4vh;
    padding: 0.8rem;
    font-size: 0.8rem;
  }
}
</style>
